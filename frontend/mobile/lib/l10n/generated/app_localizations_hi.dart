// ignore: unused_import
import 'package:intl/intl.dart' as intl;

import 'app_localizations.dart';

// ignore_for_file: type=lint

/// The translations for Hindi (`hi`).
class AppLocalizationsHi extends AppLocalizations {
  AppLocalizationsHi([String locale = 'hi']) : super(locale);

  @override
  String get appName => 'श्रीअन्न';

  @override
  String get myProfile => 'मेरी प्रोफ़ाइल';

  @override
  String get managePersonalInformation =>
      'अपनी व्यक्तिगत जानकारी और अकाउंट प्रबंधित करें।';

  @override
  String get personalInformation => 'व्यक्तिगत जानकारी';

  @override
  String get fullName => 'पूरा नाम';

  @override
  String get mobileNumber => 'मोबाइल नंबर';

  @override
  String get email => 'ईमेल';

  @override
  String get address => 'पता';

  @override
  String get location => 'स्थान';

  @override
  String get district => 'जिला';

  @override
  String get taluka => 'तालुका';

  @override
  String get village => 'गाँव';

  @override
  String get farmInformation => 'खेत की जानकारी';

  @override
  String get registeredFarms => 'पंजीकृत खेत';

  @override
  String get accountStatus => 'अकाउंट स्थिति';

  @override
  String get memberSince => 'सदस्य बनने की तारीख';

  @override
  String get account => 'अकाउंट';

  @override
  String get changePassword => 'पासवर्ड बदलें';

  @override
  String get notifications => 'सूचनाएँ';

  @override
  String get language => 'भाषा';

  @override
  String get support => 'सहायता';

  @override
  String get helpSupport => 'मदद और सहायता';

  @override
  String get termsConditions => 'नियम और शर्तें';

  @override
  String get privacyPolicy => 'गोपनीयता नीति';

  @override
  String get logout => 'लॉगआउट';

  @override
  String get logoutConfirmation => 'क्या आप वाकई लॉगआउट करना चाहते हैं?';

  @override
  String get cancel => 'रद्द करें';

  @override
  String get english => 'अंग्रेज़ी';

  @override
  String get gujarati => 'गुजराती';

  @override
  String get hindi => 'हिंदी';

  @override
  String get selectLanguage => 'भाषा चुनें';

  @override
  String get languageChanged => 'भाषा सफलतापूर्वक बदल दी गई है।';

  @override
  String get home => 'होम';

  @override
  String get myLots => 'मेरे लॉट';

  @override
  String get farm => 'खेत';

  @override
  String get profile => 'प्रोफ़ाइल';

  @override
  String helloFarmer(String name) {
    return 'नमस्ते, $name';
  }

  @override
  String currentFpo(String fpo) {
    return 'वर्तमान FPO: $fpo';
  }

  @override
  String get activeLots => 'सक्रिय लॉट';

  @override
  String lotsCount(int count) {
    return '$count लॉट';
  }

  @override
  String pendingAction(int count) {
    return '$count लंबित कार्य';
  }

  @override
  String get recentLotStatus => 'हालिया लॉट स्थिति';

  @override
  String get sellMillet => 'मिलेट बेचें';

  @override
  String get manageFarms => 'खेत प्रबंधित करें';

  @override
  String get viewDetails => 'विवरण देखें';

  @override
  String get submitted => 'सबमिट किया';

  @override
  String submittedDate(String date) {
    return 'सबमिट: $date';
  }

  @override
  String get manageAndTrackLots =>
      'अपने सबमिट किए गए फसल लॉट प्रबंधित और ट्रैक करें।';

  @override
  String get submitNewLot => 'नया लॉट सबमिट करें';

  @override
  String get estimatedQuantity => 'अनुमानित मात्रा';

  @override
  String get submissionDate => 'सबमिशन तारीख';

  @override
  String get statusSubmitted => 'सबमिट किया';

  @override
  String get statusInspectionInProgress => 'निरीक्षण जारी है';

  @override
  String get statusCertified => 'प्रमाणित';

  @override
  String get statusAgreementAwaiting => 'समझौता अनुमोदन की प्रतीक्षा';

  @override
  String get statusPickupScheduled => 'पिकअप निर्धारित';

  @override
  String get statusPaymentCompleted => 'भुगतान पूर्ण';

  @override
  String get statusInspectionCompleted => 'निरीक्षण पूर्ण';

  @override
  String get statusPaymentProcessing => 'भुगतान प्रक्रिया';

  @override
  String get lotPrefix => 'लॉट #';

  @override
  String get lotDetails => 'लॉट विवरण';

