// Working example. Hosts a server on https://localhost

var https = require('https'),
    fs = require('fs'), 
    express = require('express'), 
    app = express();
    
var secureServer = https.createServer({
    key: fs.readFileSync('./ssl/server.key'),
    cert: fs.readFileSync('./ssl/server.crt'),
    ca: fs.readFileSync('./ssl/ca.crt'),
    requestCert: true,
    rejectUnauthorized: false
}, app).listen(443, function() {
    console.log("Secure Express server listening on port 443");
});

app.get('/', (req,res) => {
  res.send('success secure')
})