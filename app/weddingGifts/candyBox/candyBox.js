'use strict';

angular.module('daninnyApp.candyBox', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/candyBox', {
            templateUrl: 'app/weddingGifts/candyBox/candyBox.html',
            controller: 'CandyBoxCtrl'
        });
    }])

    .controller('CandyBoxCtrl', ['$scope', '$mdDialog', function ($scope, $mdDialog) {

        $scope.candyBoxGallery = [
            {
                photo: 'app/components/img/wedding/candyBox/briliantBox.jpg',
                category: '2.00лв.',
                itemName: 'Брилянт',
                description:'Размери 6/5 см. пълнеж - 3 бр. бонбона.',
                price:'2.00лв.'
            },
            {
                photo: 'app/components/img/wedding/candyBox/goldBox.jpg',
                category: '2.20лв.',
                itemName: 'Злато',
                description:'Размери 6/5 см. пълнеж - 3 бр. бонбона.',
                price:'2.20лв.'
            },
            {
                photo: 'app/components/img/wedding/candyBox/kalaBox.jpg',
                category: '1.90лв.',
                itemName: 'Кала',
                description:'Размери 3/5 см. пълнеж - 3 бр. бонбона.',
                price:'1.90лв.'
            },
            {
                photo: 'app/components/img/wedding/candyBox/kalinaBox.jpg',
                category: '2.20лв.',
                itemName: 'Калина',
                description:'Размери 3/5 см. пълнеж - 3 бр. бонбона.',
                price:'2.20лв.'
            },
            {
                photo: 'app/components/img/wedding/candyBox/magicBox.jpg',
                category: '2.60лв.',
                itemName: 'Магия',
                description:'Размери 3/5 см. пълнеж - 3 бр. бонбона.',
                price:'2.60лв.'
            },
            {
                photo: 'app/components/img/wedding/candyBox/orangeBox.jpg',
                category: '2.60лв.',
                itemName: 'Оранж',
                description:'Размери 3/5 см. пълнеж - 3 бр. бонбона.',
                price:'2.60лв.'
            },
            {
                photo: 'app/components/img/wedding/candyBox/perlenoSianieBox.jpg',
                category: '2.60лв.',
                itemName: 'Перлено сияние',
                description:'Размери 3/5 см. пълнеж - 3 бр. бонбона.',
                price:'2.60лв.'
            },
            {
                photo: 'app/components/img/wedding/candyBox/rouseBox.jpg',
                category: '2.00лв.',
                itemName: 'Роза',
                description:'Размери 4/5 см. пълнеж - 3 бр. бонбона.',
                price:'2.00лв.'
            },
            {
                photo: 'app/components/img/wedding/candyBox/selenaBox.jpg',
                category: '1.90лв.',
                itemName: 'Селена',
                description:'Размери 3/5 см. пълнеж - 3 бр. бонбона.',
                price:'1.90лв.'
            },
            {
                photo: 'app/components/img/wedding/candyBox/silverBox.jpg',
                category: '2.10лв.',
                itemName: 'Сребърна',
                description:'Размери 6/5 см. пълнеж - 3 бр. бонбона.',
                price:'2.10лв.'
            },
            {
                photo: 'app/components/img/wedding/candyBox/uset.jpg',
                category: '2.00лв.',
                itemName: 'Усет',
                description:'Размери 6/5 см. пълнеж - 3 бр. бонбона.',
                price:'2.00лв.'
            }
        ];

        $scope.totalItems = $scope.candyBoxGallery.length;
        $scope.itemsPerPage = 6;
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
            return Math.ceil($scope.candyBoxGallery.length / $scope.itemsPerPage);
        };

        $scope.$watch('currentPage + itemsPerPage', function() {
            var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
                end = begin + $scope.itemsPerPage;

            $scope.filteredCandyBox = $scope.candyBoxGallery.slice(begin, end);
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