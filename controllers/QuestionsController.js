DoOrDont.controller('QuestionsCtrl', function QuestionsCtrl($scope, QuestionFactory, $firebaseArray, $firebaseObject, currentAuth) {
  $scope.currentAuth = currentAuth;
  var ref = new Firebase("https://doordont.firebaseio.com/");
  $scope.questions = QuestionFactory;
  $scope.admin = currentAuth.uid == "79077028-a080-4269-97c5-b875bd5d30c0";

  $scope.addQuestion = function () {
    var new_question = $scope.questions.$add({ text: $scope.question, Do: 0, Dont: 0, time: new Date().getTime(), user: currentAuth});
    $scope.question = null;
  };

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
