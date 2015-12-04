DoOrDont.controller("MyQuestionsCtrl", function MyQuestionsCtrl($scope, currentAuth, QuestionFactory) {
  $scope.questions = QuestionFactory;
  $scope.currentAuth = currentAuth;
})
