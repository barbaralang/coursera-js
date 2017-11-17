(
  function() {
    'use strict';
     angular.module('AtavApp', ['pascalprecht.translate', 'ui.bootstrap', 'ui.bootstrap.datetimepicker','ui.router','Data', 'Spinner'])
    .config(function ($translateProvider) {
       $translateProvider.translations('en', {
         HOME_FROM_AIRPORT: 'From Airport',
         HOME_TO_AIRPORT: 'To Airport',
         FORM_HEADER_FROM: 'Please enter exact destination address!',
         FORM_HEADER_TO: 'Please enter exact pickup address!',
         FORM_HEADER_CONFIRM: 'Please confirm data',
         FORM_NAME: 'Name',
         FORM_VORNAME: 'First Name',
         FORM_STRASSE: 'Street Number',
         FORM_PLZ: 'Zip Code',
         FORM_ORT: 'City',
         FORM_PLZ_OUT: 'ZipCode outside Vienna',
         FORM_PERSONEN: '# Passengers',
         FORM_FLUGNR: 'Flightnumber',
         FORM_ANKUNFT: 'Arrival from',
         FORM_EMAIL1: 'Email',
         FORM_EMAIL2: 'Confirm Email',
         FORM_TEL: 'Phonenumber',
         FORM_INFO: 'Notes',
         FORM_AGB: 'Confirm Terms of Service',
         FORM_SMS: 'Confirmation by SMS',
         FORM_ZUSATZ: 'Additional addresses requested',
         FORM_ERINNERUNG: 'Automatic reminder call 15 minutes before pick up',
         FORM_KLASSE: 'Booked	vehicle category',
         FORM_PREIS: 'Total in EUR incl. 10% VAT.',
         FORM_NEXT: 'Next',
         FORM_BACK: 'Back',
         FORM_ORDER: 'Confirm Order',
         FORM_CONFIRM_ADDRESS: 'Confirm Address'
       });
       $translateProvider.translations('de', {
         HOME_FROM_AIRPORT: 'Vom Flughafen',
         HOME_TO_AIRPORT: 'Zum Flughafen',
         FORM_HEADER_FROM: 'Bitte tragen Sie hier Ihre genaue Zieladresse ein!',
         FORM_HEADER_TO: 'Bitte tragen Sie hier Ihre genaue Abholadresse ein!',
         FORM_HEADER_CONFIRM: 'Bitte überprüfen Sie Ihre Eingaben:',
         FORM_NAME: 'Name',
         FORM_VORNAME: 'Vorname',
         FORM_STRASSE: 'Strasse und Nummer',
         FORM_PLZ: 'PLZ',
         FORM_ORT: 'Ort',
         FORM_PLZ_OUT: 'PLZ ausserhalb Wien',
         FORM_PERSONEN: 'Personen',
         FORM_FLUGNR: 'Flugnummer',
         FORM_ANKUNFT: 'Ankunft aus',
         FORM_EMAIL1: 'Email',
         FORM_EMAIL2: 'Email wiederholen',
         FORM_TEL: 'Telefonnummer',
         FORM_INFO: 'Bemerkung',
         FORM_AGB: 'Akzeptieren der AGB',
         FORM_SMS: 'Zusätzliche Bestätigung via SMS',
         FORM_ZUSATZ: 'Ich benötige weitere Adressen (Zusatzadressen)',
         FORM_ERINNERUNG: 'Autom. Erinnerungsanruf 15 Min. vor Abholung:',
         FORM_KLASSE: 'Gebuchte Fahrzeugklasse',
         FORM_PREIS: 'Gesamtpreis in EUR inkl. 10% MwSt.',
         FORM_NEXT: 'Nächster Schritt',
         FORM_BACK: 'Schritt zurück',
         FORM_ORDER: 'Fahrt bestellen',
         FORM_CONFIRM_ADDRESS: 'Adresse bestätigen'
       });
       $translateProvider.registerAvailableLanguageKeys(['en', 'de'], {
         'en_US': 'en',
         'en_UK': 'en',
         'de': 'de',
         'de_AT': 'de',
         'de_DE': 'de',
         'de_CH': 'de'
       })
       .useSanitizeValueStrategy('escape')
       .determinePreferredLanguage()
       .fallbackLanguage('en');
     });
})();
