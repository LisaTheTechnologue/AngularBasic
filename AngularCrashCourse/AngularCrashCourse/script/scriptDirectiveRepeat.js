var myApp = angular.module('myModule', []);

//repeat
myApp.controller('repeatController', repeatController);

repeatController.$inject = ['$scope']; //can be removed

function repeatController($scope ){
        var friends = [
            { name: 'John', age: 25 },
            { name: 'Mary', age: 40 },
            { name: 'Peter', age: 85 }
    ];
    $scope.friends = friends;
}

//nested repeat
myApp.controller('nestedRepeatController', ['$scope', function ($scope) {
        var countries = [
            {
                name: "UK",
                cities: [
                    { name: "London" },
                    { name: "Birmingham" },
                    { name: "Manchester" }
                ]
            },
            {
                name: "USA",
                cities: [
                    { name: "Los Angeles" },
                    { name: "Chicago" },
                    { name: "Houston" }
                ]
            },
            {
                name: "India",
                cities: [
                    { name: "Hyderabad" },
                    { name: "Chennai" },
                    { name: "Mumbai" }
                ]
            }
        ];
        $scope.countries = countries;
    }])