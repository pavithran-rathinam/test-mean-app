
(function () {
    'use strict';

    const dependencies = [
        'ui.router',
        'controllers',
        'directives',
        'services'
    ];
    angular.module('testApp', dependencies)
        .config(defaultConfig)
        .config(routerConfig);

    /**
     * Default Config
     * - App default redirection
     * @param {*} $urlRouterProvider 
     */
    function defaultConfig($urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    }

    /**
     * Router Config
     * - State router config
     * @param {*} $stateProvider 
     */
    function routerConfig($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/home.html',
                controller: 'homeViewController',
                controllerAs: 'home'
            })
            .state('addInput', {
                url: '/addInput',
                templateUrl: 'views/add-input.html',
                controller: 'addInputViewController',
                controllerAs: 'addInput'
            })
    }

})();
