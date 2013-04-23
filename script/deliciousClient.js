define(["jquery"], function($) {

    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.

	var url = "http://feeds.delicious.com/v2/json/troy.sabin?callback=?";


	return {
		getBookmarks: function(callback) {

			$.getJSON(url).done(function(data) {

				var bookmarks = [];
				$.each(data, function(index) {
					bookmarks.push(this);					
				});
				
				callback(bookmarks);
			});

		}
	};        
	
});