  @override
  String get procurementJourney => 'खरीद यात्रा';

  @override
  String get harvestDetails => 'फसल विवरण';

  @override
  String get milletType => 'मिलेट प्रकार';

  @override
  String get harvestDate => 'फसल तारीख';

  @override
  String get farmLabel => 'खेत';

  @override
  String get fpo => 'FPO';

  @override
  String get quantity => 'मात्रा';

  @override
  String get quantityKg => 'अनुमानित मात्रा (किग्रा)';

  @override
  String get fpoUpdateNote =>
      'आपका FPO खरीद प्रक्रिया के दौरान लॉट की स्थिति अपडेट करेगा।';

  @override
  String get lotSubmitted => 'लॉट सबमिट';

  @override
  String get lotSubmittedSubtitle => 'आपका लॉट FPO को सबमिट हो गया है।';

  @override
  String get qualityInspection => 'गुणवत्ता निरीक्षण';

  @override
  String get qualityInspectionSubtitle =>
      'गुणवत्ता निरीक्षण वर्तमान में जारी है।';

  @override
  String get qualityCertificate => 'गुणवत्ता प्रमाणपत्र';

  @override
  String get qualityCertificateSubtitle =>
      'निरीक्षण के बाद प्रमाणपत्र जारी होगा।';

  @override
  String get procurementAgreement => 'खरीद समझौता';

  @override
  String get procurementAgreementSubtitle =>
      'मंजूरी के बाद समझौता बनाया जाएगा।';

  @override
  String get pickupDelivery => 'पिकअप / डिलीवरी';

  @override
  String get pickupDeliverySubtitle => 'पिकअप शेड्यूल यहाँ दिखेगा।';

  @override
  String get warehouseReceipt => 'गोदाम रसीद';

  @override
  String get warehouseReceiptSubtitle => 'गोदाम रसीद यहाँ दर्ज होगी।';

  @override
  String get payment => 'भुगतान';

  @override
  String get paymentSubtitle => 'भुगतान स्थिति यहाँ दिखेगी।';

  @override
  String get viewResults => 'परिणाम देखें';

  @override
  String get viewCertificate => 'प्रमाणपत्र देखें';

  @override
  String get viewAgreement => 'समझौता देखें';

  @override
  String get trackDetails => 'ट्रैक विवरण';

  @override
  String get viewReceipt => 'रसीद देखें';

  @override
  String get viewPayment => 'भुगतान देखें';

  @override
  String get sellMilletTitle => 'मिलेट बेचें';

  @override
  String get sellMilletSubtitle =>
      'यह जानकारी गुणवत्ता निरीक्षण के लिए आपके FPO को सबमिट की जाएगी।';

  @override
  String get selectFarm => 'खेत चुनें';

  @override
  String get chooseFarm => 'खेत चुनें...';

  @override
  String get chooseMilletType => 'मिलेट प्रकार चुनें...';

  @override
  String get descriptionOptional => 'विवरण (वैकल्पिक)';

  @override
  String get descriptionHint => 'इस लॉट के बारे में विशेष जानकारी जोड़ें...';

  @override
  String get submitLot => 'लॉट सबमिट करें';

  @override
  String get confirmSubmission => 'सबमिशन की पुष्टि';

  @override
  String get confirmSubmitMessage =>
      'क्या आप वाकई इस लॉट को गुणवत्ता निरीक्षण के लिए सबमिट करना चाहते हैं?';

  @override
  String get submit => 'सबमिट';

  @override
  String get pleaseSelectFarm => 'कृपया एक खेत चुनें';

  @override
  String get pleaseSelectMilletType => 'कृपया मिलेट प्रकार चुनें';

  @override
  String get pleaseEnterQuantity => 'कृपया अनुमानित मात्रा दर्ज करें';

  @override
  String get enterValidQuantity => 'एक मान्य मात्रा दर्ज करें';

  @override
  String get pleaseSelectHarvestDate => 'कृपया फसल तारीख चुनें';

  @override
  String get lotSubmittedSuccessfully => 'लॉट सफलतापूर्वक सबमिट हो गया';

  @override
  String get milletPearl => 'बाजरा (Bajra)';

  @override
  String get milletFinger => 'रागी (Finger Millet)';

  @override
  String get milletFoxtail => 'कंगनी (Foxtail Millet)';

  @override
  String get milletSorghum => 'ज्वार (Jowar)';

  @override
  String get milletBarnyard => 'सावाँ (Sanwa)';

  @override
  String get milletBrowntop => 'Browntop मिलेट (Korralu)';

  @override
  String get milletKodo => 'कोदो (Varagu)';

  @override
  String get milletLittle => 'कुटकी (Little Millet)';

