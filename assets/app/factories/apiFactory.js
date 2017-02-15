app.factory('apiFactory', function ($http, config) {
  return {
	 subscribe: function (opts) {
		return $http.post(config.api + "/subscribe", opts).then(function (resp) {
		  if (resp.data.error) {
			 throw resp.data.error;
		  }
		  
		  return resp.data.success;
		})
	 },
	 
	 /*getBTC: function () {
		return $http.get(config.api + '/btc').then(function (resp) {
		  console.log('got btc', resp.data);
		  if (resp.data.error) {
			 throw resp.data.error;
		  }
		  
		  return resp.data.balance;
		});
	 }*/
  }
});