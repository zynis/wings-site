var app = angular.module('wings-site', [
  'timer',
  'pascalprecht.translate',
  'ngDropdowns',
  'smoothScroll',
  'slick',
  'remodal',
  'ui.router',
  'ngTouch',
  'duScroll'
]);

var availableLangs = ['en', 'de', 'es', 'id', 'nl', 'pt', 'ro', 'ru', 'sv', 'tl', 'uk', 'zh']

app.config(function ($locationProvider, $stateProvider, $translateProvider) {
  $locationProvider.html5Mode(true);
  
  $stateProvider.state({
	 name: 'index',
	 url: '/?ref'
  });
  
  $translateProvider.determinePreferredLanguage(function () {
	 var lang = window.navigator.userLanguage || window.navigator.language;
  
	 if (lang.indexOf('-') >= 0) {
		lang = lang.split('-')[0];
	 }
  
	 if (availableLangs.indexOf(lang) < 0) {
		lang = 'en'
	 };
	 
	 return lang;
  });
  $translateProvider.useSanitizeValueStrategy(null);
});

app.run(function ($log, $rootScope) {
  $log.info("Site started");
  
  new WOW().init();
  
  $rootScope.$on('$routeChangeStart', function (next, current) {
	 new WOW().sync();
  });
});