  @override
  String get milletProso => 'चीना (Proso Millet)';

  @override
  String get farmManagement => 'खेत प्रबंधन';

  @override
  String get noFarmsFound => 'कोई खेत नहीं मिला';

  @override
  String get addFirstFarm => 'शुरू करने के लिए अपना पहला खेत जोड़ें।';

  @override
  String get addFarm => 'खेत जोड़ें';

  @override
  String get addFarmTitle => 'खेत जोड़ें';

  @override
  String get viewFarm => 'खेत देखें';

  @override
  String get manage => 'प्रबंधित करें';

  @override
  String get area => 'क्षेत्रफल';

  @override
  String get soilType => 'मिट्टी प्रकार';

  @override
  String areaAcres(String area) {
    return '$area एकड़';
  }

  @override
  String get failedToLoadFarms => 'खेत लोड करने में विफल';

  @override
  String get retry => 'पुनः प्रयास';

  @override
  String get farmSettings => 'खेत सेटिंग';

  @override
  String viewLotsFor(String farmName) {
    return '$farmName के लॉट देखें';
  }

  @override
  String get viewAllLots => 'सभी लॉट और उनका विवरण देखें';

  @override
  String get requestInspection => 'निरीक्षण अनुरोध';

  @override
  String get scheduleAgronomist => 'कृषि विशेषज्ञ की यात्रा निर्धारित करें';

  @override
  String get deleteFarm => 'खेत हटाएं';

  @override
  String get removeFromDashboard => 'डैशबोर्ड से स्थायी रूप से हटाएं';

  @override
  String get archiveFarm => 'खेत संग्रहीत करें';

  @override
  String get archiveFarmSubtitle => 'सक्रिय डैशबोर्ड से हटाएं';

  @override
  String get archiveFarmTitle => 'खेत संग्रहीत करें?';

  @override
  String archiveFarmConfirm(String farmName) {
    return 'क्या आप वाकई $farmName को संग्रहीत करना चाहते हैं?';
  }

  @override
  String get archive => 'संग्रहित करें';

  @override
  String get save => 'सहेजें';

  @override
  String get farmName => 'खेत का नाम';

  @override
  String get welcomeTitle => 'श्रीअन्न';

  @override
  String get welcomeSubtitle => 'स्वागत है, किसान मित्र';

  @override
  String get login => 'लॉगिन';

  @override
  String get newRegistration => 'नया पंजीकरण';

  @override
  String get welcomeBack => 'वापस स्वागत है';

  @override
  String get enterMobileNumberHint => '10 अंकों का नंबर दर्ज करें';

  @override
  String get enterMobileSubtitle =>
      'जारी रखने के लिए अपना मोबाइल नंबर दर्ज करें।';

  @override
  String get sendOtp => 'OTP भेजें';

  @override
  String get askFpoToRegister => 'FPO से पंजीकरण कराएं।';

  @override
  String get dontHaveAccount => 'खाता नहीं है?';

  @override
  String get invalidMobileNumber =>
      'कृपया एक मान्य 10-अंकीय मोबाइल नंबर दर्ज करें';

  @override
  String get enterOtp => 'OTP दर्ज करें';

  @override
  String otpSentTo(String phone) {
    return '$phone पर 6 अंकों का OTP भेजा गया है';
  }

  @override
  String get verifyOtp => 'OTP सत्यापित करें';

  @override
  String get resendOtp => 'OTP फिर भेजें';

  @override
  String get didNotReceiveOtp => 'OTP नहीं मिला?';

  @override
  String get pleaseEnterCompleteOtp => 'कृपया पूरा 6 अंकों का OTP दर्ज करें';

  @override
  String get otpSentAgain => 'OTP फिर से भेजा गया';

  @override
  String get loginSuccessful => 'लॉगिन सफल';

  @override
  String get unableToLoadProfile => 'प्रोफ़ाइल लोड करने में असमर्थ';

  @override
  String get acceptAgreement => 'अनुबंध स्वीकार करें';

  @override
  String get rejectAgreement => 'अनुबंध अस्वीकार करें';

  @override
  String get callHelpline => 'हेल्पलाइन पर कॉल करें';

  @override
  String get emailSupport => 'ईमेल सहायता';

  @override
  String get frequentlyAskedQuestions => 'अक्सर पूछे जाने वाले प्रश्न';

  @override
  String get workingHours => 'सोम - शनि (सुबह 9:00 - शाम 6:00)';

  @override
  String get supportDescription =>
      'अपने खेत, बाजरा लॉट या भुगतान में मदद चाहिए? अपने FPO से संपर्क करें।';
}
