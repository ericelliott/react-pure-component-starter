var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);

const {
  HOST = 'localhost',
  PORT = 3000
} = process.env;

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(PORT, HOST, function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://${HOST}:${PORT}`);
});
