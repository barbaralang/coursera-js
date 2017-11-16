(
  function() {
    'use strict';

    angular.module('AspernDashboardApp')
    .controller('MainController', MainController);

    MainController.$inject = ['LoginService', 'DataService', 'SESSION_DURATION', '$scope', '$rootScope', '$http', '$cookies'];
    function MainController(LoginService, DataService, SESSION_DURATION, $scope, $rootScope, $http, $cookies){
      var main = this;

      main.login = true;
      main.signedInUser = "Test";
      main.username = "";
      main.password = "";

      main.serverPath = "../emc-proxy";

      main.dateFormat = 'yyyy-MM-dd';

      main.dateOptions = {
      applyClass: 'btn-green',
      locale: {
        applyLabel: "Apply",
        fromLabel: "From",
        format: "YYYY-MM-DD", //will give you 2017-01-06
	//format: "D-MMM-YY", //will give you 6-Jan-17
	//format: "D-MMMM-YY", //will give you 6-January-17
        toLabel: "To",
        cancelLabel: 'Cancel',
        customRangeLabel: 'Custom range'
      },
      ranges: {
					'Today' : [ moment().startOf('day'), moment() ],
					'Yesterday' : [
							moment().subtract(1, 'days').startOf('day'),
							moment().subtract(1, 'days').endOf("day") ],
					'Last 7 Days' : [
							moment().subtract(6, 'days').startOf('day'),
							moment() ],
					'Last 30 Days' : [
							moment().subtract(29, 'days').startOf('day'),
							moment() ],
					'This Month' : [ moment().startOf('month'),
							moment().endOf('month') ],
					'Last Month' : [
							moment().subtract(1, 'month').startOf('month'),
							moment().subtract(1, 'month').endOf('month') ],
					'This Year' : [ moment().startOf('year'), moment() ]
      }
    };

      main.datePicker = {startDate: DataService.minDate, endDate: DataService.maxDate};

      main.dtFrom = DataService.minDate;
      main.dtTo = DataService.maxDate;
      main.dateFilter = DataService.dateFilter;
      main.btnKumuliert = DataService.btnKumuliert;
      //
      // $rootScope.dateFilter = main.dateFilter;
      // $rootScope.dtFrom = main.dtFrom;
      // $rootScope.dtTo = main.dtTo;

      // main.dtFrom = DataService.minDate;
      // main.dtTo = DataService.maxDate;
      // main.dateFilter = DataService.dateFilter;

      // $rootScope.dateFilter = DataService.dateFilter;
      // $rootScope.dtFrom = DataService.minDate;
      // $rootScope.dtTo = DataService.maxDate;
      //
      // main.root = $rootScope;

      main.users = 300;


      main.checkCookies = function(){

        if ($cookies.getObject('logged') != null) {
          //		  cookie present
          main.login = true;
          main.signedInUser = $cookies.getObject('logged').username;
          main.authString = 'Basic '
          + btoa(main.signedInUser + ':'
          + $cookies.getObject('logged').password);
          $http.defaults.headers.common['Authorization'] = main.authString;

        }
      }

      main.checkCookies();

      main.toggleChangeLog = function() {
        console.log('changeLog ' + main.changeLog);
        if(main.changeLog){
          main.changeLog = false;
        }else{
          main.changeLog = true;
        }
      }

      main.doLogin = function(){
        console.log('logged in');
        main.signedInUser = main.username;
        main.login = true;

        // LoginService.doLogin(main.username, main.password).then(function(result) {  //result === city
        //   if(result.data.success){
            main.error = '';
            main.authString = 'Basic ' + btoa(main.username + ':' + main.password);
            $http.defaults.headers.common['Authorization'] = main.authString;
            main.login = true;
            main.signedInUser = main.username;
            if(main.remember){
              // set cookie
              var expireDate = moment().add(SESSION_DURATION, 'm').toDate();
              var cookieObj = {
                username: main.username,
                password: main.password
              };
              $cookies.putObject('logged', cookieObj,  {'expires' : expireDate});
            }
            main.error = '';
          // }else{
          //   main.error = 'Incorrect user/password';
          // }
        // }
      // )

      }

      main.doLogOut = function(){
        main.login = false;
        main.authString = '';
        $http.defaults.headers.common['Authorization'] = '';
        main.username = '';
        main.password = '';
        main.error = '';
        main.signedInUser = 'Guest';
        $cookies.remove('logged');
      }

      $scope.$watch('main.datePicker.minDate', function (oldValue, newValue) {
        if(oldValue !== newValue){
          console.log('change value dt from');
          DataService.setMinDate(newValue);
        }
      });

      $scope.$watch('main.datePicker.maxDate', function (oldValue, newValue) {
        if(oldValue !== newValue){
          console.log('change value dt to');
          DataService.setMaxDate(newValue);
        }
      });

      $scope.$watch('main.dateFilter', function (oldValue, newValue) {
        if(oldValue !== newValue){
          console.log('change value dateFilter');
          DataService.setDateFilter(newValue);
        }
      });

      $scope.$watch('main.btnKumuliert', function (oldValue, newValue) {
        if(oldValue !== newValue){
          console.log('change value btnKumuliert');
          DataService.setKumuliert(newValue);
        }
      });


    }

})();
