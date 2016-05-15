/* Preload SVG */
	if (document.getElementById('svgsprite') == null) {
		var ajax = new XMLHttpRequest(); 

		// ajax.open('GET', '/wp-content/themes/accel/images/sprites.svg', true);
		ajax.open('GET', 'images/sprites.svg', true);
		ajax.send();
		ajax.onload = function() {
			var div = document.createElement('div');

			div.id = 'svgsprite';
			div.innerHTML = ajax.responseText;
			document.body.insertBefore(div, document.body.childNodes[0]);
		}
	}


$(document).ready(function(){

	// slideToggle items

	$(document).on('click','[data-slidetoggle]',function(){
		$('#' + $(this).data('slidetoggle')).slideToggle();
		return false;
	});

	// Anchor scroll

	$('[data-anchor]').on('click', function(e){
		e.preventDefault();
		var top = $('[name="' + $(this).data('anchor') + '"]').offset().top;
		$('body,html').animate({scrollTop: top}, 300);
	});


	/* Chart.Js */

	  	Chart.defaults.global.legend.display = false;

  		var randomScalingFactor = function() {
			return Math.round(Math.random() * 100);
		};
		var randomColorFactor = function() {
			return Math.round(Math.random() * 255);
		};
		var randomColor = function(opacity) {
			return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.3') + ')';
		};
		var config = {
			type: 'pie',
			scaleShowLabels: false,
			data: {
				datasets: [{
					data: [
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor()
					],
					backgroundColor: [
						"#F7464A",
						"#46BFBD",
						"#FDB45C",
						"#949FB1"
					],
				}],
				labels: [
					"Red",
					"Green",
					"Yellow",
					"Dark Grey"
				]
			},
			options: {
			  	responsive: true,
			  	animationSteps: 100,
			  	animationEasing: 'easeInOutQuart'
			}
		};

		window.onload = function() {
			var ctx = document.getElementById("chart-area").getContext("2d");
			window.myPie = new Chart(ctx, config);
		};

		$('.chart-changer a').click(function() {
			$(this).parent().children('.active').removeClass('active');
			$(this).addClass('active');
			$.each(config.data.datasets, function(i, piece) {
				$.each(piece.data, function(j, value) {
					config.data.datasets[i].data[j] = randomScalingFactor();
					config.data.datasets[i].backgroundColor[j] = randomColor(0.7);
				});
			});
			window.myPie.update();
		});


	/* Connected carousels */

		$('#interactiv .carousel-control.left').on('click',function(e){
			e.preventDefault();
			$('#interactiv').carousel('prev');
			$('#features').carousel('prev');
		});

		$('#interactiv .carousel-control.right').on('click',function(e){
			e.preventDefault();
			$('#interactiv').carousel('next');
			$('#features').carousel('next');
		});

		$('#features').on('slide.bs.carousel',function(e){
			if (e.direction == 'left')		$('#interactiv').carousel('next');
			else							$('#interactiv').carousel('prev');
		});


	/* Mobile swipe */

		$(".carousel.slide")
			.on("swiperight", function() {
				if ($(this).find('.carousel-control.left').length) {
					$(this).find('.carousel-control.left').click();
				} else {
					$(this).carousel('prev');
				}
			})
			.on("swipeleft", function() {
				if ($(this).find('.carousel-control.right').length) {
					$(this).find('.carousel-control.right').click();
				} else {
					$(this).carousel('next');
				}
			});


	/* CHAT */

	var chat = [
		{
			'author': 's1',
			'avatar': 'images/tmp-face.jpg',
			'msg': 'some message'
		},
		{
			'author': 's1',
			'avatar': 'images/tmp-face.jpg',
			'msg': 'some message - second string'
		},
		{
			'author': 's2',
			'avatar': 'images/tmp-face.jpg',
			'msg': 'some answer'
		},
		{
			'author': 's1',
			'avatar': 'images/tmp-face.jpg',
			'msg': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit!'
		},
		{
			'author': 's2',
			'avatar': 'images/tmp-face.jpg',
			'msg': 'some another answer'
		},
		{
			'author': 's1',
			'avatar': 'images/tmp-face.jpg',
			'msg': 'some message - second string'
		},
		{
			'author': 's2',
			'avatar': 'images/tmp-face.jpg',
			'msg': 'some answer'
		},
		{
			'author': 's1',
			'avatar': 'images/tmp-face.jpg',
			'msg': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit!'
		},
		{
			'author': 's2',
			'avatar': 'images/tmp-face.jpg',
			'msg': 'some another answer'
		}
	];

	chatting();

	$(window).on('load resize', function(){
		// Header 100% height fix
		$('.site-header').css({'min-height': $(window).height() + 15});

		if ( $('.site-header video').length ) {
			if ( $(window).width() < 768 ) {
				$('.site-header video').get(0).pause();
			} else {
				$('.site-header video').prop('preload','auto').get(0).play();
			}
		}
	});

	function chatting() {
		var i=0, interactive = setInterval(function(){

			// disable continued interval after all chat typed successfully
			if ( i == chat.length ) {
				clearInterval(interactive);
				$('#interactive ul').html('');
				chatting(); // repeat

			// do all magic
			} else {

				// if message from author
				if ( chat[i].author == 's1' ) {
					var author = chat[i].author;
					var img = chat[i].avatar;
					var msg = chat[i].msg;

					$('#interactive .typist')
						.html('')
						.typist({
							speed: 40,
							cursor: false,
							text: msg
						});

						// wait for typing to emulate human
						setTimeout(function(){
							$('#interactive .typist').html('');
							$('#interactive ul').append('<li class="' + author + '"><img src="' + img + '"><div class="msg">' + msg + '</div></li>');
						},1200);

				// other cases
				} else{
					$('#interactive ul').append('<li class="' + chat[i].author + '"><img src="' + chat[i].avatar + '"><div class="msg">' + chat[i].msg + '</div></li>');
				}
			}

			// counter
			i++;

		}, 3000);
	}

	var defaultState = "company";
	var anotherState = "investor";
	var futureBlock = "future-block";
	var futureBlockCount = 4;


	function changeFuture() {
		for (var i = 1; i <= futureBlockCount; i++) {
			$("#" + futureBlock + "-" + i + "-" + defaultState).show();
			$("#" + futureBlock + "-" + i + "-" + anotherState).hide();
		}
	}

	$("#forCompanies").click(function () {
		defaultState = "company";
		anotherState = "investor";
		changeFuture();
	});

	$("#forInvestors").click(function () {
		defaultState = "investor";
		anotherState = "company";
		changeFuture();
	});

  var lang = "en_GB";

  jQuery.i18n.properties({
	 name: 'Content',
	 path: 'bundle/',
	 mode: 'both',
	 language: lang,
	 checkAvailableLanguages: true,
	 async: true,
	 callback: function() {
		for (var i in $.i18n.map) {
		  $("#" + i).text($.i18n.prop(i));
		}
	 }
  });
});