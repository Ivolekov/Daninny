'use strict';

angular.module('daninnyApp.baptismGifts', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/baptismGifts', {
            templateUrl: 'app/baptismGifts/baptismGifts.html',
            controller: 'BaptismGiftsCtrl'
        });
    }])

    .controller('BaptismGiftsCtrl', ['$scope', '$mdDialog', function($scope, $mdDialog) {
        $scope.baptismGifts = [
            {
                photo:'app/components/img/baptism/sunnyBag1.jpg',
                category: '1.80лв.',
                itemName: 'Слънчице',
                description:'Торбичка с бонбони с размери 10/7 см. Може да бъде изработена и в цветове за момиче.',
                price:'1.80лв.'
            },
            {
                photo:'app/components/img/baptism/tringle.jpg',
                category:'',
                itemName:''
            }
        ]

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