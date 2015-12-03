DoOrDont.controller("LogOutCtrl", function LogOutCtrl(Auth, $scope, $state) {
  $scope.logOut = function() {
    Auth.$unauth();
    $state("home");
  };
})
