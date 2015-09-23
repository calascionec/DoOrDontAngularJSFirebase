DoOrDont.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, AdviceFactory, UtilitiesFactory){
  $scope.question = UtilitiesFactory.findById(AdviceFactory.questions, $stateParams.questionId)

  $scope.addAnswer = function() {
    $scope.question.answers.push($scope.answer);
    $scope.answer = null;

  };

});
