DoOrDont.controller('QuestionsCtrl', function QuestionsCtrl($scope, AdviceFactory) {
  $scope.questions = AdviceFactory.questions;
  $scope.AdviceFactory = AdviceFactory;

});
