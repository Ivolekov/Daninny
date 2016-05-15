'use strict';

angular.module('daninnyApp.candyBox', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/candyBox', {
            templateUrl: 'app/weddingGifts/candyBox/candyBox.html',
            controller: 'CandyBoxCtrl'
        });
    }])

    .controller('CandyBoxCtrl', ['$scope', function ($scope) {

        $scope.candyBoxGallery = [
            {
                photo: 'app/components/img/wedding/candyBox/briliantBox.jpg',
                category: '',
                itemName: 'Брилянт'
            },
            {
                photo: 'app/components/img/wedding/candyBox/goldBox.jpg',
                category: '',
                itemName: ''
            },
            {
                photo: 'app/components/img/wedding/candyBox/kalaBox.jpg',
                category: '',
                itemName: ''
            },
            {
                photo: 'app/components/img/wedding/candyBox/kalinaBox.jpg',
                category: '',
                itemName: ''
            },
            {
                photo: 'app/components/img/wedding/candyBox/magicBox.jpg',
                category: '',
                itemName: ''
            },
            {
                photo: 'app/components/img/wedding/candyBox/orangeBox.jpg',
                category: '',
                itemName: ''
            },
            {
                photo: 'app/components/img/wedding/candyBox/perlenoSianieBox.jpg',
                category: '',
                itemName: ''
            },
            {
                photo: 'app/components/img/wedding/candyBox/rouseBox.jpg',
                category: '',
                itemName: ''
            },
            {
                photo: 'app/components/img/wedding/candyBox/selenaBox.jpg',
                category: '',
                itemName: ''
            },
            {
                photo: 'app/components/img/wedding/candyBox/silverBox.jpg',
                category: '',
                itemName: ''
            },
            {
                photo: 'app/components/img/wedding/candyBox/uset.jpg',
                category: '',
                itemName: ''
            }
        ]

    }]);