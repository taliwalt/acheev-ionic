angular.module('app.friend.details', [])

.config(function($stateProvider){
    $stateProvider
      .state('tab.friend-detail', {
        url: '/friend/:friendId',
        views: {
          'tab-friends': {
            templateUrl: 'app/friends/details/friend.html',
            controller: 'FriendDetailCtrl'
          }
        }
      });
  })

  .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
    $scope.friend = Friends.get($stateParams.friendId);
  });
