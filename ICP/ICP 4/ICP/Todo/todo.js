angular.module('angularTodo', [])
   .controller('angularTodoController', function ($scope) {
    // define list of items
    $scope.items = [];
    // Write code to push new item

    $scope.submitNewItem = function () {

        $scope.items.push($scope.title);
        $scope.title = null;
    }

    // Write code to delete item

    $scope.deleteItem = function () {
        $scope.items.splice(this.$index, 1);
    }
})