DoOrDont.controller("HomeCtrl", function HomeCtrl($scope, Auth, $state){
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
    $scope.signUpForm = false;
    $scope.signIn = false;
    $scope.signUp = false;
  };

  $scope.createUser = function() {
    $scope.message = null;
    $scope.error = null;

    Auth.$createUser({
      email: $scope.email,
      password: $scope.password,
      first_name: $scope.first_name,
      last_name: $scope.last_name

    }).then(function(userData) {
      $scope.message = "User created with uid: " + userData.uid;
      $scope.showSignIn();
    }).catch(function(error) {
      $scope.error = error;
    });
    $scope.password = "";
  };

  $scope.login = function() {
    $scope.authData = null;
    $scope.error = null;

    Auth.$authWithPassword({
      email: $scope.email,
      password: $scope.password
    }).then(function(authData) {
      console.log("something", authData.uid);
      $state.go("questions");
    }).catch(function(error) {
      alert("Authentication failed: ", error);
    });
  };
})
