var myApp = angular.module('myModule', []);

myApp.controller('myController', myController);

myController.$inject = ['$scope','$http'];

function myController($scope, $http) {
    $http.get('/../html/webService.asmx/GetEmployees').then(
        function (response) {
            $scope.employees = response.data;
        },
        function (response) {
            $log.error(response.data);
        }
    );
}
