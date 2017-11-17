(
  function() {
    'use strict';
     angular.module('AtavApp')
     .controller('HomeController', HomeController);

     HomeController.$inject=['$sce', '$scope'];
     function HomeController($sce, $scope) {
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
         'button_0': ['ff_elem5013','ff_elem5143']
       }

       ctrl.getIdMap = function(){
         return idMap;
       }

       ctrl.getIFrame = function(){
         var iframe = angular.element('#iframe');
         return iframe;
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

       // ctrl.getIFrameLocation = function(){
       //   var contentWindow = document.getElementById('iframe').documentWindow || document.getElementById('iframe').contentDocument;
       //   var location = '';
       //   if(contentWindow != null){
       //     location = contentWindow.location.href;
       //   }
       //   console.log(location);
       //   return location;
       // }
       //
       // ctrl.iframe_location = ctrl.getIFrameLocation();
       //
       // $scope.$watch('ctrl.iframe_location', function(oldValue, newValue){
       //   if(newValue !== oldValue){
       //     console.log('iframe location changed');
       //   }
       // });

     }
})();
