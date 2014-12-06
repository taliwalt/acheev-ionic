angular.module('app.account', [])

.config(function($stateProvider){
    $stateProvider
      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'app/account/account.html',
            controller: 'AccountCtrl'
          }
        }
      })
  })

.controller('AccountCtrl', function($scope) {
});
