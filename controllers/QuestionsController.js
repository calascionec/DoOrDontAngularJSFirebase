DoOrDont.controller('QuestionsCtrl', function QuestionsCtrl($scope, AdviceFactory, $firebaseArray) {
  $scope.AdviceFactory = AdviceFactory;
  var ref = new Firebase("https://doordont.firebaseio.com/");
  $scope.questions = $firebaseArray(ref);
  $scope.newQuestions;

});
