DoOrDont.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, AdviceFactory, UtilitiesFactory, $firebaseObject){
var ref = new Firebase("https://doordont.firebaseio.com/questions");
  $scope.question = UtilitiesFactory.findById(AdviceFactory.questions, $stateParams.questionId)
  $scope.formShow = false;
  $scope.rating;
  $scope.addAnswer = function() {
    if($scope.question.answers.indexOf($scope.answer) === -1) {
      $scope.question.answers.push({text: $scope.answer,
                                    id: $scope.question.answers.length + 1,
                                    approved: false,
                                    rating: 0,
                                    upvote: 0});
      $scope.answer = null;
    } else {
      alert("answer already given");
    }

  };

  $scope.addRating = function(id) {
    $scope.question.answers[id-1].approved = true;
    $scope.formShow = true;

  }

  $scope.submitRating = function(id, rating) {
    $scope.formShow = false;
    $scope.question.answers[id-1].rating = rating
  }

});
