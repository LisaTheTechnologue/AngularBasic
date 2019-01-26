//ng-init
var myApp = angular.module('myDirective', [])

myApp.controller('directiveCtrler', function () {
    });


//create directive

myApp.controller('directiveCreated',[ function () {

}])
    .directive('welcomeText', function () {
        return {
            template: '<h4>Welcome to AngularJS!</h4>'
        };
    });

//create directive 2 (by AngularJS Guide)
//angular.module('docsSimpleDirective', [])
    myApp.controller('Controller', ['$scope', function ($scope) {
        $scope.customer = {
            name: 'Naomi',
            address: '1600 Amphitheatre'
        };
    }])
    .directive('myCustomer', function () {
        return {
            template: 'Name: {{customer.name}} <br/>Address: {{customer.address}}'
        };
    });

//angular.module('docsSimpleDirective', [])
myApp.controller('url', function () { })
    .directive('myDirective', function () {
        return {
            templateUrl: 'directiveurl1.html'
        };
    });

//create directive 4 (by AngularJS Guide)
myApp.controller('Controller2', ['$scope', function ($scope) {
    $scope.customer = {
        name: 'Naomi',
        address: '1600 Amphitheatre'
    };
}])
    .directive('myCustomer2', function () {
        return {
            templateUrl: 'directiveurl2.html'
        };
    });


