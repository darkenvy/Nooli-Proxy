var express   = require('express'),
    cheerio   = require('cheerio'),
    request   = require('request'),
    conformer = require('./conformer'),
    app       = express();



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
      let clean = conformer.urls(html, response.socket._host);
      res.send(clean)
    }
  })
})

console.log("Regular Express server listening on port 3000");
var server = app.listen(process.env.PORT || 3000);