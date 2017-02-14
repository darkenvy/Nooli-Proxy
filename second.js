var http = require('http'),
    httpProxy = require('http-proxy');

//
// Create a proxy server with custom application logic
//
var proxy = httpProxy.createProxyServer({});

// To modify the proxy connection before data is sent, you can listen
// for the 'proxyReq' event. When the event is fired, you will receive
// the following arguments:
// (http.ClientRequest proxyReq, http.IncomingMessage req,
//  http.ServerResponse res, Object options). This mechanism is useful when
// you need to modify the proxy request before the proxy connection
// is made to the target.
//
proxy.on('proxyReq', function(proxyReq, req, res, options) {
  proxyReq.setHeader('X-Special-Proxy-Header', 'foobar');
});

// proxy.on('error', function(e) {
//   console.log('ERROR ', e);
// });

var server = http.createServer(function(req, res) {

  console.log(req.headers.host);


  var ext = req.url.split('.');
  if (ext && ext[ext.length-1] === 'png') {
    res.write(''); res.end();
  } 
  else {
    proxy.web(req, res, {target: req.headers}, function(e) {
      if (e) {res.write(''); res.end()};
    });
  }
});

console.log("listening on port 5050")
server.listen(5050);

// http://hllanguage.com/
// http://hllanguage.com/css/owl.carousel.css
// http://hllanguage.com/css/bootstrap.min.css
// http://hllanguage.com/css/font-awesome.min.css
// http://hllanguage.com/css/style.css
// http://hllanguage.com/css/ionicons.min.css
// http://hllanguage.com/css/animate.css
// http://hllanguage.com/css/responsive.css
// http://hllanguage.com/css/main.css
// http://hllanguage.com/js/vendor/modernizr-2.6.2.min.js
// http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
// http://hllanguage.com/js/bootstrap.min.js
// http://hllanguage.com/js/owl.carousel.min.js
// http://hllanguage.com/js/plugins.js
// http://hllanguage.com/js/min/waypoints.min.js
// http://hllanguage.com/js/jquery.counterup.js
// http://hllanguage.com/js/main.js
// http://hllanguage.com/img/logo/Company-logo-01.png
// http://hllanguage.com/img/logo/blue-crane.png
// http://hllanguage.com/img/logo/red-crane.png
// http://hllanguage.com/img/icons/business_coordinating.png
// http://hllanguage.com/img/icons/concierge_translation.png
// http://hllanguage.com/img/icons/language_training.png
// http://hllanguage.com/img/icons/marketing.png
// http://hllanguage.com/img/icons/legal_translation.png
// http://hllanguage.com/img/icons/localization.png
// http://hllanguage.com/img/icons/meeting_translation.png
// http://hllanguage.com/img/icons/technical_translation.png
// http://hllanguage.com/img/icons/video-audio.png
// http://hllanguage.com/img/icons/website_translation.png
// http://fonts.googleapis.com/css?family=Open+Sans:400,300,600
// http://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700
// http://fonts.googleapis.com/css?family=Volkhov:400italic
// http://hllanguage.com/js/vendor/jquery-1.10.2.min.js
// http://hllanguage.com:35729/livereload.js?snipver=1
// http://hllanguage.com/img/slider-bg.jpg
// http://hllanguage.com/img/call-to-action-bg.jp