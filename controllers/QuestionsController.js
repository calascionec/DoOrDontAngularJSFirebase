DoOrDont.controller('QuestionsCtrl', function QuestionsCtrl($scope, AdviceFactory, $firebaseArray, $firebaseObject, currentAuth) {
  $scope.AdviceFactory = AdviceFactory;
  $scope.currentAuth = currentAuth;
  var ref = new Firebase("https://doordont.firebaseio.com/");
  $scope.questions = $firebaseArray(ref);


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

  $scope.do = function(key) {
    var question = $firebaseObject(ref.child(key));
    question.$loaded(
      function() {
        question.Do += 1;
        question.$save();
      }
    )
  }

  $scope.dont = function(key) {
    var question = $firebaseObject(ref.child(key));
    question.$loaded(
      function() {
        question.Dont += 1;
        question.$save();
      }
    )
  }

});
