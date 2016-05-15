'use strict';

angular.module('daninnyApp.artGifts', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/artGifts', {
            templateUrl: 'app/artGifts/artGifts.html',
            controller: 'ArtGiftsCtrl'
        });
    }])

    .controller('ArtGiftsCtrl', ['$scope', function ($scope) {
        $scope.artGallery = [
            {
                photo:'app/components/img/artGiftGallery/artFlower11.jpg',
                category:'',
                itemName:''
            },
            {
                photo:'app/components/img/artGiftGallery/artFlower.jpg',
                category:'',
                itemName:''
            },
            {
                photo:'app/components/img/artGiftGallery/artFlower2.jpg',
                category:'',
                itemName:''
            },
            {
                photo:'app/components/img/artGiftGallery/papperFlower.jpg',
                category:'',
                itemName:''
            },
            {
                photo:'app/components/img/artGiftGallery/art.jpg',
                category:'',
                itemName:''
            },
            {
                photo:'app/components/img/artGiftGallery/artBox.jpg',
                category:'',
                itemName:''
            },
            {
                photo:'app/components/img/artGiftGallery/artBox1.jpg',
                category:'',
                itemName:''
            },
            {
                photo:'app/components/img/artGiftGallery/artBox2.jpg',
                category:'',
                itemName:''
            },
            {
                photo:'app/components/img/artGiftGallery/artBox3.jpg',
                category:'',
                itemName:''
            }
        ]
    }]);