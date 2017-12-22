(function () {
    var HomeController = function ($scope, $log, converter) {
        $scope.data = {
            types : converter.types,
            inputField : 0,
            outputField : 0,
            fromType : converter.types[0],
            toType : converter.types[0]
        };
        $scope.actions = {};

        $scope.actions.swap = function () {
            var temp = $scope.data.fromType;
            $scope.data.fromType = $scope.data.toType;
            $scope.data.toType = temp;
            temp = $scope.data.inputField;
            $scope.data.inputField = $scope.data.outputField;
            $scope.data.outputField = temp;
        };

        $scope.actions.convert = function () {
            $scope.data.outputField = converter.from($scope.data.inputField, $scope.data.fromType)
                .to($scope.data.toType);
        };
    };

    var app = angular.module("casklvConverter");
    app.controller("HomeController", ["$scope", "$log", "converter", HomeController]);
}());
