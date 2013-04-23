define(["jquery"], function($) {

    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.

	var url = "http://feeds.delicious.com/v2/json/troy.sabin?callback=?";


	return {
		getBookmarks: function(callback) {

			$.getJSON(url).done(function(data) {

				var bookmarks = [];
				data.forEach(function(bookmark) {
					bookmarks.push(bookmark);					
				});
				
				callback(bookmarks);
			});

		}
	};        
	
});