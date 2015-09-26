DoOrDont.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, AdviceFactory, UtilitiesFactory, $firebaseObject, $firebaseArray){
  // var ref = new Firebase("https://doordont.firebaseio.com/questions");
  // $scope.question = UtilitiesFactory.findById(AdviceFactory.questions, $stateParams.questionId)
  var ref = new Firebase("https://doordont.firebaseio.com/" + $stateParams.questionId);
  $scope.question = $firebaseObject(ref);

  $scope.formShow = false;
  $scope.rating;
  var questionAnswersRef = new Firebase("https://doordont.firebaseio.com/" + $stateParams.questionId + "/answers");
  $scope.questionAnswers = $firebaseArray(questionAnswersRef);
  $scope.questionAnswers.$loaded().then(function() {

  });


  $scope.addAnswer = function() {
    $scope.questionAnswers.$add({text: $scope.answer,
                                      approved: false,
                                      rating: 0,
                                      upvote: 0});
    $scope.answer = '';
    };

  $scope.addRating = function(id) {
    var answerRef = new Firebase("https://doordont.firebaseio.com/-K-9xfFrEuqFMR1YuLPj/answers/-K-9xgv5J8sQXb9TFLdb");
    var answer = $firebaseObject(answerRef);
    answer.$loaded().then(function() {
      console.log(answer);
      answer.approved = true;
      $scope.formShow = true;
      $scope.submitRating = function(id, rating) {

          $scope.formShow = false;
          answer.rating = rating
      }
    });

  }


});
