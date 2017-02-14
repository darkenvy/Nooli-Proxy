var http      = require('http'),
    httpProxy = require('http-proxy'),
    express   = require('express'),
    app       = express();





var proxy = httpProxy.createProxyServer({});


app.get('/', function(req, res) {
  // proxy.web(req, res, { target: 'http://www.fatfingers.com/default.aspx' }, function(e) {
  //   res.send(e);
  // });
  proxy.web(req, res, { target: 'http://www.fatfingers.com/default.aspx' });
  // res.send('done');
})

console.log('Hosting server on port 3000');
var server = app.listen(process.env.PORT || 3000);