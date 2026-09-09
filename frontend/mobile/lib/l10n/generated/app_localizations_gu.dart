// ignore: unused_import
import 'package:intl/intl.dart' as intl;

import 'app_localizations.dart';

// ignore_for_file: type=lint

/// The translations for Gujarati (`gu`).
class AppLocalizationsGu extends AppLocalizations {
  AppLocalizationsGu([String locale = 'gu']) : super(locale);

  @override
  String get appName => 'શ્રીઅન્ન';

  @override
  String get myProfile => 'મારી પ્રોફાઇલ';

  @override
  String get managePersonalInformation =>
      'તમારી વ્યક્તિગત માહિતી અને એકાઉન્ટ મેનેજ કરો.';

  @override
  String get personalInformation => 'વ્યક્તિગત માહિતી';

  @override
  String get fullName => 'પૂરું નામ';

  @override
  String get mobileNumber => 'મોબાઇલ નંબર';

  @override
  String get email => 'ઈમેલ';

  @override
  String get address => 'સરનામું';

  @override
  String get location => 'સ્થળ';

  @override
  String get district => 'જિલ્લો';

  @override
  String get taluka => 'તાલુકો';

  @override
  String get village => 'ગામ';

  @override
  String get farmInformation => 'ખેતરની માહિતી';

  @override
  String get registeredFarms => 'નોંધાયેલા ખેતરો';

  @override
  String get accountStatus => 'એકાઉન્ટ સ્થિતિ';

  @override
  String get memberSince => 'સભ્ય બન્યા ત્યારથી';

  @override
  String get account => 'એકાઉન્ટ';

  @override
  String get changePassword => 'પાસવર્ડ બદલો';

  @override
  String get notifications => 'સૂચનાઓ';

  @override
  String get language => 'ભાષા';

  @override
  String get support => 'સહાય';

  @override
  String get helpSupport => 'મદદ અને સહાય';

  @override
  String get termsConditions => 'નિયમો અને શરતો';

  @override
  String get privacyPolicy => 'ગોપનીયતા નીતિ';

  @override
  String get logout => 'લૉગઆઉટ';

  @override
  String get logoutConfirmation => 'શું તમે ખરેખર લૉગઆઉટ કરવા માંગો છો?';

  @override
  String get cancel => 'રદ કરો';

  @override
  String get english => 'અંગ્રેજી';

  @override
  String get gujarati => 'ગુજરાતી';

  @override
  String get hindi => 'હિન્દી';

  @override
  String get selectLanguage => 'ભાષા પસંદ કરો';

  @override
  String get languageChanged => 'ભાષા સફળતાપૂર્વક બદલાઈ ગઈ.';

  @override
  String get home => 'હોમ';

  @override
  String get myLots => 'મારા લૉટ';

  @override
  String get farm => 'ખેતર';

  @override
  String get profile => 'પ્રોફાઇલ';

  @override
  String helloFarmer(String name) {
    return 'નમસ્તે, $name';
  }

  @override
  String currentFpo(String fpo) {
    return 'હાલનો FPO: $fpo';
  }

  @override
  String get activeLots => 'સક્રિય લૉટ';

  @override
  String lotsCount(int count) {
    return '$count લૉટ';
  }

  @override
  String pendingAction(int count) {
    return '$count બાકી ક્રિયા';
  }

  @override
  String get recentLotStatus => 'તાજેતરની લૉટ સ્થિતિ';

  @override
  String get sellMillet => 'બાજરી વેચો';

  @override
  String get manageFarms => 'ખેતર મેનેજ કરો';

  @override
  String get viewDetails => 'વિગતો જુઓ';

  @override
  String get submitted => 'સબમિટ કર્યું';

  @override
  String submittedDate(String date) {
    return 'સબમિટ: $date';
  }

  @override
  String get manageAndTrackLots =>
      'તમારા સબમિટ કરેલ હાર્વેસ્ટ લૉટ મેનેજ અને ટ્રૅક કરો.';

  @override
  String get submitNewLot => 'નવો લૉટ સબમિટ કરો';

  @override
  String get estimatedQuantity => 'અંદાજિત જથ્થો';

  @override
  String get submissionDate => 'સબમિશન તારીખ';

  @override
  String get statusSubmitted => 'સબમિટ કર્યું';

  @override
  String get statusInspectionInProgress => 'નિરીક્ષણ ચાલી રહ્યું છે';

  @override
  String get statusCertified => 'પ્રમાણિત';

  @override
  String get statusAgreementAwaiting => 'કરાર મંજૂરીની રાહ';

  @override
  String get statusPickupScheduled => 'પિકઅપ નિર્ધારિત';

  @override
  String get statusPaymentCompleted => 'ચુકવણી પૂર્ણ';

  @override
  String get statusInspectionCompleted => 'નિરીક્ષણ પૂર્ણ';

  @override
  String get statusPaymentProcessing => 'ચુકવણી પ્રક્રિયા';

  @override
  String get lotPrefix => 'લૉટ #';

  @override
  String get lotDetails => 'લૉટ વિગતો';

  @override
  String get procurementJourney => 'ખરીદ પ્રક્રિયા';

