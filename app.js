var courseRoster = angular.module('courseRoster', ['ui.router']);


courseRoster.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('home', {
    url:'',
    templateUrl:'partials/home.html'
  });

  $stateProvider.state('courses', {
    url: '/courses',
    templateUrl: 'partials/courses.html',
    controller: 'CoursesCtrl'
  });

  $stateProvider.state('courses.students', {
    url: "/:courseId",
    templateUrl: 'partials/courses.students.html',
    controller: 'StudentsCtrl'
  });
});
