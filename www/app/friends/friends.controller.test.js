describe('FriendsCtrl unit tests', function(){

  var $scope, ctrl;

  beforeEach(module('starter'));

  beforeEach(function(){
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
