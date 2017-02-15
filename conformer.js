// Conformer is responsible for changing links and such so that the user
// stays on our proxy
var cheerio = require('cheerio');

function linkTest(link) { // If the test fails, return true
  return /localhost/.exec(link) ? false : true; 
}

module.exports = {
  urls: function(html, domain) {
    let $ = cheerio.load(html);
    let links = $('a');
    for (var i=0; i<links.length; i++) {
      if (links[i].attribs.href) {
        if (/mailto:/.exec(links[i].attribs.href)) {continue;}
        else if (links[i].attribs.href[0] === '/') {
          links[i].attribs.href = 'http://localhost:3000/' + domain + links[i].attribs.href
        }
        else if (linkTest(links[i].attribs.href)) {
          links[i].attribs.href = 'http://localhost:3000/' + links[i].attribs.href;
        } 
        
      }
    }
    return $.html();
  }
}