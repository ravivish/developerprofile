const express = require('express');
const path = require('path');
const app = express();

const api = require('./server/api');

const port = process.env.PORT || 4000;

app.use('/api', api);

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at http://localhost:${port}`);
});