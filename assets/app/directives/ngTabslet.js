app.directive('ngTabslet', function () {
  function link(scope, element, attrs) {
	 angular.element(element).tabslet();
  }
  
  return {
	 link: link,
	 restrict: 'A'
  };
});