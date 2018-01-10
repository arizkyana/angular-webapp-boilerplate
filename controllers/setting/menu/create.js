angular.module('foodgasm')
    .controller('SettingMenuCreateController', [
        '$rootScope',
        '$scope',
        '$resource',
        'API',
        function($rootScope, $scope, $resource, API) {

            $scope.menu = {};

            $scope.save = function() {
                $resource(API.BASE_URI + '/menu', {}, {
                        menu: {
                            method: 'POST',
                            params: $scope.menu
                        }
                    }).save().$promise.then(function(result) {
                        console.log(result);
                    })
                    .catch(function(err) {
                        console.log(err);
                    });
            };

        }
    ])
    .directive('parents', ['$ocLazyLoad', '$resource', 'API', '$q', '$compile', function($ocLazyLoad, $resource, API, $q, $compile) {

        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                $ocLazyLoad.load('themes/js/plugins/select2/select2.full.min.js')
                    .then(function() {
                        return $resource(API.BASE_URI + '/menu').query().$promise
                    })
                    .then(function(result) {
                        scope.parents = result;
                        element.select2();
                    })
                    .catch(function(err) {
                        console.log(err);
                    });
            }


        }

    }]);