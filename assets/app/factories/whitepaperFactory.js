app.factory('whitepaperFactory', function ($translate, config) {
  var langs = ['en', 'ru', 'zh'];
  
  function getWP() {
	 var lang = $translate.use();
	 
	 if (langs.indexOf(lang) < 0) {
		lang = 'en';
	 }
	 
	 return config.whitepaperBase + lang + ".pdf"
  }
  
  return {
	 getWP: getWP
  }
});