// Twitter module
;(function (SocialFeed, root) {

    String.prototype.parseTwitterURL = function() {
    return this.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&~\?\/.=]+/g, function(url) {
      return url.link(url);
    });
  };

  String.prototype.parseTwitterUsername = function() {
    return this.replace(/[@]+[A-Za-z0-9-_]+/g, function(u) {
      var username = u.replace("@","")
      return u.link("http://twitter.com/"+username);
    });
  };

  String.prototype.parseTwitterHashtag = function() {
    return this.replace(/[#]+[A-Za-z0-9-_]+/g, function(t) {
      var tag = t.replace("#","%23")
      return t.link("http://twitter.com/search?q="+tag);
    });
  };

  root.TwitterModule = SocialFeed.Modules.extend({
    url: function () {
      // Heroku host for node-serverside.js
      // ident is here is count.
      return 'http://troysabin.azurewebsites.net/?count=' + (this.ident || 10)
    }

    , orderBy: function (item) {
      return -(new Date(item.created_at)).getTime();
    }

    , render: function (item) {
      //var html = '<h2>@'+item.user.screen_name+' tweeted:</h2>';
      var html = '<p>'+ item.text + '</p>';
      html = '<div class="socialfeed-item socialfeed-twitter"><i class="socialfeed-icon icon-twitter"></i>' + html + '</div>';
      return html.parseTwitterURL().parseTwitterUsername().parseTwitterHashtag();
    }
  });

})(SocialFeed, window);