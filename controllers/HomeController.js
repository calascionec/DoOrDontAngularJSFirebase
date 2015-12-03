DoOrDont.controller("HomeCtrl", function HomeCtrl($scope){
  $scope.signUp = false;
  $scope.showSignUp = function() {
    $scope.signUp = true;
  };
})
