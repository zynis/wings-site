app.factory('apiFactory', function ($http, config) {
  return {
	 subscribe: function (opts) {
		return $http.post(config.api + "/subscribe", {
		  email: opts.email,
		  ref: opts.ref,
		  lang: opts.lang
		}).then(function (resp) {
		  if (resp.data.error) {
			 throw resp.data.error;
		  }
		  
		  return resp.data.success;
		})
	 }
  }
});