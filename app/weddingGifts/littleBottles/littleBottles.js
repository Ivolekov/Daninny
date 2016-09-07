'use strict';

angular.module('daninnyApp.littleBottles', ['ngRoute','ngMaterial','ui.bootstrap'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/littleBottle', {
            templateUrl: 'app/weddingGifts/littleBottles/littleBottles.html',
            controller: 'LittleBottlesCtrl'
        });
    }])

    .controller('LittleBottlesCtrl', ['$scope', '$mdDialog', function($scope, $mdDialog) {

        $scope.littleBottleGallery = [
            {
                photo:'app/components/img/wedding/artBottles/boyBottle.jpg',
                category: '6.30лв.',
                itemName: 'Момък',
                description:'Бутилчица с ракия височина 13 см. 100мл.',
                price:'6.30лв.'
            },
            {
                photo:'app/components/img/wedding/artBottles/girlBottle.jpg',
                category: '6.30лв.',
                itemName: 'Мома',
                description:'Бутилчица с ракия височина 13 см. 100мл.',
                price:'6.30лв.'
            },
            {
                photo:'app/components/img/wedding/artBottles/cowboyBottle.jpg',
                category: '4.00лв.',
                itemName: 'Каубой',
                description:'Височина 13 см. 50мл.',
                price:'4.00лв.'
            },
            {
                photo:'app/components/img/wedding/artBottles/ladyBottle.jpg',
                category: '4.00лв.',
                itemName: 'Милейди',
                description:'Височина 13 см. 50мл.',
                price:'4.00лв.'
            },
            {
                photo:'app/components/img/wedding/artBottles/mrBottle.jpg',
                category: '4.00лв.',
                itemName: 'Сър',
                description:'Височина 13 см. 50мл.',
                price:'4.00лв.'
            }
        ];

        $scope.showCustom = function (event) {
            $mdDialog.show({
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                template: '<md-dialog class="custom-dialog">' +
                '  <md-dialog-content>' +
                '<img class="custom-dialog-image" src={{item.photo}} class="img-responsive" alt="">' +
                '<div class="project-name">{{item.itemName}}</div>' +
                '<p class="custom-dialog-description">{{item.description}}</p>' +
                '<div class="custom-dialog-itemPrice">{{item.price}}</div>' +
                '  </md-dialog-content>' +
                '</md-dialog>',
                controller: function DialogController($scope, $mdDialog) {
                    $scope.closeDialog = function () {
                        $mdDialog.hide();
                    }
                }
            });
        };

    }])
    .directive("showOnLoad", function () {
        return {
            link: function (scope, element) {
                element.on("load", function () {
                    scope.$apply(function () {
                        scope.item.visible = true;
                    });
                });
            }
        };
    });