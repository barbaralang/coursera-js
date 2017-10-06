(
  function() {
    'use strict';

var urlLogin = '../../../ecosys-proxy/user-manager/authenticate/checkuser';

angular.module('AspernDashboardApp').service('LoginService', LoginService);

LoginService.$inject = ['$http', '$q'];
function LoginService($http, $q) {

  var login = this;

	login.success = false;
	login.login = false;
	login.error;

	login.doLogin = function(username, password) {

		var deferred = $q.defer();

		var parameter = $.param({
			username: username,
			password: password,
			service: 'buildingdata'
		});

		$http({
			method: 'POST',
			url: urlLogin,
			responseType: 'json',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			data: parameter
		})
		.then(function(response){
			deferred.resolve(response);
			if(response.data.success){
				login.success = true;
			}else{
				login.login = false;
				var errorString = 'Incorrect user/password';
				login.error = errorString;
				deferred.reject(response);
			}
		}
		, function(response) {
			login.login = false;
			var errorString = 'Error Status: ' + response.status + ' - ' + response.statusText;
			login.error = errorString;
		}
		)
		;

		return deferred.promise;
	}

}

})();
