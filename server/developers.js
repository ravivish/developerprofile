const express = require("express");
const { nanoid } = require("nanoid");
const axios = require("axios");

const appdata = require("./appdata");

const router = express.Router();

router.get("/", (req, res) => {
  const data = [];
  appdata.forEach((element) => {
    data.push({
      id: element.id,
      avatar_url: element.avatar_url,
      name: element.name,
      login: element.login,
    });
  });
  res.status(200).send(data);
});

router.post("/", (req, res) => {
  const data = {};
  if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
    res.status(404).send({ message: "send valid data" });
  } else {
    const shortid = nanoid(5);
    data.id = shortid;
    data.githubid = req.body.github_id;
    data.linkedinid = req.body.linkedin_id;
    data.codechefid = req.body.codechef_id;
    data.hackerrankid = req.body.hackerrank_id;
    data.twitterid = req.body.twitter_id;
    data.mediumid = req.body.medium_id;
    try {
      axios
        .get(`https://api.github.com/users/${data.githubid}`)
        .then((response) => {
          // eslint-disable-next-line no-console
          // console.log(response.data.avatar_url);
          if (response.status !== 200) {
            return res.status(404).send({ message: "invalid github username" });
          }
          data.avatar_url = response.data.avatar_url;
          data.name = response.data.name;
          data.repos = response.data.repos_url;
          data.login = response.data.login;
          data.company = response.data.company;
          data.blog = response.data.blog;
          data.location = response.data.location;
          data.email = response.data.email;
          data.bio = response.data.bio;
          // console.log(data);
          appdata.push(data);
          res.status(201).send({ id: shortid });
        })
        .catch(() => {
          // eslint-disable-next-line no-console
          // console.log(error);
          return res.status(404).send({ message: "invalid github username" });
        });
    } catch (error) {
      // eslint-disable-next-line no-console
      // console.error(error);
      return res.status(404).send({ message: error });
    }
  }
});

router.get("/:id", (req, res) => {
  const id = req.params.id.substr(1);
  const developer = appdata.find((i) => i.id === id);
  if (developer) {
    try {
      axios
        .get(`https://api.github.com/users/${developer.githubid}/repos`)
        .then((response) => {
          developer.repos = [];
          response.data.forEach((element) => {
            developer.repos.push({
              name: element.name,
              html_url: element.html_url,
              description: element.description,
              updated_at: element.updated_at,
            });
          });
          res.status(200).send(developer);
        })
        .catch(() => {
          res.status(400).send({});
        });
    } catch (error) {
      res.status(400).send({});
    }
  } else {
    res.status(400).send({});
  }
});

router.get("/users/:id", (req, res) => {
  const id = req.params.id.substr(1);
//   console.log(name.toLocaleUpperCase());

  // appdata.filter(i => {
  //     console.log(i.name, 'Ravi Vishwakarma', i.name === 'Ravi Vishwakarma');
  //     return i.name === 'Ravi Vishwakarma';
  // });
  // and
//   const user = appdata.filter((i) => {
//     // console.log(i.name, name, i.name === name);
//     return i.name === name;
//   });
  const user = appdata.filter((i) => i.id.toLocaleUpperCase() === id.toLocaleUpperCase());  
//   console.log(user);
//   if (user !== undefined && user.length > 0) {
//     return res.status(200).send(user);
//   }
  return res.status(200).send(user);
});
router.delete("/:id", (req, res) => {
  const id = req.params.id.substr(1);
  const index = appdata.findIndex((o) => o.id === id);
  if (index !== -1) appdata.splice(index, 1);
  res.status(204).send({});
});

module.exports = router;
