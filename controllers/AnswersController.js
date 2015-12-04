DoOrDont.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, QuestionFactory, $firebaseObject, $firebaseArray){

  var ref = new Firebase("https://doordont.firebaseio.com/" + $stateParams.questionId);
  $scope.question = $firebaseObject(ref);

  $scope.questionAnswers = $firebaseArray(ref.child("answers"));

  $scope.addAnswer = function() {
    $scope.questionAnswers.$add({text: $scope.answer});
    $scope.answer = '';
    };
});
