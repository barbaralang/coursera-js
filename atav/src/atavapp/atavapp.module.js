(
  function() {
    'use strict';
     angular.module('AtavApp', ['pascalprecht.translate', 'ui.bootstrap', 'ui.bootstrap.datetimepicker','ui.router','Data', 'Spinner'])
    .config(function ($translateProvider) {
       $translateProvider.translations('en', {
         HOME_FROM_AIRPORT: 'from airport',
         HOME_TO_AIRPORT: 'to airport',
         FORM_NAME: 'Name',
         FORM_VORNAME: 'First Name',
         FORM_STRASSE: 'Street Number',
         FORM_PLZ: 'Zip Code',
         FORM_ORT: 'City',
         FORM_PERSONEN: '# Passengers',
         FORM_FLUGNR: 'Flightnumber',
         FORM_ANKUNFT: 'Arrival from',
         FORM_EMAIL1: 'Email',
         FORM_EMAIL2: 'Confirm Email',
         FORM_TEL: 'Phonenumber',
         FORM_INFO: 'Notes',
         FORM_AGB: 'Confirm Terms of Service',
         FORM_NEXT: 'Next'
       });
       $translateProvider.translations('de', {
         HOME_FROM_AIRPORT: 'zum Flughafen',
         HOME_TO_AIRPORT: 'vom Flughafen',
         FORM_NAME: 'Name',
         FORM_VORNAME: 'Vorname',
         FORM_STRASSE: 'Strasse und Nummer',
         FORM_PLZ: 'PLZ',
         FORM_ORT: 'Ort',
         FORM_PERSONEN: 'Personen',
         FORM_FLUGNR: 'Flugnummer',
         FORM_ANKUNFT: 'Ankunft aus',
         FORM_EMAIL1: 'Email',
         FORM_EMAIL2: 'Email wiederholen',
         FORM_TEL: 'Telefonnummer',
         FORM_INFO: 'Bemerkung',
         FORM_AGB: 'Akzeptieren der AGB',
         FORM_NEXT: 'Nächster Schritt'
       });
       $translateProvider.registerAvailableLanguageKeys(['en', 'de'], {
         'en_US': 'en',
         'en_UK': 'en',
         'de_DE': 'de',
         'de_CH': 'de'
       })
       .determinePreferredLanguage()
       .fallbackLanguage('en');
     });
})();
