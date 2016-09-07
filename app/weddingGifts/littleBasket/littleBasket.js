'use strict';

angular.module('daninnyApp.littleBasket', ['ngRoute', 'ngMaterial', 'ui.bootstrap'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/littleBasket', {
            templateUrl: 'app/weddingGifts/littleBasket/littleBasket.html',
            controller: 'LittleBasket'
        });
    }])

    .controller('LittleBasket', ['$scope', '$mdDialog', '$http', function ($scope, $mdDialog, $http) {

        $scope.littleBasketGallery = [
            {
                photo: 'app/components/img/wedding/littleBasket/aida.jpg',
                category: '2.60лв.',
                itemName: 'Айда',
                description: 'Размери 8/5 см.',
                price: '2.60лв.'
            },
            {
                photo: 'app/components/img/wedding/littleBasket/bialaPrikazkaBasket.jpg',
                category: '2.10лв.',
                itemName: 'Бяла приказка',
                description: 'Подарък за гости за сватба.' +
                ' Кошничката е декорирана с ефирна хартия, в основата си обточена с малки перлички.' +
                ' Вътре в кошничката има Късметче с две калинки, което може да бъде поднесено и отделно.' +
                ' Размери 9/6см.',
                price: '2.10лв.'

            },
            {
                photo: 'app/components/img/wedding/littleBasket/buketBasket.jpg',
                category: '',
                itemName: '',
                description: '',
                price: ''
            },
            {
                photo: 'app/components/img/wedding/littleBasket/dantelaBasket.jpg',
                category: '2.60лв.',
                itemName: 'Дантела',
                description: 'Размери 8/5см.',
                price: '2.60лв.'
            },
            {
                photo: 'app/components/img/wedding/littleBasket/feeria.jpg',
                category: '2.40лв.',
                itemName: 'Феерия',
                description: 'Размери 8/5см.',
                price: '2.40лв.'
            },
            {
                photo: 'app/components/img/wedding/littleBasket/galateaBasket.jpg',
                category: '2.90лв.',
                itemName: 'Галатея',
                description: 'Размери 8/5см.',
                price: '2.90лв.'
            },
            {
                photo: 'app/components/img/wedding/littleBasket/goldBasket.jpg',
                category: '2.60лв.',
                itemName: 'Златна магия',
                description: 'Кошничка с три гумени бели рози, дантела и златна панделка. Размери 8/5см.',
                price: '2.60лв.'
            },
            {
                photo: 'app/components/img/wedding/littleBasket/iglikaBasket.jpg',
                category: '2.20лв.',
                itemName: 'Иглика',
                description: 'Кошнича с три гумени розички в екрю с панделки от органза и сатен и малка перличка. Размери 8/5см.',
                price: '2.20лв.'
            },
            {
                photo: 'app/components/img/wedding/littleBasket/maraiaBаsket.jpg',
                category: '2.20лв.',
                itemName: 'Марая',
                description: 'Размери 10/8см.',
                price: '2.20лв.'
            },
            {
                photo: 'app/components/img/wedding/littleBasket/proletBasket.jpg',
                category: '2.00лв.',
                itemName: 'Пролет',
                description: 'Кошничка с три гумени рози в лилаво, зелен гипсофил, панделка от рафия и малка калика. Размери 8/5 см.',
                price: '2.00лв.'
            },
            {
                photo: 'app/components/img/wedding/littleBasket/purpleBasket.jpg',
                category: '2.40лв',
                itemName: 'Разкош',
                description: 'Кошничката е декорирана с ефирна дантела, прихваната с лилава сатенена панделка. В кошничката има пет лилави розички и лилава панделка с звездичка на дръжката. ' +
                'Размери 8/5 см.',
                price: '2.40лв.'
            },
            {
                photo: 'app/components/img/wedding/littleBasket/satenBasket.jpg',
                category: '2.30лв.',
                itemName: 'Сатен',
                description: 'Кошничка с гумена роза в оранж, тюл,дантела, сатенена панделка, сребърна звездичка и три сатенени цветчета декорирани с перлички. Размери 8/5 см.',
                price: '2.30лв.'
            }
        ];

        $scope.totalItems = $scope.littleBasketGallery.length;
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
            return Math.ceil($scope.littleBasketGallery.length / $scope.itemsPerPage);
        };

        $scope.$watch('currentPage + itemsPerPage', function () {
            var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
                end = begin + $scope.itemsPerPage;

            $scope.filteredlittleBaskets = $scope.littleBasketGallery.slice(begin, end);
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