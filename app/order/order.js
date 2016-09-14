'use strict';

angular.module('daninnyApp.order', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/order', {
            templateUrl: 'app/order/order.html',
            controller: 'OrderCtrl'
        });
    }])

    .controller('OrderCtrl', [function () {

    }]);