  @override
  String get harvestDetails => 'હાર્વેસ્ટ વિગતો';

  @override
  String get milletType => 'બાજરીનો પ્રકાર';

  @override
  String get harvestDate => 'હાર્વેસ્ટ તારીખ';

  @override
  String get farmLabel => 'ખેતર';

  @override
  String get fpo => 'FPO';

  @override
  String get quantity => 'જથ્થો';

  @override
  String get quantityKg => 'અંદાજિત જથ્થો (કિ.ગ્રા.)';

  @override
  String get fpoUpdateNote =>
      'FPO ખરીદ પ્રક્રિયા દ્વારા આગળ વધતા લૉટ સ્થિતિ અપડેટ કરશે.';

  @override
  String get lotSubmitted => 'લૉટ સબમિટ';

  @override
  String get lotSubmittedSubtitle => 'તમારો લૉટ FPO ને સબમિટ થઈ ગયો છે.';

  @override
  String get qualityInspection => 'ગુણવત્તા નિરીક્ષણ';

  @override
  String get qualityInspectionSubtitle => 'ગુણવત્તા નિરીક્ષણ ચાલી રહ્યું છે.';

  @override
  String get qualityCertificate => 'ગુણવત્તા પ્રમાણપત્ર';

  @override
  String get qualityCertificateSubtitle =>
      'નિરીક્ષણ પછી પ્રમાણપત્ર આપવામાં આવશે.';

  @override
  String get procurementAgreement => 'ખરીદ કરાર';

  @override
  String get procurementAgreementSubtitle => 'મંજૂરી પછી કરાર બનાવવામાં આવશે.';

  @override
  String get pickupDelivery => 'પિકઅપ / ડિલિવરી';

  @override
  String get pickupDeliverySubtitle => 'પિકઅپ સૂચિ અહીં દેખાશે.';

  @override
  String get warehouseReceipt => 'વેરહાઉસ રસીદ';

  @override
  String get warehouseReceiptSubtitle => 'વેરહાઉસ રસીદ અહીં નોંધવામાં આવશે.';

  @override
  String get payment => 'ચુકવણી';

  @override
  String get paymentSubtitle => 'ચુકવણી સ્થિતિ અહીં દેખાશે.';

  @override
  String get viewResults => 'પરિણામ જુઓ';

  @override
  String get viewCertificate => 'પ્રમાણપત્ર જુઓ';

  @override
  String get viewAgreement => 'કરાર જુઓ';

  @override
  String get trackDetails => 'ટ્રૅક વિગતો';

  @override
  String get viewReceipt => 'રસીદ જુઓ';

  @override
  String get viewPayment => 'ચુકવણી જુઓ';

  @override
  String get sellMilletTitle => 'બાજરી વેચો';

  @override
  String get sellMilletSubtitle =>
      'આ માહિતી ગુણવત્તા નિરીક્ષણ માટે FPO ને સબમિટ થશે.';

  @override
  String get selectFarm => 'ખેતર પસંદ કરો';

  @override
  String get chooseFarm => 'ખેતર પસંદ કરો...';

  @override
  String get chooseMilletType => 'બાજરીનો પ્રકાર પસંદ કરો...';

  @override
  String get descriptionOptional => 'વિવરણ (વૈકલ્પિક)';

  @override
  String get descriptionHint => 'આ લૉટ વિશે ચોક્કસ વિગતો ઉમેરો...';

  @override
  String get submitLot => 'લૉટ સબમિટ કરો';

  @override
  String get confirmSubmission => 'સબમિશનની પુષ્ટિ';

  @override
  String get confirmSubmitMessage =>
      'શું તમે ખરેખર ગુણવત્તા નિરીક્ષણ માટે આ લૉટ સબમિટ કરવા માંગો છો?';

  @override
  String get submit => 'સબમિટ';

  @override
  String get pleaseSelectFarm => 'કૃપા કરી ખેતર પસંદ કરો';

  @override
  String get pleaseSelectMilletType => 'કૃપા કરી બાજરીનો પ્રકાર પસંદ કરો';

  @override
  String get pleaseEnterQuantity => 'કૃપા કરી અંદાજિત જથ્થો દાખલ કરો';

  @override
  String get enterValidQuantity => 'માન્ય જથ્થો દાખલ કરો';

  @override
  String get pleaseSelectHarvestDate => 'કૃપા કરી હાર્વેસ્ટ તારીખ પસંદ કરો';

  @override
  String get lotSubmittedSuccessfully => 'લૉટ સફળતાપૂર્વક સબમિટ થઈ ગયો';

  @override
  String get milletPearl => 'બાજરો (Bajra)';

  @override
  String get milletFinger => 'નાગલી (Ragi)';

  @override
  String get milletFoxtail => 'કાંગ (Foxtail)';

  @override
  String get milletSorghum => 'જુવાર (Jowar)';

  @override
  String get milletBarnyard => 'સ્વાવ (Sanwa)';

  @override
  String get milletBrowntop => 'Browntop બાજરી (Korralu)';

  @override
  String get milletKodo => 'કોડો (Varagu)';

