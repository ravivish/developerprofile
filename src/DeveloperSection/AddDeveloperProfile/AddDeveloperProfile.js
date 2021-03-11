import { Component } from "react";
import Modal from "../Modal/Modal";
import "./AddDeveloperProfile.css";

class AddDeveloperProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    // this.showModal = this.showModal.bind(this);
    // this.hideModal = this.hideModal.bind(this);
  }
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  handleChange = (e) => {
    if (e.target.name === "github_id") {
      this.setState({ github_id: e.target.value });
    }
    if (e.target.name === "linked_id") {
      this.setState({ linked_id: e.target.value });
    }
    if (e.target.name === "twitter_id") {
      this.setState({ twitter_id: e.target.value });
    }
    if (e.target.name === "medium_id") {
      this.setState({ medium_id: e.target.value });
    }
    if (e.target.name === "codechef_id") {
      this.setState({ codechef_id: e.target.value });
    }
    if (e.target.name === "hackerrank_id") {
      this.setState({ hackerrank_id: e.target.value });
    }
    if (e.target.name === "email_id") {
      this.setState({ email_id: e.target.value });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const request = new Request('http://localhost:3001/api/developers',{
      method: 'POST',
      body:JSON.stringify(this.state),
      headers:new Headers({
        'Content-Type':'application/json'
      })
    });
    fetch(request).then(res => res.json()).then(res => {
      if(res){
        debugger
        console.log(res.id);
      }
    }).catch(err => console.log(err));
  };

  render() {
    return (
      <section className="font-name">
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <h3 className="add-dev-heading">Add developer profile</h3>
          <div className="hrline">
            <hr />
          </div>
          <form name="add-developer">
            <div className="form-element">
              <label>
                <img
                  className="profile-icons"
                  src="/profile-icons/iconfinder_github_317712.png"
                  alt="github images"
                />
                Github<span>*</span>
              </label>
              <input
                className="input-box"
                type="text"
                value={this.state.github_id}
                name="github_id"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-element">
              <label>
                <img
                  className="profile-icons"
                  src="/profile-icons/app_logo_linkedin_3225190.png"
                  alt="linkedin images"
                />
                Linkedin
              </label>
              <input
                className="input-box"
                type="text"
                value={this.state.linked_id}
                name="linkedin_id"
              />
            </div>
            <div className="form-element">
              <label>
                <img
                  className="profile-icons"
                  src="/profile-icons/codechef-1324440139527402917_32.png"
                  alt="codechef images"
                />
                Codechef
              </label>
              <input
                className="input-box"
                type="text"
                value={this.state.codechef_id}
                name="codechef_id"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-element">
              <label>
                <img
                  className="profile-icons"
                  src="/profile-icons/Hackerrank_logo_4373234.png"
                  alt="github images"
                />
                Hackrank
              </label>
              <input
                className="input-box"
                type="text"
                value={this.state.hackerrank_id}
                name="hackerrank_id"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-element">
              <label>
                <img
                  className="profile-icons"
                  src="/profile-icons/logo_twitter_3225183.png"
                  alt="github images"
                />
                Twitter
              </label>
              <input
                className="input-box"
                type="text"
                value={this.state.twitter_id}
                name="twitter_id"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-element">
              <label>
                <img
                  className="profile-icons"
                  src="/profile-icons/Medium_svg5_5279113.png"
                  alt="medium images"
                />
                Medium
              </label>
              <input
                className="input-box"
                type="text"
                value={this.state.medium_id}
                name="medium_id"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-element">
              <label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                Email
              </label>
              <input
                className="input-box"
                type="text"
                value={this.state.email_id}
                name="email_id"
                onChange={this.handleChange}
              />
            </div>
          </form>
          <button className="btn" onClick={this.hideModal}>
            Cancel
          </button>
          <button className="btn btn-submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </Modal>
        <button className="developer-btn" onClick={this.showModal}>
          Add developer info
        </button>
      </section>
    );
  }
}

export default AddDeveloperProfile;
