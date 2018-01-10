angular.module('foodgasm')
    .controller('SettingMenuUpdateController', [
        '$rootScope',
        '$scope',
        '$stateParams',
        '$log',
        '$resource',
        'API',

        function($rootScope, $scope, $stateParams, $log, $resource, API) {

            $scope.menu = {};

            let menu = $resource(API.BASE_URI + '/menu/' + $stateParams.id);
            menu
                .get()
                .$promise
                .then(function(result) {
                    $scope.menu = result;
                })
                .catch(function(err) {
                    console.log(err);
                });

            console.log('setting menu update controller');
        }
    ]);