'use strict';

// Declare app level module which depends on views, and components
angular.module('daninnyApp', [
    'ngRoute',
    'angular-loading-bar',
    'ngAnimate',
    'daninnyApp.weddingGifts',
    'daninnyApp.littleBottles',
    'daninnyApp.candyBox',
    'daninnyApp.littleBasket',
    'daninnyApp.baptismGifts',
    'daninnyApp.artGifts',
    'daninnyApp.order',
    'daninnyApp.contacts'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/weddingGifts'});
}]);
