let express   = require('express'),
    request   = require('request'),
    minify    = require('html-minifier').minify,
    conformer = require('./conformer'),
    app       = express();

let minifyOpt = {
  removeAttributeQuotes: true,
  collapseWhitespace: true,
  collapseInlineTagWhitespace: true,
  decodeEntities: true,
  minifyCSS: true,
  minifyJS: true,
  removeEmptyAttributes: true,
  removeEmptyElements: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true
};



app.use(express.static('public'));
app.get('/', (req,res) => {res.sendFile('index')})


app.get(/.*/, (req, res) => {
  // Sanitize the URL
  var url = req.url.slice(1);
  if (!/http/.exec(url)) url = 'http://' + url;
  
  // Get the page requested
  request(url, (err, response, html) => {
    if (err) { res.send(err) }
    else {
      // let cleanHMTL = conformer.urls(html, response.socket._host);
      // cleanHTML = minify(cleanHMTL, minifyOpt)
      // res.send(cleanHTML);
      res.send(minify(html, minifyOpt));
    }
  })
})

console.log("Regular Express server listening on port 3000");
var server = app.listen(process.env.PORT || 3000);