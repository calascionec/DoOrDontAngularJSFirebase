DoOrDont.controller('QuestionsCtrl', function QuestionsCtrl($scope, AdviceFactory, $firebaseArray, $firebaseObject) {
  $scope.AdviceFactory = AdviceFactory;
  var ref = new Firebase("https://doordont.firebaseio.com/");
  $scope.questions = $firebaseObject(ref);


  $scope.numAnswers = function(key) {
      var answers;
      var question = ref.child(key);
      question.once("value", function(snapshot) {
        answers = snapshot.child('answers').numChildren();
      });
      return answers;
  };

  $scope.delete = function(key) {
    $firebaseObject(ref.child(key)).$remove();
  }

});
