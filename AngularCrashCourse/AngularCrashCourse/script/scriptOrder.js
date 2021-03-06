﻿//Create a module
(function () {
    var myApp = angular.module('myModule', []);
    myApp.controller('myController', myController);

    function myController($scope) {
        var employees = [
            { name: 'Hai', dob: new Date('10/23/1989'), salary: 120000, gender: 'Male', status: true },
            { name: 'Ba', dob: new Date('12/6/1990'), salary: 150000, gender: 'Female', status: false },
            { name: 'Tu', dob: new Date('2/25/1992'), salary: 220000, gender: 'Male', status: true },
            { name: 'Phuong', dob: new Date('10/12/1995'), salary: 520000, gender: 'Female', status: true },
            { name: 'Ngoc', dob: new Date('8/2/1997'), salary: 120000, gender: 'Male', status: false }
        ];
        $scope.employees = employees;

        $scope.sortColumn = 'name';
    }

    myApp.filter('statusFilter', function () {
        return function (input) {
            if (input)
                return 'Active';
            else
                return 'Blocked';
        }
    })
})()
