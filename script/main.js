require(["jquery", "deliciousClient"], function($, delicious) {

    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {

        $('body').append("success");
        delicious.update( function(data) {
        	delicious.bookmarks = data;
        	$.each(delicious.bookmarks, function() {
	        	$('body').append('<p>' + this.d + '</p>');
	        });

        });        

    });
});
