(
  function() {
    'use strict';
     angular.module('AtavApp')
     .controller('FormsController', FormsController);

     FormsController.$inject=['formType', '$sce', '$scope'];
     function FormsController(formType, $sce, $scope) {
       var ctrl = this;

       var idMap = {
         'input_name': ['ff_elem4991', 'ff_elem5121'],
         'input_vorname': ['ff_elem5055', 'ff_elem5185'],
         'input_strasse': ['ff_elem4993', 'ff_elem5123'],
         'input_ort': ['ff_elem4996', 'ff_elem5126'],
         'input_plz_outside': ['ff_elem5016', 'ff_elem5146'],
         'select_plz': ['ff_elem4995', 'ff_elem5125'],
         'select_personen': ['ff_elem5062', 'ff_elem5192'],
         'date_datum': ['ff_elem4999','ff_elem5129'],
         'time_hour': ['ff_elem5073','ff_elem5204'],
         'time_min': ['ff_elem5074','ff_elem5205'],
         'input_flug': ['ff_elem5153'],
         'input_ankunft': ['ff_elem5208'],
         'input_email1': ['ff_elem5003','ff_elem5133'],
         'input_email2': ['ff_elem5005','ff_elem5135'],
         'input_tel': ['ff_elem5007','ff_elem5137'],
         'text_info': ['ff_elem5009','ff_elem5139'],
         'input_klasse': ['ff_elem5051','ff_elem5182'],
         'input_preis': ['ff_elem5046','ff_elem5176'],
         'check_agb': ['ff_elem5011','ff_elem5141'],
         'check_sms': ['ff_elem5083','ff_elem5218'],
         'check_zusatz': ['ff_elem5088','ff_elem5223'],
         'check_erinnerung': ['ff_elem5117'],
         'button_1': ['ff_elem5012','ff_elem5142'],
         'button_0': ['ff_elem5013','ff_elem5143'],
         'button_order': ['ff_elem5014','ff_elem5144']
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
      //  var iframe = angular.element('#iframe');
      //  iframe.on('load', function() {
      //   //  apply changes after load
      //    ctrl.onIFrameLoad();
       //
      //     // $scope.$apply;
      //  });

      ctrl.safeApply = function(fn) {
        var phase = this.$root.$$phase;
        if(phase == '$apply' || phase == '$digest') {
          if(fn && (typeof(fn) === 'function')) {
            fn();
          }
        } else {
          this.$apply(fn);
        }
      };

       ctrl.onIFrameLoad = function(){
           $scope.$apply(function(){
            if(ctrl.formPage == 1){
              // $scope.$apply(function(){
                if(data.zipCodes.length == 0){
                  ctrl.getZipCodeList();
                }
                if(data.persons.length == 0){
                  ctrl.getPersonList();
                }
                // console.log(ctrl.getData());
                if(ctrl.selectedZipCode == null){
                  ctrl.selectedZipCode = data.zipCodes[0];
                }
                if(ctrl.selectedPerson == null){
                  ctrl.selectedPerson = data.persons[0];
                }
              // });
            }
            // else if(ctrl.formPage == 2){
              // $scope.$apply(function(){
                var el = ctrl.getIframeElementById('input_klasse');
                if(el != null){
                  el.addEventListener('change', function(e){
                    var target = e.target;
                    var myEl = ctrl.getElementById('input_klasse');
                    if(myEl != null){
                      myEl.value = target.value;
                    }
                  });
                }

                el = ctrl.getIframeElementById('input_preis');
                if(el != null){
                  el.addEventListener('change', function(e){
                    var target = e.target;
                    var myEl = ctrl.getElementById('input_preis');
                    if(myEl != null){
                      myEl.value = target.value;
                    }
                  });
                }
              // });
            // }
            });

       }

       ctrl.payment = false;

       ctrl.formType = formType;
       ctrl.formPage = 1;
       ctrl.outside = false;

       ctrl.ort = 'WIEN';

       ctrl.today = new Date();

       ctrl.targetField = null;

       ctrl.getIdMap = function(){
         return idMap;
       }

       ctrl.getIframeElementById = function(elemId){
         var id_arr = idMap[elemId];
         var content = document.getElementById('iframe').contentWindow;
         var found = false;
         var el;
         angular.forEach(id_arr, function(value) {
           if(!found){
             el = content.document.getElementById(value);
             if(el != null){
               found = true;
             }
           }
         });
         return el;
       }

       ctrl.getElementById = function(elemId){
         // var id_arr = idMap[elemId];
         // var found = false;
         var el;
         // angular.forEach(id_arr, function(value) {
         //   if(!found){
             el = document.getElementById(elemId);
           //   if(el != null){
           //     found = true;
           //   }
           // }
         // });
         return el;
       }

       ctrl.blurCallback = function($event) {
         if($event === null || $event.target === null) {
           return;
         }

         ctrl.targetField = $event.target;
         var id_arr = ctrl.getIdMap()[ctrl.targetField.id];
         var content = document.getElementById('iframe').contentWindow;
         var found = false;
         var el;
         angular.forEach(id_arr, function(value) {
           if(!found){
             el = content.document.getElementById(value);
             if(el != null){
               if(ctrl.targetField.id == 'select_plz' || ctrl.targetField.id == 'select_personen'){
                 el.value = ctrl.targetField.selectedOptions[0].label;
                 el.onchange();
                 // if(ctrl.targetField.id == 'select_plz'){
                 //   if(ctrl.targetField.selectedOptions[0].label != 'außerhalb Wien'){
                 //      var ort = ctrl.getElementById('input_ort');
                 //      ort.value = 'WIEN';
                 //   }
                 // }
               }else if(ctrl.targetField.id == 'check_agb' || ctrl.targetField.id == 'check_sms' || ctrl.targetField.id == 'check_zusatz'){
                 el.checked = ctrl.targetField.checked;
               }else if(ctrl.targetField.id == 'date_datum'){
                 el.checked = ctrl.targetField.checked;
               }else{
                 el.value = ctrl.targetField.value;
               }
               found = true;
             }
           }
         });
       }

       ctrl.isDisabledDate = function(currentDate, mode) {
         return mode === 'day' && (currentDate.getMinutes()%5 !== 0);
       };

       ctrl.onChangeDate = function(){
         var date_str = moment(ctrl.date).format('DD-MM-YYYY');
         var hour_str = moment(ctrl.date).format('HH');
         var minute_str = moment(ctrl.date).format('mm');
         var content = document.getElementById('iframe').contentWindow;
         var found = false;
         var el;

         // set date
         var id_arr = ctrl.getIdMap()['date_datum'];
         angular.forEach(id_arr, function(value) {
           if(!found){
             el = content.document.getElementById(value);
             if(el != null){
               el.value = date_str;
               found = true;
             }
           }
         });

         // set time
         found = false;
         id_arr = ctrl.getIdMap()['time_hour'];
         angular.forEach(id_arr, function(value) {
           if(!found){
             el = content.document.getElementById(value);
             if(el != null){
               el.value = hour_str;
               found = true;
             }
           }
         });

         found = false;
         id_arr = ctrl.getIdMap()['time_min'];
         angular.forEach(id_arr, function(value) {
           if(!found){
             el = content.document.getElementById(value);
             if(el != null){
               el.value = minute_str;
               found = true;
             }
           }
         });


       }

       ctrl.onSelect = function(item, id){
         var el = ctrl.getElementById(id);
         if(id == 'select_plz'){
           if(el.selectedOptions[0].label != 'ausserhalb Wien'){
              var ort = ctrl.getElementById('input_ort');
              ctrl.outside = false;
              ort.value = 'WIEN';
           }else{
             ctrl.outside = true;
           }
         }
       }

       // ctrl.selectCallback = function(id) {
       //
       //   var id_arr = ctrl.getIdMap()[id];
       //   var content = document.getElementById('iframe').contentWindow;
       //   var found = false;
       //   var el;
       //   angular.forEach(id_arr, function(value) {
       //     if(!found){
       //       el = content.document.getElementById(value);
       //       el.value = ctrl.targetField.selectedOptions[0].label;
       //       found = true;
       //       }
       //    });
       // }

       ctrl.checkCallback = function(id) {

         var id_arr = ctrl.getIdMap()[id];
         var content = document.getElementById('iframe').contentWindow;
         var found = false;
         var el;
         angular.forEach(id_arr, function(value) {
           if(!found){
             el = content.document.getElementById(value);
             el.checked = ctrl.targetField.checked;
             found = true;
             }
          });
       }

       // ctrl.selectedZipCode;
       // ctrl.selectedPerson;

       ctrl.getZipCodeList = function(){
         var zipCodes = [];
          data.zipCodes.length = 0;
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
         data.persons.length = 0;
         var elem = ctrl.getIframeElementById('select_personen');
         if (elem != null) {
           var i;
           for (i = 0; i < 5; i++) {
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
         // var basic_url = 'https://www.atav.at/index.php?restype=2&street=&zip=&place=&zipout=&format=html&tmpl=component&option=com_breezingforms&ff_form='+ctrl.getFormNum()+'&ff_page=' + ctrl.formPage;
         var basic_url = 'https://www.atav.at/index.php?restype=2&street=&zip=&place=&zipout=&format=html&tmpl=component&option=com_breezingforms&ff_form='+ctrl.getFormNum()+'&ff_page=1';
         return $sce.trustAsResourceUrl(basic_url);
       }

       ctrl.onSubmit = function(){
        var submit = true;
        var el = ctrl.getIframeElementById('button_1');
        el.click();
        ctrl.formPage++;
        console.log(ctrl.formPage);
        ctrl.getIFrameLocation();
        // ctrl.onIFrameLoad();
        if(!ctrl.outside){
          var klasse = ctrl.getIframeElementById('input_klasse').value;
          var input_klasse = ctrl.getElementById('input_klasse');
          input_klasse.value = klasse;
          input_klasse.disabled = true;
          var preis = ctrl.getIframeElementById('input_preis').value;
          var input_preis = ctrl.getElementById('input_preis');
          input_preis.value = preis;
          input_preis.disabled = true;
        }
       }

       ctrl.onBack = function(){
        var submit = true;
        var el = ctrl.getIframeElementById('button_0');
        el.click();
        if(ctrl.formPage > 0){
          ctrl.formPage--;
        }
        console.log(ctrl.formPage);
        ctrl.getIFrameLocation();
        // ctrl.onIFrameLoad();
       }

       ctrl.onOrder = function(){
         var el = ctrl.getIframeElementById('button_order');
         el.click();
         ctrl.formPage++;
         console.log(ctrl.formPage);
         ctrl.payment = true;
       }

       ctrl.getIFrameLocation = function(){
         var contentWindow = document.getElementById('iframe').documentWindow || document.getElementById('iframe').contentDocument;
         var location = '';
         if(contentWindow != null){
           location = contentWindow.location.href;
         }
         console.log(location);
         return location;
       }

       ctrl.iframe_location = ctrl.getIFrameLocation();

       $scope.$watch('ctrl.iframe_location', function(oldValue, newValue){
         if(newValue !== oldValue){
           console.log('iframe location changed');
         }
       });

       ctrl.dateTimeNow = function() {
         ctrl.date = new Date();
      };
      // ctrl.dateTimeNow();

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

function onIFrameLoad(){
  console.log('iframe in javascript loaded');
}

})();
