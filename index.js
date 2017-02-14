var http      = require('http'),
    httpProxy = require('http-proxy'),
    harmon    = require('harmon'),
    express   = require('express'),
    app       = express();


var acceptMimes = [
  /html/,
  /xhtml/
  // 'text/html',
  // 'application/xhtml+xml'
]


var proxy = httpProxy.createProxyServer({});

// app.use(harmon([], selects));
app.get(/.*/, function(req, res) { 
  // proxy.web(req, res, { target: 'http://www.fatfingers.com/default.aspx' }, function(e) {
  //   res.send(e);
  // });
  if (req.headers.accept.match(/xhtml/) ||
      req.headers.accept.match(/html/)) {
    console.log('1', req.headers.host);
    // console.log(req.url, req.headers.accept);
    proxy.web(req, res, { target: req.headers.host });
  } else {
    console.log('ELSE');
    res.send('');
  }

  // proxy.on('error', function (err, req, res) {
  //   res.writeHead(500, {'Content-Type': 'text/plain'});
  //   console.log('ERROR: ', err);
  //   res.end('Something went wrong. And we are reporting a custom error message.');
  // });

  // console.log(req.headers.host);
  // proxy.web(req, res, { target: 'http://www.fatfingers.com/rw_common/themes/fatfingers/css/colour_scheme/day4.css' });
  // proxy.web(req, res, { target: 'http://www.fatfingers.com/default.aspx' });
  // proxy.web(req, res, { target: req.headers.host });
})

console.log('Hosting server on port 3000');
var server = app.listen(process.env.PORT || 3000);