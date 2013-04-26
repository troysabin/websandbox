require(['knockout.min', 'appViewModel', 'domReady!'], function(ko, appViewModel) {
    ko.applyBindings(new appViewModel());
});