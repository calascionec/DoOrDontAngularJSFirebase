DoOrDont.factory('QuestionFactory', function QuestionFactory($firebaseArray){
  var ref = new Firebase("https://doordont.firebaseio.com");

  return $firebaseArray(ref);
});
