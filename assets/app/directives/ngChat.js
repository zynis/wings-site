app.directive('ngChat', function ($document, $window, $log, $q, $timeout, $http, $translate, $rootScope) {
  function link(scope, element, attrs) {
	 var launched = false;
	 var stop = false;
	 var finished = false;
	 
	 function addMessage(el, opts) {
		var def = $q.defer();
		var img, cssClass, msg;
		if (opts.author === "bot") {
		  img = "assets/images/chat_people-2.png";
		  cssClass = "right";
		} else {
		  img = "assets/images/chat_people-1.png";
		  cssClass = "left";
		}
		  
		msg = opts.msg;
	  
		var text = '' +
			 '<li class="chat-item-dialog-block ' + cssClass + '">' +
			 '<div class="chat-item-dialog-photo">' +
			 '<img src="' + img + '" alt="">' +
			 '</div>' +
			 '<div class="chat-item-dialog-message">' +
			 msg +
			 '</div>' +
			 '</li>';
		
		if (!stop) {
		  el.append(text);
		}
		
		$timeout(function () {
		  def.resolve();
		}, 1500);
		
		return def.promise;
	 }
  
	 $rootScope.$on('$translateChangeSuccess', function () {
		if (!finished) {
		  stop = true;
		}
		
		finished = false;
		launched = false;
	 });
	 
	 
	 $document.on('scroll', function() {
		//console.log('Document scrolled to ', $document.scrollLeft(), $document.scrollTop());
		var windscroll = angular.element($window).scrollTop();
		var p = $(element).offset().top-400;
		var el = $(element).find("ul.messages");
	  
		if (windscroll >= p) {
		  if (launched || stop) {
			 return;
		  }
		  
		  launched = true;
		  var lang = $translate.use();
		  
		  $http.get('/assets/app/translations/chat/' + lang + '.json').then(function (resp) {
			 return resp.data;
		  }).then(function (chatData) {
			 
			 chatData.reduce(function(p, val) {
				return p.then(function() {
				  if (stop) {
					 return;
				  }
				  
				  return addMessage(el, val);
				});
			 }, $q.when(true)).then(function () {
				if (stop) {
				  el.html('');
				}
				
				stop = false;
				finished = true;
				$log.info("Chat finished");
			 }).catch(function (err) {
				$log.error("Error in chat: ", err);
			 });
			 
		  });
		  
		}
	 });
	 
	 //
	 /*
	  var windscroll = $(window).scrollTop();
	  var p = $("#chat").offset().top-400;
	  if (windscroll >= p) {
	  $(".chat-item-dialog--1").show();
	  setTimeout(function() {$(".chat-item-dialog--2").show()}, 1500);
	  setTimeout(function() {$(".chat-item-dialog--3").show()}, 3000);
	  setTimeout(function() {$(".chat-item-dialog--4").show()}, 4500);
	  }
	  */
  }
  
  return {
	 link: link,
	 restrict: 'A'
  };
});