  @override
  String get milletLittle => 'ગૂ઼ Millet (Kutki)';

  @override
  String get milletProso => 'Proso Millet (Chena)';

  @override
  String get farmManagement => 'ખેતર વ્યવસ્થાપન';

  @override
  String get noFarmsFound => 'કોઈ ખેતર મળ્યું નહીં';

  @override
  String get addFirstFarm => 'શરૂ કરવા માટે તમારું પ્રથમ ખેતર ઉમેરો.';

  @override
  String get addFarm => 'ખેતર ઉમેરો';

  @override
  String get addFarmTitle => 'ખેતર ઉમેરો';

  @override
  String get viewFarm => 'ખેતર જુઓ';

  @override
  String get manage => 'મેનેજ';

  @override
  String get area => 'ક્ષેત્ર';

  @override
  String get soilType => 'જમીનનો પ્રકાર';

  @override
  String areaAcres(String area) {
    return '$area એકર';
  }

  @override
  String get failedToLoadFarms => 'ખેતર લોડ કરવામાં નિષ્ફળ';

  @override
  String get retry => 'ફરી પ્રયાસ';

  @override
  String get farmSettings => 'ખેતર સેટિંગ';

  @override
  String viewLotsFor(String farmName) {
    return '$farmName ના લૉટ જુઓ';
  }

  @override
  String get viewAllLots => 'બધા લૉટ અને તેમની વિગતો જુઓ';

  @override
  String get requestInspection => 'નિરીક્ષણ વિનંતી';

  @override
  String get scheduleAgronomist => 'કૃષિ નિષ્ણાત ની મુલાકાત નક્કી કરો';

  @override
  String get deleteFarm => 'ખેતર કાઢી નાખો';

  @override
  String get removeFromDashboard => 'ડૅshboard માંથી કાયમ માટે દૂર કરો';

  @override
  String get archiveFarm => 'ખેતર આર્કાઇવ કરો';

  @override
  String get archiveFarmSubtitle => 'સક્રિય ડૅshboard માંથી દૂર કરો';

  @override
  String get archiveFarmTitle => 'ખેતર આર્કાઇવ?';

  @override
  String archiveFarmConfirm(String farmName) {
    return 'શું તમે ખરેખર $farmName ને આર્કાઇવ કરવા માંગો છો?';
  }

  @override
  String get archive => 'આર્કાઇવ';

  @override
  String get save => 'સાચવો';

  @override
  String get farmName => 'ખેતરનું નામ';

  @override
  String get welcomeTitle => 'શ્રીઅન્ન';

  @override
  String get welcomeSubtitle => 'સ્વાગત છે, ખેડૂત મિત્ર';

  @override
  String get login => 'લૉગિન';

  @override
  String get newRegistration => 'નવી નોંધણી';

  @override
  String get welcomeBack => 'ફરી સ્વાગત';

  @override
  String get enterMobileNumberHint => '10 આંકડાનો નંબર દાખલ કરો';

  @override
  String get enterMobileSubtitle =>
      'ચાલુ રાખવા માટે તમારો મોબાઇલ નંબર દાખલ કરો.';

  @override
  String get sendOtp => 'OTP મોકલો';

  @override
  String get askFpoToRegister => 'FPO ને નોંધણી કરવા કહો.';

  @override
  String get dontHaveAccount => 'ખાતું નથી?';

  @override
  String get invalidMobileNumber =>
      'કૃપા કરી 10 આંકડાનો માન્ય મોબાઇલ નંબર દાખલ કરો';

  @override
  String get enterOtp => 'OTP દાખલ કરો';

  @override
  String otpSentTo(String phone) {
    return '$phone પર 6-અંકનો OTP મોકલ્યો છે';
  }

  @override
  String get verifyOtp => 'OTP ચકાસો';

  @override
  String get resendOtp => 'OTP ફરી મોકલો';

  @override
  String get didNotReceiveOtp => 'OTP મળ્યો નથી?';

  @override
  String get pleaseEnterCompleteOtp => 'કૃપા કરી સંપૂર્ણ 6-અંકનો OTP દાખલ કરો';

  @override
  String get otpSentAgain => 'OTP ફરી મોકલ્યો';

  @override
  String get loginSuccessful => 'લૉગિન સફળ';

  @override
  String get unableToLoadProfile => 'પ્રોફાઇલ લોડ કરવામાં અસમર્થ';

  @override
  String get acceptAgreement => 'કરાર સ્વીકારો';

  @override
  String get rejectAgreement => 'કરાર અસ્વીકાર કરો';

  @override
  String get callHelpline => 'હેલ્પલાઇન પર કૉલ કરો';

  @override
  String get emailSupport => 'ઇમેઇલ સપોર્ટ';

  @override
  String get frequentlyAskedQuestions => 'વારંવાર પૂછાતા પ્રશ્નો';

  @override
  String get workingHours => 'સોમ - શનિ (સવારે 9:00 - સાંજે 6:00)';

  @override
  String get supportDescription =>
      'તમારા ખેતર, મિલેટ લૉટ અથવા ચુકવણી અંગે મદદ જોઈએ છે? તમારા FPO નો સંપર્ક કરો.';
}
