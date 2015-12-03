var DoOrDont = angular.module("DoOrDont", ["ui.router", "firebase"]);

DoOrDont.run(function($rootScope, $state) {
  $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
    if(error === "AUTH_REQUIRED") {
      $state.go("home");
    }
  });
});

DoOrDont.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state("home", {
    url:"",
    views: {
        "body": {
            templateUrl:"partials/home.html",
            controller:"HomeCtrl"
        }
    },
    resolve: {
      "currentAuth": ["Auth", function(Auth) {
        return Auth.$waitForAuth();
      }]
    }
  });

  $stateProvider.state("questions", {
    url: "/questions",
    views: {
        "header": {
            templateUrl: "partials/header.html"
        },
        "body": {
            templateUrl: "partials/questions.html",
            controller: "QuestionsCtrl"
        }
    },
    resolve: {
      "currentAuth": ["Auth", function(Auth) {
        return Auth.$requireAuth();
      }]
    }
  });

  $stateProvider.state("question", {
    url: "questions/:questionId",
    views: {
        "header": {
            templateUrl: "partials/header.html"
        },
        "body": {
            templateUrl: "partials/question.html",
            controller: "AnswersCtrl"
        }
    }
  });


});
