var DoOrDont = angular.module('DoOrDont', ['ui.router', 'firebase']);

DoOrDont.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('home', {
    url:'',
    views: {
        'body': {
            templateUrl:'partials/home.html',
            controller:"HomeCtrl"
        }
    }
  });

  $stateProvider.state('questions', {
    url: '/questions',
    views: {
        'header': {
            templateUrl: 'partials/header.html'
        },
        'body': {
            templateUrl: 'partials/questions.html',
            controller: 'QuestionsCtrl'
        }
    }
  });

  $stateProvider.state('question', {
    url: '/:questionId',
    views: {
        'header': {
            templateUrl: 'partials/header.html'
        },
        'body': {
            templateUrl: 'partials/question.html',
            controller: 'AnswersCtrl'
        }
    }
  });


});
