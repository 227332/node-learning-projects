const express = require('express');

const app = express();
const hostname = '0.0.0.0';
const port = 3000;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

const server = app.listen(port, hostname, () => { 
  console.log(`Express Server running at http://${hostname}:${port}/`);
});

module.exports = server;