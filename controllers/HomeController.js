DoOrDont.controller("HomeCtrl", function HomeCtrl($scope, Auth){
  $scope.signUp = true;
  $scope.signIn = true;
  $scope.signUpForm = false;
  $scope.signInForm = false;
  $scope.showSignup = function() {
    $scope.signUpForm = true;
    $scope.signUp = false;
    $scope.signIn = false;
  };

  $scope.showSignIn = function() {
    $scope.signInForm = true;
    $scope.signIn = false;
    $scope.signUp = false;
  };

  $scope.createUser = function() {
    $scope.message = null;
    $scope.error = null;

    Auth.$createUser({
      email: $scope.email,
      password: $scope.password,
    }).then(function(userData) {
      $scope.message = "User created with uid: " + userData.uid;
    }).catch(function(error) {
      $scope.error = error;
    });
  };

  $scope.login = function() {
    $scope.authData = null;
    $scope.error = null;

    Auth.$authWithPassword({
      email: $scope.email,
      password: $scope.password
    }).then(function(authData) {
      console.log("logged in as: ", authData.id);
      console.log(authData);
    }).catch(function(error) {
      console.log("Authentication failed: ", error);
    });
  };
})
