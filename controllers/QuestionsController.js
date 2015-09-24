DoOrDont.controller('QuestionsCtrl', function QuestionsCtrl($scope, AdviceFactory, $firebaseObject) {
  $scope.AdviceFactory = AdviceFactory;
  var ref = new Firebase("https://doordont.firebaseio.com/questions");
  $scope.newQuestions;
  ref.on("value", function(snapshot){
      console.log(snapshot.val());
      $scope.newQuestions = snapshot.val();
  })
});
