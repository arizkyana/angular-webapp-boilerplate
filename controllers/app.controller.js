'use-strict';

var app = angular.module('foodgasm', [
    'ngResource',
    'ngRoute',
    'ui.router',
    'oc.lazyLoad'
]);

app.constant('API', {
    BASE_URI: 'http://localhost:1337'
});

// oc lazyload config
app.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        debug: true,
        events: true
    });
}]);

app.config([
    '$stateProvider',
    '$locationProvider',
    '$urlRouterProvider',
    function($stateProvider, $locationProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/app/dashboard');

        $stateProvider.state('app', {
                abstract: true,
                url: '/app',
                template: '<ui-view />',

            })
            .state('app.dashboard', {
                url: '/dashboard',
                templateUrl: 'views/dashboard/index.html',
                resolve: {
                    loadController: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('controllers/dashboard/index.js');
                    }]
                },
                controller: 'DashboardIndexController',
            })
            .state('app.setting', {
                abstract: true,
                url: '/setting',
                template: '<ui-view />'
            })
            .state('app.setting.user', {
                url: '/user',
                templateUrl: 'views/setting/user/index.html',
                resolve: {
                    loadController: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('controllers/setting/user/index.js');
                    }]
                },
                controller: 'SettingUserIndexController'
            })
            .state('app.setting.role', {
                url: '/role',
                templateUrl: 'views/setting/role/index.html',
                resolve: {
                    loadController: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('controllers/setting/role/index.js');
                    }]
                },
                controller: 'SettingRoleIndexController'
            })

            // menu
            .state('app.setting.menu', {
                url: '/menu',
                templateUrl: 'views/setting/menu/index.html',
                resolve: {
                    loadController: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('controllers/setting/menu/index.js');
                    }]
                },
                controller: 'SettingMenuIndexController'
            })
            .state('app.setting.menu.create', {
                url: '/create',
                replace: true,
                templateUrl: 'views/setting/menu/create.html'
            })

        // var app = {
        // 	name: 'app',
        // 	abstract: true,
        // }

        // var helloState = {
        //     name: 'hello',
        //     url: '/hello',
        //     template: '<h3>hello world!</h3>'
        // }

        // var aboutState = {
        //     name: 'about',
        //     url: '/about',
        //     template: '<h3>Its the UI-Router hello world app!</h3>'
        // }

        // $stateProvider.state(helloState);
        // $stateProvider.state(aboutState);

        // $locationProvider.html5Mode(true);


    }
]);

app.run(['$rootScope', function($rootScope) {
    console.log("Angular is Running");
}]);