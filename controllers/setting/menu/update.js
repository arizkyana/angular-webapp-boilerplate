angular.module('foodgasm')
    .controller('SettingMenuUpdateController', [
        '$rootScope',
        '$scope',
        '$resource',
        'API',
        'Menu',
        '$stateParams',
        function ($rootScope, $scope, $resource, API, Menu, $stateParams) {

            $scope.menu = {};

            Menu.get({id: $stateParams.id})
                .$promise
                .then(function (result) {
                    $scope.menu = result;
                })
                .catch(function (err) {
                    console.log(err);
                });

            $scope.save = function () {
                $scope.menu.parent = Number($scope.menu.parent);
                Menu.create($scope.menu)
                    .$promise
                    .then(function (result) {
                        console.log(result);
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            };

        }
    ])
    .directive('parents', [
        '$ocLazyLoad',
        '$resource',
        'API',
        '$q',
        '$stateParams',
        'Menu',
        '$timeout',
        '$compile',
        function ($ocLazyLoad, $resource, API, $q, $stateParams, Menu, $timeout, $compile) {

            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    $ocLazyLoad.load('themes/js/plugins/select2/select2.full.min.js')
                        .then(function () {
                            return $q.all([
                                Menu.query().$promise,
                                Menu.get({id: $stateParams.id}).$promise
                            ])
                        })
                        .then(function (results) {

                            scope.parents = results[0];
                            scope.menu.parent = 9;
                            // scope.parent = results[1].parent;
                            $compile(element.select2())(scope);
                            $timeout(function(){
                                console.log(results[1].parent);
                                // element.select2().val(results[1].parent).trigger('change');
                            }, 1000, false);


                        })
                        .catch(function (err) {
                            console.log(err);
                        });
                }


            }

        }]);