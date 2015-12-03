DoOrDont.controller("LogOutCtrl", function LogOutCtrl(Auth, $scope) {
  $scope.logOut = function() {
    Auth.$unauth();
  };
})
