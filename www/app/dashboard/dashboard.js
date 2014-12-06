angular.module('app.dashboard', [])

.config(function ($stateProvider) {
    $stateProvider
      .state('tab.dash', {
        url: '/dash',
        views: {
          'tab-dash': {
            templateUrl: 'app/dashboard/dashboard.html',
            controller: 'DashCtrl'
          }
        }
      })
  })

.controller('DashCtrl', function($scope){

  });
