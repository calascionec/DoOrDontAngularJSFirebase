var DoOrDont = angular.module('DoOrDont', ['ui.router', 'firebase']);

DoOrDont.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('home', {
    url:'',
    templateUrl:'partials/home.html'
  });

  $stateProvider.state('questions', {
    url: '/questions',
    templateUrl: 'partials/questions.html',
    controller: 'QuestionsCtrl'
  });

  $stateProvider.state('question', {
    url: '/:questionId',
    templateUrl: 'partials/question.html',
    controller: 'AnswersCtrl'
  });


});
