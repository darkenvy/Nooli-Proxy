var httpProxy = require('http-proxy');
var http = require('http');
var https = require('https');
var proxy = httpProxy.createProxyServer({});
var express = require('express');
var app = express();

// httpProxy.createProxyServer({
  // target: 'https://google.com',
  // agent  : https.globalAgent,
  // headers: {
  //   host: 'google.com'
  // }
// }).listen(5050);




// var server = http.createServer(function(req, res) {
//   console.log(req.headers.host, req.url);
  // var ext = req.url.split('.');
  // if (ext && ext[ext.length-1] === 'fdsf') {
  //   res.write(''); res.end();
  // } 
  // else {
  // var options = {
  //   target: 'https://google.com',
  //   agent  : https.globalAgent,
  //   headers: { host: 'google.com' }
  // }
  // proxy.web(req, res, options, function(e) {
  //   if (e) {res.write(''); res.end()};
  // });
  // }
// });

// console.log("listening on port 5050")
// server.listen(5050);

// {target: req.headers}







// Successful express server that forwards a secure domain

let proxyServer = httpProxy.createProxyServer({
  target: 'https://github.com/',
  secure: false
  // target: 'http://tinycorelinux.net/',
  // agent  : https.globalAgent,
  // headers: { host: 'google.com' }
})

app.get('/', (req, res) => {
  console.log(req.url, req.headers);
  proxyServer.web(req, res);
})

var server = app.listen(process.env.PORT || 5050);