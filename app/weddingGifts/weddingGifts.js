'use strict';

angular.module('daninnyApp.weddingGifts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/weddingGifts', {
    templateUrl: 'app/weddingGifts/weddingGifts.html',
    controller: 'WeddingGiftsCtrl'
  });
}])

.controller('WeddingGiftsCtrl', [function() {

}]);