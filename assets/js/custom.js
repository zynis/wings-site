jQuery(document).ready( function($) {
	$('.partners-list').slick({
		slidesToShow: 3,
		arrows:true,
		dots: false,
		responsive: [
		    {
		      breakpoint: 1000,
		      settings: {
		        slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1
		      }
		    }
	    ]
	});
	$('.press-list').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows:false,
		adaptiveHeight: true,
		dots: true,
		infinite: true,
		responsive: [
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
	    ]
	});
	new WOW().init();
	$('.main-down').on( 'click', function(event){
		var top = $("#future").offset().top;
		$('body,html').animate({scrollTop: top}, 700);
	});
	$('.tabs').tabslet();
	//$('select.select').select2();
  $('.chat-list').slick({
	 slidesToShow: 1,
	 slidesToScroll: 1,
	 arrows:false,
	 adaptiveHeight: true,
	 dots: true,
	 fade: true,
	 infinite: true
  });
});