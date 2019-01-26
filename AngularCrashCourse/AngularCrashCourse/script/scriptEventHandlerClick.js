//Create a module
var myApp = angular.module('myModule', []);
myApp.controller('myController', ['$scope', function ($scope) {
    var technologies = [
        { Name: "C#", Likes: 0, Minus: 0, Dislikes: 0 },
        { Name: "ASP.NET", Likes: 0, Minus: 0, Dislikes: 0 },
        { Name: "SQL Server", Likes: 0, Minus: 0, Dislikes: 0 },
        { Name: "AngularJS", Likes: 0, Minus: 0, Dislikes: 0 }
    ]

    $scope.technologies = technologies;

    $scope.increaseLike = function (technology) {
        technology.Likes++;
        technology.Minus = technology.Likes - technology.Dislikes;
    }

    $scope.increaseDislike = function (technology) {
        technology.Dislikes++;
    }
}]);



