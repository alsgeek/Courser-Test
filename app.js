(
  function () {
  angular.module('application', [])
  .controller('lunchCheckController', controller);
  controller.$inject = ['$scope'];
  function controller($scope) {
    $scope.greenColorOpacity = '';
    $scope.items = '';
    $scope.messageNotification = '';
    $scope.redColorOpacity = '';
    $scope.check = function() {
      let count = 0;
      let arrayOfItems = $scope.items.split(',');
      arrayOfItems.forEach((item) => {
      if (item!= false) {
        count++;
      }
      });

      if(count > 0 && count < 4) {
        $scope.messageNotification = 'Enjoy';
        $scope.redColorOpacity = '';
        $scope.greenColorOpacity = 'opaque';
      }
      else if (count > = 4) {
        $scope.messageNotification = 'Too much';
        $scope.redColorOpacity = opaque';
        $scope.greenColorOpacity = '';
      }
      else {
        $scope.messageNotification = 'Please enter an item first';
        $scope.redColorOpacity = opaque';
        $scope.greenColorOpacity = '';
      }
    }
  }
}
)()
