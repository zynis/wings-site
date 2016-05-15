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


  		var randomScalingFactor = function() {
			return Math.round(Math.random() * 100);
		};
		var randomColorFactor = function() {
			return Math.round(Math.random() * 255);
		};
		var randomColor = function(opacity) {
			return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.3') + ')';
		};

  		var pieConfig = {
		  "size": {
			 "canvasHeight": 400,
			 "canvasWidth": 590,
			 "pieOuterRadius": "78%"
		  },
		  "data": {
			 "content": [
				{
				  "label": "Test 1",
				  "value": 8,
				  "color": "#7e3838"
				},
				{
				  "label": "Test 2",
				  "value": 5,
				  "color": "#7e6538"
				},
				{
				  "label": "Test 4",
				  "value": 2,
				  "color": "#7c7e38"
				},
				{
				  "label": "Test 5",
				  "value": 3,
				  "color": "#587e38"
				}
			 ]
		  },
		  "labels": {
			 "outer": {
				"pieDistance": 25
			 },
			 "inner": {
				"format": "none"
			 },
			 "mainLabel": {
				"color": "#FFF",
				"font": "verdana"
			 },
			 "percentage": {
				"color": "#FFF",
				"font": "verdana",
				"decimalPlaces": 0
			 },
			 "value": {
				"color": "#FFF",
				"font": "verdana"
			 },
			 "lines": {
				"enabled": true,
				"color": "#FFF"
			 },
			 "truncation": {
				"enabled": true
			 }
		  },
		  "effects": {
			 "pullOutSegmentOnClick": {
				"effect": "linear",
				"speed": 400,
				"size": 8
			 }
		  }
		};

  		function renderPie() {
		  window.pie = new d3pie("chart-area", pieConfig);
		}

		$('.chart-changer a').click(function() {
		  $(this).parent().children('.active').removeClass('active');
		  $(this).addClass('active');

		  var pieData = pieConfig.data.content;
		  var newData = [];
		  pieData.forEach(function (i) {
			 newData.push({
				label: i.label,
				value: randomScalingFactor(),
				color: randomColor(0.7)
			 });
		  });

		  window.pie.updateProp("data.content", newData);
		});

		$("#interactiv").on('slide.bs.carousel', function(evt) {
		  var nextSlide = $(evt.relatedTarget).index();

		  if (nextSlide == 1 && !window.pie) {
			 renderPie();
		  }
		});

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
			else	$('#interactiv').carousel('prev');
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

	var chat = [
		{
			'author': 'bot',
			'avatar': 'images/bot.png',
			'msg': 'Welcome to Wings DAO Bot. We allow to fund and manage your DAOs easily.'
		},
		{
			'author': 'user',
			'avatar': 'images/face.png',
			'msg': '/start'
		},
	  	{
		  'author': 'bot',
		  'avatar': 'images/bot.png',
		  'msg': 'List of commands: <br><br> /daolist - List of DAOs<br> /instruction - Instruction how to invest<br> /mybalance - Your DAO balance<br> /transfer - Transfer your BTC/ETH to dao<br> /terms - Terms & Conditions<br> /help - Help'
		},
	  	{
		  'author': 'user',
		  'avatar': 'images/face.png',
		  'msg': '/mybalance'
		},
	  	{
		  'author': 'bot',
		  'avatar': 'images/bot.png',
		  'msg':  "You've invested in 3 DAOs: <br><br> - Wings DAO<br> - Demo DAO<br> - SuperCool DAO<br><br>Write DAO name to get more info"
		},
		 {
			'author': 'user',
			'avatar': 'images/face.png',
			'msg': 'Wings DAO'
		 },
	   {
		  'author': 'bot',
		  'avatar': 'images/bot.png',
		  'msg':  "You have 100k Wings DAO Tokens, you've earned 1000% profit"
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
	  function postMessage(msg, cb) {
		 if (msg.author === "bot") {
			setTimeout(function () {
			  $('#interactive ul').append('<li class="' + msg.author + '"><img src="' + msg.avatar + '"><div class="msg">' + msg.msg + '</div></li>');
			  cb();
			}, 5000);
		 } else {
			var author = msg.author;
			var img = msg.avatar;
			var msg = msg.msg;

			$('#interactive .typist')
			  .html('')
			  .typist({
				 speed: 40,
				 cursor: false,
				 text: msg
			  });

			setTimeout(function () {
			  $('#interactive .typist').html('');
			  $('#interactive ul').append('<li class="' + author + '"><img src="' + img + '"><div class="msg">' + msg + '</div></li>');
			  cb();
			}, 1500);
		 }
	  }

	  var i = 0;
	  setTimeout(function chatLoop() {
		 if (i == chat.length) {
			$('#interactive ul').html('');
			i = 0;
			return setTimeout(chatLoop);
		 } else {
			var msg = chat[i];

			postMessage(msg, function () {
			  i++;
			  setTimeout(chatLoop, 3000);
			});
		 }
	  });

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

  $("#subscribe-form").submit(function (e) {
	 e.preventDefault();
	 $("#subscribe_error").hide();
	 $("#subscribe_successful").hide();

	 var email = $("#subscribe-email").val();

	 $.ajax({
		type: "POST",
		url: "http://localhost:3030/subscribe",
		data: JSON.stringify({
		  email: email
		}),
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function () {
		  $("#subscribe_successful").show();
		},
		error: function (resp) {
		  var defaultError = "Something went wrong, contact us: support@wings.ai";
		  var error = resp.responseJSON? resp.responseJSON.error || defaultError: defaultError;

		  $("#subscribe_error").text(error);
		  $("#subscribe_error").show();
		}
	 })
  });
});