'use strict';

angular.module('daninnyApp.artGifts', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/artGifts', {
            templateUrl: 'app/artGifts/artGifts.html',
            controller: 'ArtGiftsCtrl'
        });
    }])

    .controller('ArtGiftsCtrl', ['$scope', '$mdDialog', function ($scope, $mdDialog) {
        $scope.artGallery = [
            {
                photo:'app/components/img/artGiftGallery/artFlower11.jpg',
                category:'jh',
                itemName:'lkhfx'
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

        $scope.totalItems = $scope.artGallery.length;
        $scope.itemsPerPage = 6,
            $scope.currentPage = 1;

        // $scope.setPage = function (pageNo) {
        //     $scope.currentPage = pageNo;
        // };
        //
        // $scope.pageChanged = function() {
        //     console.log('Page changed to: ' + $scope.currentPage);
        // };

        $scope.maxSize = 5;
        $scope.bigTotalItems = 175;
        $scope.bigCurrentPage = 1;

        $scope.pageCount = function () {
            return Math.ceil($scope.artGallery.length / $scope.itemsPerPage);
        };

        $scope.$watch('currentPage + itemsPerPage', function() {
            var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
                end = begin + $scope.itemsPerPage;

            $scope.filteredArtGallery = $scope.artGallery.slice(begin, end);
        });

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