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
});