app.controller('indexController', function ($scope, $window, usSpinnerService, $timeout, pressFactory, whitepaperFactory, responsiveFactory, remodal, $stateParams, apiFactory, teamFactory, $q, languageFactory, smoothScroll, $rootScope, $log, $translate, config) {
  $log.info("Index controller");
  
  var title = $window.document.title;
  
  $scope.endTime = config.deadline;
  $scope.languages = languageFactory;
  $scope.team = teamFactory;
  $scope.responsive =  responsiveFactory;
  $scope.loadTranslations = true;
  
  $timeout(function () {
	 $scope.loadTranslations = false;
	 $scope.bizRef = $stateParams.bizRef;
	 $scope.ref = $stateParams.ref;
  }, 1500);
  
  var currentLanguage = $translate.use();
  $scope.choosenLanguage = languageFactory.filter(function (i) {
		return i.value === currentLanguage;
	 }).pop() || languageFactory[0];
  
  $translate(title).then(function (r) {
	 $window.document.title = r;
  })
  
  $scope.openChat = function () {
	 return remodal({
		templateUrl: '/assets/app/templates/modals/chat.html'
	 }).open();
  }
  
  $scope.changeLang = function (lang) {
	 $translate.use(lang.value);
  }
  
  $scope.subscribe = function () {
	 if ($scope.loading) {
		return;
	 }
	 
	 $scope.subscribeError = null;
	 
	 if (!$scope.email) {
		$scope.subscribeError = "Please, provide your email first";
		return;
	 }
	 
	 var opts = {
		email: $scope.email,
		ref: $stateParams.ref,
		lang: $translate.use(),
		bizRef: $stateParams.bizRef
	 }
  
	 $scope.loading = true;
  
	 apiFactory.subscribe(opts).then(function () {
		remodal({
		  templateUrl: '/assets/app/templates/modals/chat.html',
		}).open({
		  subscribe: 'yes'
		});
	 }).catch(function (err) {
		if (typeof err === "object") {
		  err = err.data.error;
		}
		
		$scope.subscribeError = err;
	 }).then(function () {
		$scope.loading = false;
		$scope.email = null;
	 });
  }
  
  $scope.whitepaper = whitepaperFactory.getWP();
  
  $rootScope.$on('$translateChangeSuccess', function () {
	 $scope.whitepaper = whitepaperFactory.getWP();
	 $scope.getData();
  
	 $translate(title).then(function (r) {
		$window.document.title = r;
	 })
  });
  
  $scope.goTo = function (blockName) {
	 var element = document.getElementById(blockName);
	 smoothScroll(element);
  }
  
  $scope.getData = function () {
	 return $q.all([
	   pressFactory.getPresses(),
		teamFactory.getTeam()
	 ]).then(function (results) {
		$scope.press = results[0];
		$scope.team = results[1];
	 });
  }

  $timeout(function () {
  
	 if ($stateParams.whitepaper) {
		$scope.goTo('whitepaper');
	 }
	 
  }, 100);
  
  $scope.getData();
});