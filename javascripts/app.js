var app = angular.module("persist", ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/posts.html',
        controller: 'postController'
      })
      .otherwise({
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      });


      //use the html5 history api
      $locationProvider.html5Mode(true);

});
