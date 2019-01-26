var myApp = angular.module('myModule', []);

myApp.controller('myController', function ($scope) {
    $scope.name = 'Lisa';
    $scope.sayHello = function () {
        $scope.name = "Hello " + $scope.name;
    }
});

myApp.controller('myController1', function ($scope,$rootScope) {
    //$scope.name = 'Scope 1';
    $rootScope.name = 'Root Scope';
});

myApp.controller('myController2', function ($scope, $rootScope) {
    $scope.name = 'Scope 2';
    
});

myApp.controller('myControllerTop', function ($scope) {
    $scope.name = 'This is top scope';

});