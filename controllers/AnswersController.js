DoOrDont.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, AdviceFactory, UtilitiesFactory, $firebaseObject, $firebaseArray){
  // var ref = new Firebase("https://doordont.firebaseio.com/questions");
  // $scope.question = UtilitiesFactory.findById(AdviceFactory.questions, $stateParams.questionId)
  var ref = new Firebase("https://doordont.firebaseio.com/" + $stateParams.questionId);
  $scope.question = $firebaseObject(ref);

  $scope.formShow = false;
  $scope.rating;

  $scope.questionAnswers = $firebaseArray(ref.child("answers"));


  $scope.addAnswer = function() {
    $scope.questionAnswers.$add({text: $scope.answer,
                                      approved: false,
                                      rating: 0,
                                      upvote: 0});
    $scope.answer = '';
    };

  $scope.addRating = function(id) {

    var answer = $firebaseObject(ref.child('answers').child(id));
    answer.$loaded(
      function() {
        answer.approved = true;
        answer.$save();
      }
    )
    $scope.formShow = true;
  };

    $scope.submitRating = function(id, rating) {
      var answer = $firebaseObject(ref.child('answers').child(id));
      answer.$loaded(
        function() {
          answer.rating = rating;
          answer.$save();
        }
      )
      $scope.formShow = false;
  };




});
