var app = angular.module('wings-site', [
  'timer',
  'pascalprecht.translate',
  'ngDropdowns',
  'smoothScroll',
  'slick',
  'remodal',
  'ui.router',
  'ngTouch'
]);

app.config(function ($locationProvider, $stateProvider, $translateProvider) {
  $locationProvider.html5Mode(true);
  
  $stateProvider.state({
	 name: 'index',
	 url: '/?ref'
  });
  
  $translateProvider.preferredLanguage('en');
  //$translateProvider.determinePreferredLanguage();
  $translateProvider.useSanitizeValueStrategy(null);
});

app.run(function ($log, $rootScope) {
  $log.info("Site started");
  
  new WOW().init();
  
  $rootScope.$on('$routeChangeStart', function (next, current) {
	 new WOW().sync();
  });
});