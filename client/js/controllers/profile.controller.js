/**
 * Created by olga on 02.08.16.
 */
angular.module('rssreader').controller('ProfileController', ['$scope', '$state', 'authService', '$window', function ($scope, $state, authService, $window) {
  $scope.user = {};
  $scope.layout = 'style2';
  
  $scope.layouts = [
    { name: 'Blue', url: 'style' },
    { name: 'Black', url: 'style2' },
    { name: 'Grey', url: 'style3' }
  ];
}]);