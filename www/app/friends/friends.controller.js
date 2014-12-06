(function(){

  'use strict';

  angular.module('app.friends')

    .controller('FriendsCtrl', FriendsCtrl);

  FriendsCtrl.$inject = ['$scope', 'Friends'];

  function FriendsCtrl($scope, Friends) {
    $scope.friends = Friends.all();
  };

})();


