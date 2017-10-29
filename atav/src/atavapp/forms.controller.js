(
  function() {
    'use strict';
     angular.module('AtavApp')
     .controller('FormsController', FormsController);

     FormsController.$inject=['formType', '$sce', '$scope'];
     function FormsController(formType, $sce, $scope) {
       var ctrl = this;

       var idMap = {
         'input_name': 'ff_elem4991',
         'input_vorname': 'ff_elem5055',
         'input_strasse': 'ff_elem5123',
         'input_ort': 'ff_elem5126',
         'select_plz': 'ff_elem4995',
         'select_personen': 'ff_elem5062'
       }

       var data = {
         zipCodes: [],
         persons: []
       }

       var zipCodes = [];
       var persons = [];

       ctrl.getData = function(){
         return data;
       }

      //  get data when iframe is loaded
       var iframe = angular.element('#iframe');
       iframe.on('load', function() {
        //  apply changes after load
         $scope.$apply(function(){
          ctrl.getZipCodeList();
          ctrl.getPersonList();
          console.log(ctrl.getData());
          ctrl.selectedZipCode = data.zipCodes[0];
          ctrl.selectedPerson = data.persons[0];
          ctrl.date = new Date();
        });
          // $scope.$apply;
       });

       ctrl.formType = formType;
       ctrl.formPage = 1;

       ctrl.today = new Date();

       ctrl.targetField = null;

       ctrl.getIdMap = function(){
         return idMap;
       }

       ctrl.getIframeElementById = function(elemId){
         var id = idMap[elemId];
         var content = document.getElementById('iframe').contentWindow;
         var element = content.document.getElementById(id);
        //  var element = angular.element('#'+id);
         return element;
       }

       ctrl.blurCallback = function($event) {
         if($event.target === null) {
           return;
         }

         ctrl.targetField = $event.target;
         var id = ctrl.getIdMap()[ctrl.targetField.id];
        //  var iframe = angular.element('#iframe');
         var content = document.getElementById('iframe').contentWindow;
         var el = content.document.getElementById(id);
        //  var el = angular.element('#iframe').contentWindow.angular.element('#'+id);
        //  var element = content.angular.element('#'+id);
         el.value = ctrl.targetField.value;
       };

       ctrl.selectedZipCode;
       ctrl.selectedPerson;

       ctrl.getZipCodeList = function(){
         var zipCodes = [];
         var elem = ctrl.getIframeElementById('select_plz');
         if (elem != null) {
           var i;
           for (i = 0; i < elem.length; i++) {
             var zipCode = {
               id: elem.options[i].text,
               value: elem.options[i].text
             };
             data.zipCodes.push(zipCode);
           }
         }
       }

       ctrl.getPersonList = function(){
         var persons = [];
         var elem = ctrl.getIframeElementById('select_personen');
         if (elem != null) {
           var i;
           for (i = 0; i < elem.length; i++) {
             var person = {
               id: elem.options[i].text,
               value: elem.options[i].text
             };
             data.persons.push(person);
           }
         }
       }

       ctrl.getFormNum = function(){
         var num = 0;
           if(ctrl.formType == 'to'){
             num = 83;
           }else if (ctrl.formType == 'from'){
             num = 84;
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

//   ctrl.toggleMinDate = function() {
//     var minDate = new Date();
//     var maxDate = new Date();
//     // set to yesterday
//     minDate.setDate(minDate.getDate() - 1);
//     maxDate.setDate(maxDate.getDate() + 3);
//     ctrl.dateOptions.minDate = ctrl.dateOptions.minDate ? null : minDate;
// //    ctrl.dateOptions.maxDate = ctrl.dateOptions.maxDate ? null : maxDate;
//   };
//
  ctrl.dateOptions = {
    showWeeks: false,
    startingDay: 0
  };
//
//   ctrl.toggleMinDate();
//
//   // Disable weekend selection
//   ctrl.disabled = function(calendarDate, mode) {
//     return mode === 'day' && ( calendarDate.getDay() === 0 || calendarDate.getDay() === 6 );
//   };
//
//   ctrl.open = function($event,opened) {
//     $event.preventDefault();
//     $event.stopPropagation();
//     ctrl.dateOpened = true;
//   };
//
//   ctrl.dateOpened = false;
//   ctrl.hourStep = 1;
  ctrl.format = "yyyy-MM-dd";
//   ctrl.minuteStep = 15;
//   // add min-time="minTime" to datetimepicker to use this value
//   ctrl.minTime = new Date(0, 0, 0, Math.max(1, ctrl.date.getHours() - 2), 0, 0, 0);
//
//   ctrl.timeOptions = {
//     hourStep: [1, 2, 3],
//     minuteStep: [1, 5, 10, 15, 25, 30]
//   };
//
  ctrl.showMeridian = false;
//   ctrl.timeToggleMode = function() {
//     ctrl.showMeridian = !ctrl.showMeridian;
//   };
//
//   ctrl.resetHours = function() {
//     ctrl.date.setHours(1);
//   };
}
})();
