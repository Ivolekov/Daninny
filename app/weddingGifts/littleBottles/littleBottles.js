'use strict';

angular.module('daninnyApp.littleBottles', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/littleBottle', {
            templateUrl: 'app/weddingGifts/littleBottles/littleBottles.html',
            controller: 'LittleBottlesCtrl'
        });
    }])

    .controller('LittleBottlesCtrl', ['$scope', function($scope) {

        $scope.littleBottleGallery = [
            {
                photo:'app/components/img/wedding/artBottles/boyBottle.jpg',
                category:'',
                itemName:''
            },
            {
                photo:'app/components/img/wedding/artBottles/girlBottle.jpg',
                category:'',
                itemName:''
            },
            {
                photo:'app/components/img/wedding/artBottles/cowboyBottle.jpg',
                category:'',
                itemName:''
            },
            {
                photo:'app/components/img/wedding/artBottles/ladyBottle.jpg',
                category:'',
                itemName:''
            },
            {
                photo:'app/components/img/wedding/artBottles/mrBottle.jpg',
                category:'',
                itemName:''
            }
        ]

    }]);