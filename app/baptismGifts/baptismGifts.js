'use strict';

angular.module('daninnyApp.baptismGifts', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/baptismGifts', {
            templateUrl: 'app/baptismGifts/baptismGifts.html',
            controller: 'BaptismGiftsCtrl'
        });
    }])

    .controller('BaptismGiftsCtrl', ['$scope', function($scope) {
        $scope.baptismGifts = [
            {
                photo:'app/components/img/baptism/sunnyBag1.jpg',
                category:'Кръщене',
                itemName:'Торбичка с бонбони "Слънчице"'
            },
            {
                photo:'app/components/img/baptism/tringle.jpg',
                category:'',
                itemName:''
            }
        ]


    }]);