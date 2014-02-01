var app = angular.module('gridator', ['ui.tinymce']).
  config(function ($routeProvider, $locationProvider, $provide) {
    $provide.decorator('$sniffer', function($delegate) {
      $delegate.history = false;
      return $delegate;
    });
  $locationProvider.html5Mode(true).hashPrefix('!');
  $routeProvider.
    when('/', {templateUrl: '/app/partials/welcome.html'}).
    when('/gridator', {templateUrl: '/app/partials/gridator.html'}).
    when('/about', {templateUrl: '/app/partials/about.html'}).
    when('/authors', {templateUrl: '/app/partials/authors.html'}).
    when('/source', {templateUrl: '/app/partials/source.html'}).
    when('/help', {templateUrl: '/app/partials/help.html'}).
    otherwise({redirectTo: '/'});
});
