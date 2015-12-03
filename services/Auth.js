DoOrDont.factory('Auth', function Auth($firebaseAuth) {
  var ref = new Firebase("https://doordont.firebaseio.com");

  return $firebaseAuth(ref);
});
