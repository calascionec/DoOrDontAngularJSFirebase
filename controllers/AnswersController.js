DoOrDont.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, AdviceFactory, UtilitiesFactory){
  $scope.question = UtilitiesFactory.findById(AdviceFactory.questions, $stateParams.questionId)

  $scope.addAnswer = function() {
    if($scope.question.answers.indexOf($scope.answer) === -1) {
      $scope.question.answers.push($scope.answer);
      $scope.answer = null;
    } else {
      alert("answer already given");
    }

  };

});
