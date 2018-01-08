let menu = angular.module('foodgasm', []);
menu.controller('SettingMenuIndexController', [
    '$rootScope',
    '$scope',
    '$ocLazyLoad',
    'API',
    '$resource',

    function($rootScope, $scope, $ocLazyLoad, API, $resource) {


    }
]);

menu.directive('tableMenu', ['$ocLazyLoad', '$resource', 'API', '$q', function($ocLazyLoad, $resource, API, $q) {

    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

            scope.menus = [];

            let menus = $resource(API.BASE_URI + '/menu');


            // menus.query({}).$promise.then(function(result) {
            //     scope.menus = result;
            //     $ocLazyLoad
            //         .load([{ type: 'js', path: 'themes/js/plugins/dataTables/datatables.min.js', cache: true }])
            //         .then(function(result) {


            //             element.DataTable();
            //         });
            // });

        }
    }

}]);