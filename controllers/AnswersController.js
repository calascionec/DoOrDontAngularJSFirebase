DoOrDont.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, AdviceFactory, UtilitiesFactory, $firebaseObject, $firebaseArray){
  // var ref = new Firebase("https://doordont.firebaseio.com/questions");
  // $scope.question = UtilitiesFactory.findById(AdviceFactory.questions, $stateParams.questionId)
  var ref = new Firebase("https://doordont.firebaseio.com/" + $stateParams.questionId);
  $scope.question = $firebaseObject(ref);
  $scope.formShow = false;
  $scope.rating;
  var questionAnswersRef = new Firebase("https://doordont.firebaseio.com/" + $stateParams.questionId + "/answers");
  $scope.questionAnswers = $firebaseArray(questionAnswersRef);

  $scope.addAnswer = function() {
    $scope.questionAnswers.$add({text: $scope.answer,
                                      approved: false,
                                      rating: 0,
                                      upvote: 0});
    $scope.answer = '';
    };

  // $scope.addRating = function(id) {
  //   $scope.question.answers[id-1].approved = true;
  //   $scope.formShow = true;
  //
  // }
  //
  // $scope.submitRating = function(id, rating) {
  //   $scope.formShow = false;
  //   $scope.question.answers[id-1].rating = rating
  // }

});
