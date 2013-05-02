/**
 * A very naive/simple server-side tweet fetch-server. 
 * 
 * This is needed because of Twitters API rules. 
 * It is a sort of proxy, serving the tweets of a user to SocialFeed.js
 * 
 * Host on your server, or in the cloud (e.g. Heroku)
 */
var http = require('http')
  , url = require('url')
  , util = require('util')
  , Twit = require('twit') // npm install twit
  ;

var port = process.env.PORT || 3000
  , T = new Twit({
      consumer_key:         'NX0dMWLCcw5p7PYRdskHwA'
    , consumer_secret:      'FbZWV4wvufn0PW44ChoXkOcaSpxHA0RfiYCe3Fp0'
    , access_token:         '16655879-vJn95Ojje6jM3Zdb5FV6q03j1EjMpnvBUncnQWp8'
    , access_token_secret:  'fL16SsHVxch0xAWlbn06kOLiLiussIyrN3ezh7nGEvQ'
  }) 
  , username = 'troysabin'
  ;

http.createServer(function (req, res) {
  var _query = url.parse(req.url, true).query

  _query.screen_name = username;
  var callback = _query.callback;
  delete _query.callback;
  delete _query._;

  T.get('/statuses/user_timeline', _query, function(err, reply) {
    if (err) {
      res.writeHead(500, {'Content-Type': 'application/json'});
      res.write(JSON.stringify({ 
        error: err
      }));
      res.end();
      return;
    }
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(callback + '(' + JSON.stringify(reply) + ')');
    res.end();
  })
}).listen(port);


console.log('Server running at http://127.0.0.1:'+port+'/');

