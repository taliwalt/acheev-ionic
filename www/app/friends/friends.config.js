(function(){

  'use strict';

  angular.module('app.friends')

  .config(Configuration);

  function Configuration($stateProvider){
    $stateProvider
      .state('tab.friends', {
        url: '/friends',
        views: {
          'tab-friends': {
            templateUrl: 'app/friends/friends.html',
            controller: 'FriendsCtrl'
          }
        }
      })
  };

})();
