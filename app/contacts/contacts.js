'use strict';

angular.module('daninnyApp.contacts', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/contact', {
            templateUrl: 'app/contacts/contacts.html',
            controller: 'ContactsCtrl'
        });
    }])

    .controller('ContactsCtrl', ['$scope', '$http', '$mdToast', '$animate',
        function ($scope, $http, $mdToast, $animate) {

            // $scope.toastPosition = {
            //     bottom: false,
            //     top: true,
            //     left: false,
            //     right: true
            // };
            //
            // //2. the method looks for the position that we want to display the toast
            // $scope.getToastPosition = function () {
            //     return Object.keys($scope.toastPosition)
            //         .filter(function (pos) {
            //             return $scope.toastPosition[pos];
            //         })
            //         .join(' ');
            // };
            //
            // //1. The send button will call this method
            // this.sendMail = function () {
            //     var data = ({
            //         contactName: this.contactName,
            //         contactEmail: this.contactEmail,
            //         contactMsg: this.contactMsg
            //     });
            //
            //
            //     // Simple POST request example (passing data) :
            //     $http.post('/contact-form', data).success(function (data, status, headers, config) {
            //         // this callback will be called asynchronously
            //         // when the response is available
            //
            //         $mdToast.show(
            //             $mdToast.simple()
            //                 .content('Thanks for your message ' + data.contactName + ' You Rock!')
            //                 .position($scope.getToastPosition())
            //                 .hideDelay(5000)
            //         );
            //
            //     }).error(function (data, status, headers, config) {
            //         // called asynchronously if an error occurs
            //         // or server returns response with an error status.
            //     });
            // };
        }]);