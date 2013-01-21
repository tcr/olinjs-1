var express = require('express');

var app = express();
app.get('/', function (req, res) {
  res.send('<h1>Hello Olin.js!</h1>');
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Open the address http://localhost:' + port + '/');
});