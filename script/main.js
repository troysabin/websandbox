require(["jquery", "deliciousClient"], function($, delicious) {

    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {

        delicious.getBookmarks( function(bookmarks) {
        	$.each(bookmarks, function() {
	        	$('#container').append('<p>' + this.d + '</p>'); 
	        });

        });        

    });
});