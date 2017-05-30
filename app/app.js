'use strict';

// Declare app level module which depends on views, and components
angular.module('daninnyApp', [
    'ngRoute',
    'ngAnimate',
    'daninnyApp.littleBottles',
    'daninnyApp.candyBox',
    'daninnyApp.littleBasket',
    'daninnyApp.baptismGifts',
    'daninnyApp.artGifts',
    'daninnyApp.order',
    'daninnyApp.contacts',
    'ngAria',
    'ngMaterial',
    'ui.bootstrap',
    // 'ui.router'
])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/littleBasket'});


    }]);
