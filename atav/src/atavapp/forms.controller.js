(
  function() {
    'use strict';
     angular.module('AtavApp')
     .controller('FormsController', FormsController);

     FormsController.$inject=['formType', '$sce'];
     function FormsController(formType, $sce) {
       var ctrl = this;

       var idMap = {
         'form_name': 'ff_elem634',
         'form_vorname': 'ff_elem922'
       }

       ctrl.formType = formType;
       ctrl.formPage = 1;

       ctrl.today = new Date();

       ctrl.targetField = null;

       ctrl.getIdMap = function(){
         return idMap;
       }

       ctrl.getElementById = function(elemId){
         var id = idMap[elemId];
         var element = angular.element('#'+id);

       }

       ctrl.blurCallback = function($event) {
         if($event.target === null) {
           return;
         }

         ctrl.targetField = $event.target;
         var id = ctrl.getIdMap()[ctrl.targetField.id];
         var element = angular.element('#iframe');
       };

       ctrl.getFormNum = function(){
         var num = 0;
           if(ctrl.formType == 'to'){
             num = 6;
           }else if (ctrl.formType == 'from'){
             num = 7;
           }

          return num;
       }

       ctrl.getFormUrl = function(){
         var basic_url = 'https://www.atav.at/index.php?restype=2&street=&zip=&place=&zipout=&format=html&tmpl=component&option=com_breezingforms&ff_form='+ctrl.getFormNum()+'&ff_page=' + ctrl.formPage;
         return $sce.trustAsResourceUrl(basic_url);
       }

       ctrl.onSubmit = function(){
        var submit = true; 
       }

       ctrl.dateTimeNow = function() {
         ctrl.date = new Date();
      };
      ctrl.dateTimeNow();

  ctrl.toggleMinDate = function() {
    var minDate = new Date();
    var maxDate = new Date();
    // set to yesterday
    minDate.setDate(minDate.getDate() - 1);
    maxDate.setDate(maxDate.getDate() + 3);
    ctrl.dateOptions.minDate = ctrl.dateOptions.minDate ? null : minDate;
//    ctrl.dateOptions.maxDate = ctrl.dateOptions.maxDate ? null : maxDate;
  };

  ctrl.dateOptions = {
    showWeeks: false,
    startingDay: 0
  };

  ctrl.toggleMinDate();

  // Disable weekend selection
  ctrl.disabled = function(calendarDate, mode) {
    return mode === 'day' && ( calendarDate.getDay() === 0 || calendarDate.getDay() === 6 );
  };

  ctrl.open = function($event,opened) {
    $event.preventDefault();
    $event.stopPropagation();
    ctrl.dateOpened = true;
  };

  ctrl.dateOpened = false;
  ctrl.hourStep = 1;
  ctrl.format = "yyyy-MM-dd";
  ctrl.minuteStep = 15;
  // add min-time="minTime" to datetimepicker to use this value
  ctrl.minTime = new Date(0, 0, 0, Math.max(1, ctrl.date.getHours() - 2), 0, 0, 0);

  ctrl.timeOptions = {
    hourStep: [1, 2, 3],
    minuteStep: [1, 5, 10, 15, 25, 30]
  };

  ctrl.showMeridian = true;
  ctrl.timeToggleMode = function() {
    ctrl.showMeridian = !ctrl.showMeridian;
  };

  ctrl.resetHours = function() {
    ctrl.date.setHours(1);
  };
     }
})();
