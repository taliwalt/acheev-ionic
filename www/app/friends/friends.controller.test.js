describe('FriendsCtrl unit tests', function(){

  var $scope, ctrl;

  beforeEach(function(){
    module('starter');
    inject(function($rootScope, $controller){
      $scope = $rootScope.$new();
      ctrl = $controller('FriendsCtrl', {
        $scope : $scope
      });
    });
  });

  it("should have $scope variable", function(){
    expect($scope).toBeDefined();
  });

});
