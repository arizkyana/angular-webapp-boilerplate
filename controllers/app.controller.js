'use-strict';

var app = angular.module('foodgasm', [
    'ngResource',
    'oc.lazyLoad',
    'foodgasm.route'
]);

app.constant('API', {
    BASE_URI: 'http://localhost:1337'
});

app.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        debug: false,
        events: true
    });
}]);


app.run(['$rootScope', '$ocLazyLoad', function($rootScope, $ocLazyLoad) {
    console.log("Angular is Running");

}]);