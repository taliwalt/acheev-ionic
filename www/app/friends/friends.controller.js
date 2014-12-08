(function(){

  'use strict';

  angular.module('app.friends')

    .controller('FriendsCtrl', FriendsCtrl);

  FriendsCtrl.$inject = ['$scope', 'Friends', '$log'];

  function FriendsCtrl($scope, Friends, $log) {
    $log.info("FRIENDSCTRL");
    $scope.friends = Friends.all();
  };

})();


