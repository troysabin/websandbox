require(["jquery","knockout.min","deliciousClient", "domReady!"], function($, ko, delicious) {

    $(function() {

        delicious.getBookmarks( function(bookmarks) {
        	ko.applyBindings(bookmarks);
        });        

    });
});