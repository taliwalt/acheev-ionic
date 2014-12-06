(function(){

  'use strict';

  angular.module('app.friends.services', [])

  .factory('Friends', FriendsFactory);

  function FriendsFactory() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var friends = [
      { id: 0, name: 'Livereload1' },
      { id: 1, name: 'G.I. Joe' },
      { id: 2, name: 'Miss Frizzle' },
      { id: 3, name: 'Ash Ketchum' }
    ];

    return {
      all: function() {
        return friends;
      },
      get: function(friendId) {
        return friends[friendId];
      }
    }

  };

})();


