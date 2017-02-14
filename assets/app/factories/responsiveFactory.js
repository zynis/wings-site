app.factory('responsiveFactory', function () {
  var partnersResponsive = [
	 {
		breakpoint: 1000,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2
		}
	 },
	 {
		breakpoint: 600,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	 }
  ];
  
  var pressResponsive = [
	 {
		breakpoint: 1000,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2
		}
	 },
	 {
		breakpoint: 760,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	 },
	 {
		breakpoint: 600,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	 }
  ];
  
  return {
	 partnersResponsive: partnersResponsive,
	 pressResponsive: pressResponsive
  };
  
});