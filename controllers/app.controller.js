'use-strict';

var app = angular.module('foodgasm', [
    'ngResource',
    'foodgasm.route'
]);

app.constant('API', {
    BASE_URI: 'http://localhost:1337'
});


app.run(['$rootScope', function($rootScope) {
    console.log("Angular is Running");
}]);