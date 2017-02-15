var httpProxy = require('http-proxy');
var https = require('https'),
    http = require('http'),
    fs = require('fs'), 
    express = require('express'), 
    app = express();

var httpsServerOptions = {
    key: fs.readFileSync('./ssl/server.key'),
    cert: fs.readFileSync('./ssl/server.crt'),
    ca: fs.readFileSync('./ssl/ca.crt'),
    requestCert: true,
    rejectUnauthorized: false
}



// var httpsServer = https.createServer(httpsServerOptions, app);
// var httpServer  = http.createServer((req, res) => {
//     res.write('http non-secure');
//     res.end();
// })

// app.get('/', (req,res) => {
//   res.send('success secure. fifth.js')
// })


// httpsServer.listen(443, () => {
//     console.log("Secure Express server listening on port 443");
// });

// httpServer.listen(80, () => {
//     console.log("Regular Express server listening on port 80");
// })


httpProxy.createProxyServer({
  target: 'https://google.com',
  agent  : https.globalAgent,
  headers: {
    host: 'google.com'
  },
  ssl: httpsServerOptions
}).listen(443);