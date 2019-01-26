//Create a module
var myApp = angular.module('myModule', []);
myApp.controller('myController', myController);

function myController($scope) {
    $scope.message = "Angular JS Application";
}

//var myApp2 = angular.module('myModule', []);
myApp.controller('myController3', function ($scope) {
    var employee = {
        FirstName: "Mark",
        LastName: "Smith",
        Gender: "Male"
    }

    $scope.employee = employee;
});

