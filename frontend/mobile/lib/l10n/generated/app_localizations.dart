import 'dart:async';

import 'package:flutter/foundation.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:intl/intl.dart' as intl;

import 'app_localizations_en.dart';
import 'app_localizations_gu.dart';
import 'app_localizations_hi.dart';

// ignore_for_file: type=lint

/// Callers can lookup localized strings with an instance of AppLocalizations
/// returned by `AppLocalizations.of(context)`.
///
/// Applications need to include `AppLocalizations.delegate()` in their app's
/// `localizationDelegates` list, and the locales they support in the app's
/// `supportedLocales` list. For example:
///
/// ```dart
/// import 'generated/app_localizations.dart';
///
/// return MaterialApp(
///   localizationsDelegates: AppLocalizations.localizationsDelegates,
///   supportedLocales: AppLocalizations.supportedLocales,
///   home: MyApplicationHome(),
/// );
/// ```
///
/// ## Update pubspec.yaml
///
/// Please make sure to update your pubspec.yaml to include the following
/// packages:
///
/// ```yaml
/// dependencies:
///   # Internationalization support.
///   flutter_localizations:
///     sdk: flutter
///   intl: any # Use the pinned version from flutter_localizations
///
///   # Rest of dependencies
/// ```
///
/// ## iOS Applications
///
/// iOS applications define key application metadata, including supported
/// locales, in an Info.plist file that is built into the application bundle.
/// To configure the locales supported by your app, you’ll need to edit this
/// file.
///
/// First, open your project’s ios/Runner.xcworkspace Xcode workspace file.
/// Then, in the Project Navigator, open the Info.plist file under the Runner
/// project’s Runner folder.
///
/// Next, select the Information Property List item, select Add Item from the
/// Editor menu, then select Localizations from the pop-up menu.
///
/// Select and expand the newly-created Localizations item then, for each
/// locale your application supports, add a new item and select the locale
/// you wish to add from the pop-up menu in the Value field. This list should
/// be consistent with the languages listed in the AppLocalizations.supportedLocales
/// property.
abstract class AppLocalizations {
  AppLocalizations(String locale)
    : localeName = intl.Intl.canonicalizedLocale(locale.toString());

  final String localeName;

  static AppLocalizations? of(BuildContext context) {
    return Localizations.of<AppLocalizations>(context, AppLocalizations);
  }

  static const LocalizationsDelegate<AppLocalizations> delegate =
      _AppLocalizationsDelegate();

  /// A list of this localizations delegate along with the default localizations
  /// delegates.
  ///
  /// Returns a list of localizations delegates containing this delegate along with
  /// GlobalMaterialLocalizations.delegate, GlobalCupertinoLocalizations.delegate,
  /// and GlobalWidgetsLocalizations.delegate.
  ///
  /// Additional delegates can be added by appending to this list in
  /// MaterialApp. This list does not have to be used at all if a custom list
  /// of delegates is preferred or required.
  static const List<LocalizationsDelegate<dynamic>> localizationsDelegates =
      <LocalizationsDelegate<dynamic>>[
        delegate,
        GlobalMaterialLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
      ];

  /// A list of this localizations delegate's supported locales.
  static const List<Locale> supportedLocales = <Locale>[
    Locale('en'),
    Locale('gu'),
    Locale('hi'),
  ];

  /// No description provided for @appName.
  ///
  /// In en, this message translates to:
  /// **'ShreeAnna'**
  String get appName;

  /// No description provided for @myProfile.
  ///
  /// In en, this message translates to:
  /// **'My Profile'**
  String get myProfile;

  /// No description provided for @managePersonalInformation.
  ///
  /// In en, this message translates to:
  /// **'Manage your personal information and account.'**
  String get managePersonalInformation;

  /// No description provided for @personalInformation.
  ///
  /// In en, this message translates to:
  /// **'Personal Information'**
  String get personalInformation;

  /// No description provided for @fullName.
  ///
  /// In en, this message translates to:
  /// **'Full Name'**
  String get fullName;

  /// No description provided for @mobileNumber.
  ///
  /// In en, this message translates to:
  /// **'Mobile Number'**
  String get mobileNumber;

  /// No description provided for @email.
  ///
  /// In en, this message translates to:
  /// **'Email'**
  String get email;

  /// No description provided for @address.
  ///
  /// In en, this message translates to:
  /// **'Address'**
  String get address;

  /// No description provided for @location.
  ///
  /// In en, this message translates to:
  /// **'Location'**
  String get location;

  /// No description provided for @district.
  ///
  /// In en, this message translates to:
  /// **'District'**
  String get district;

  /// No description provided for @taluka.
  ///
  /// In en, this message translates to:
  /// **'Taluka'**
  String get taluka;

  /// No description provided for @village.
  ///
  /// In en, this message translates to:
  /// **'Village'**
  String get village;

  /// No description provided for @farmInformation.
  ///
  /// In en, this message translates to:
  /// **'Farm Information'**
  String get farmInformation;

  /// No description provided for @registeredFarms.
  ///
  /// In en, this message translates to:
  /// **'Registered Farms'**
  String get registeredFarms;

  /// No description provided for @accountStatus.
  ///
  /// In en, this message translates to:
  /// **'Account Status'**
  String get accountStatus;

  /// No description provided for @memberSince.
  ///
  /// In en, this message translates to:
  /// **'Member Since'**
  String get memberSince;

  /// No description provided for @account.
  ///
  /// In en, this message translates to:
  /// **'Account'**
  String get account;

  /// No description provided for @changePassword.
  ///
  /// In en, this message translates to:
  /// **'Change Password'**
  String get changePassword;

  /// No description provided for @notifications.
  ///
  /// In en, this message translates to:
  /// **'Notifications'**
  String get notifications;

  /// No description provided for @language.
  ///
  /// In en, this message translates to:
  /// **'Language'**
  String get language;

  /// No description provided for @support.
  ///
  /// In en, this message translates to:
  /// **'Support'**
  String get support;

  /// No description provided for @helpSupport.
  ///
  /// In en, this message translates to:
  /// **'Help & Support'**
  String get helpSupport;

  /// No description provided for @termsConditions.
  ///
  /// In en, this message translates to:
  /// **'Terms & Conditions'**
  String get termsConditions;

  /// No description provided for @privacyPolicy.
  ///
  /// In en, this message translates to:
  /// **'Privacy Policy'**
  String get privacyPolicy;

  /// No description provided for @logout.
  ///
  /// In en, this message translates to:
  /// **'Logout'**
  String get logout;

  /// No description provided for @logoutConfirmation.
  ///
  /// In en, this message translates to:
  /// **'Are you sure you want to logout?'**
  String get logoutConfirmation;

  /// No description provided for @cancel.
  ///
  /// In en, this message translates to:
  /// **'Cancel'**
  String get cancel;

  /// No description provided for @english.
  ///
  /// In en, this message translates to:
  /// **'English'**
  String get english;

  /// No description provided for @gujarati.
  ///
  /// In en, this message translates to:
  /// **'Gujarati'**
  String get gujarati;

  /// No description provided for @hindi.
  ///
  /// In en, this message translates to:
  /// **'Hindi'**
  String get hindi;

  /// No description provided for @selectLanguage.
  ///
  /// In en, this message translates to:
  /// **'Select Language'**
  String get selectLanguage;

  /// No description provided for @languageChanged.
  ///
  /// In en, this message translates to:
  /// **'Language changed successfully.'**
  String get languageChanged;

  /// No description provided for @home.
  ///
  /// In en, this message translates to:
  /// **'Home'**
  String get home;

  /// No description provided for @myLots.
  ///
  /// In en, this message translates to:
  /// **'My Lots'**
  String get myLots;

  /// No description provided for @farm.
  ///
  /// In en, this message translates to:
  /// **'Farm'**
  String get farm;

  /// No description provided for @profile.
  ///
  /// In en, this message translates to:
  /// **'Profile'**
  String get profile;

  /// No description provided for @helloFarmer.
  ///
  /// In en, this message translates to:
  /// **'Hello, {name}'**
  String helloFarmer(String name);

  /// No description provided for @currentFpo.
  ///
  /// In en, this message translates to:
  /// **'Current FPO: {fpo}'**
  String currentFpo(String fpo);

  /// No description provided for @activeLots.
  ///
  /// In en, this message translates to:
  /// **'Active Lots'**
  String get activeLots;

  /// No description provided for @lotsCount.
  ///
  /// In en, this message translates to:
  /// **'{count} Lots'**
  String lotsCount(int count);

  /// No description provided for @pendingAction.
  ///
  /// In en, this message translates to:
  /// **'{count} Pending Action'**
  String pendingAction(int count);

  /// No description provided for @recentLotStatus.
  ///
  /// In en, this message translates to:
  /// **'Recent Lot Status'**
  String get recentLotStatus;

  /// No description provided for @sellMillet.
  ///
  /// In en, this message translates to:
  /// **'Sell Millet'**
  String get sellMillet;

  /// No description provided for @manageFarms.
  ///
  /// In en, this message translates to:
  /// **'Manage Farms'**
  String get manageFarms;

  /// No description provided for @viewDetails.
  ///
  /// In en, this message translates to:
  /// **'View Details'**
  String get viewDetails;

  /// No description provided for @submitted.
  ///
  /// In en, this message translates to:
  /// **'Submitted'**
  String get submitted;

  /// No description provided for @submittedDate.
  ///
  /// In en, this message translates to:
  /// **'Submitted: {date}'**
  String submittedDate(String date);

  /// No description provided for @manageAndTrackLots.
  ///
  /// In en, this message translates to:
  /// **'Manage and track your submitted harvest lots.'**
  String get manageAndTrackLots;

  /// No description provided for @submitNewLot.
  ///
  /// In en, this message translates to:
  /// **'Submit New Lot'**
  String get submitNewLot;

  /// No description provided for @estimatedQuantity.
  ///
  /// In en, this message translates to:
  /// **'Estimated Quantity'**
  String get estimatedQuantity;

  /// No description provided for @submissionDate.
  ///
  /// In en, this message translates to:
  /// **'Submission Date'**
  String get submissionDate;

  /// No description provided for @statusSubmitted.
  ///
  /// In en, this message translates to:
  /// **'Submitted'**
  String get statusSubmitted;

  /// No description provided for @statusInspectionInProgress.
  ///
  /// In en, this message translates to:
  /// **'Inspection in Progress'**
  String get statusInspectionInProgress;

  /// No description provided for @statusCertified.
  ///
  /// In en, this message translates to:
  /// **'Certified'**
  String get statusCertified;

  /// No description provided for @statusAgreementAwaiting.
  ///
  /// In en, this message translates to:
  /// **'Agreement Awaiting Approval'**
  String get statusAgreementAwaiting;

  /// No description provided for @statusPickupScheduled.
  ///
  /// In en, this message translates to:
  /// **'Pickup Scheduled'**
  String get statusPickupScheduled;

  /// No description provided for @statusPaymentCompleted.
  ///
  /// In en, this message translates to:
  /// **'Payment Completed'**
  String get statusPaymentCompleted;

  /// No description provided for @statusInspectionCompleted.
  ///
  /// In en, this message translates to:
  /// **'Inspection Completed'**
  String get statusInspectionCompleted;

  /// No description provided for @statusPaymentProcessing.
  ///
  /// In en, this message translates to:
  /// **'Payment Processing'**
  String get statusPaymentProcessing;

  /// No description provided for @lotPrefix.
  ///
  /// In en, this message translates to:
  /// **'LOT #'**
  String get lotPrefix;

  /// No description provided for @lotDetails.
  ///
  /// In en, this message translates to:
  /// **'Lot Details'**
  String get lotDetails;

  /// No description provided for @procurementJourney.
  ///
  /// In en, this message translates to:
  /// **'Procurement Journey'**
  String get procurementJourney;

  /// No description provided for @harvestDetails.
  ///
  /// In en, this message translates to:
  /// **'Harvest Details'**
  String get harvestDetails;

  /// No description provided for @milletType.
  ///
  /// In en, this message translates to:
  /// **'Millet Type'**
  String get milletType;

  /// No description provided for @harvestDate.
  ///
  /// In en, this message translates to:
  /// **'Harvest Date'**
  String get harvestDate;

  /// No description provided for @farmLabel.
  ///
  /// In en, this message translates to:
  /// **'Farm'**
  String get farmLabel;

  /// No description provided for @fpo.
  ///
  /// In en, this message translates to:
  /// **'FPO'**
  String get fpo;

  /// No description provided for @quantity.
  ///
  /// In en, this message translates to:
  /// **'Quantity'**
  String get quantity;

  /// No description provided for @quantityKg.
  ///
  /// In en, this message translates to:
  /// **'Estimated Quantity (kg)'**
  String get quantityKg;

  /// No description provided for @fpoUpdateNote.
  ///
  /// In en, this message translates to:
  /// **'Your FPO will update the lot status as it moves through the procurement process.'**
  String get fpoUpdateNote;

  /// No description provided for @lotSubmitted.
  ///
  /// In en, this message translates to:
  /// **'Lot Submitted'**
  String get lotSubmitted;

  /// No description provided for @lotSubmittedSubtitle.
  ///
  /// In en, this message translates to:
  /// **'Your lot has been submitted to the FPO.'**
  String get lotSubmittedSubtitle;

  /// No description provided for @qualityInspection.
  ///
  /// In en, this message translates to:
  /// **'Quality Inspection'**
  String get qualityInspection;

  /// No description provided for @qualityInspectionSubtitle.
  ///
  /// In en, this message translates to:
  /// **'Quality inspection is currently in progress.'**
  String get qualityInspectionSubtitle;

  /// No description provided for @qualityCertificate.
  ///
  /// In en, this message translates to:
  /// **'Quality Certificate'**
  String get qualityCertificate;

  /// No description provided for @qualityCertificateSubtitle.
  ///
  /// In en, this message translates to:
  /// **'Certificate will be issued after inspection.'**
  String get qualityCertificateSubtitle;

  /// No description provided for @procurementAgreement.
  ///
  /// In en, this message translates to:
  /// **'Procurement Agreement'**
  String get procurementAgreement;

  /// No description provided for @procurementAgreementSubtitle.
  ///
  /// In en, this message translates to:
  /// **'Agreement will be created after approval.'**
  String get procurementAgreementSubtitle;

  /// No description provided for @pickupDelivery.
  ///
  /// In en, this message translates to:
  /// **'Pickup / Delivery'**
  String get pickupDelivery;

  /// No description provided for @pickupDeliverySubtitle.
  ///
  /// In en, this message translates to:
  /// **'Pickup schedule will appear here.'**
  String get pickupDeliverySubtitle;

  /// No description provided for @warehouseReceipt.
  ///
  /// In en, this message translates to:
  /// **'Warehouse Receipt'**
  String get warehouseReceipt;

  /// No description provided for @warehouseReceiptSubtitle.
  ///
  /// In en, this message translates to:
  /// **'Warehouse receipt will be recorded here.'**
  String get warehouseReceiptSubtitle;

  /// No description provided for @payment.
  ///
  /// In en, this message translates to:
  /// **'Payment'**
  String get payment;

  /// No description provided for @paymentSubtitle.
  ///
  /// In en, this message translates to:
  /// **'Payment status will appear here.'**
  String get paymentSubtitle;

  /// No description provided for @viewResults.
  ///
  /// In en, this message translates to:
  /// **'View Results'**
  String get viewResults;

  /// No description provided for @viewCertificate.
  ///
  /// In en, this message translates to:
  /// **'View Certificate'**
  String get viewCertificate;

  /// No description provided for @viewAgreement.
  ///
  /// In en, this message translates to:
  /// **'View Agreement'**
  String get viewAgreement;

  /// No description provided for @trackDetails.
  ///
  /// In en, this message translates to:
  /// **'Track Details'**
  String get trackDetails;

  /// No description provided for @viewReceipt.
  ///
  /// In en, this message translates to:
  /// **'View Receipt'**
  String get viewReceipt;

  /// No description provided for @viewPayment.
  ///
  /// In en, this message translates to:
  /// **'View Payment'**
  String get viewPayment;

  /// No description provided for @sellMilletTitle.
  ///
  /// In en, this message translates to:
  /// **'Sell Millet'**
  String get sellMilletTitle;

  /// No description provided for @sellMilletSubtitle.
  ///
  /// In en, this message translates to:
  /// **'This information will be submitted to your FPO for quality inspection.'**
  String get sellMilletSubtitle;

  /// No description provided for @selectFarm.
  ///
  /// In en, this message translates to:
  /// **'Select Farm'**
  String get selectFarm;

  /// No description provided for @chooseFarm.
  ///
  /// In en, this message translates to:
  /// **'Choose a farm...'**
  String get chooseFarm;

  /// No description provided for @chooseMilletType.
  ///
  /// In en, this message translates to:
  /// **'Choose millet type...'**
  String get chooseMilletType;

  /// No description provided for @descriptionOptional.
  ///
  /// In en, this message translates to:
  /// **'Description (Optional)'**
  String get descriptionOptional;

  /// No description provided for @descriptionHint.
  ///
  /// In en, this message translates to:
  /// **'Add any specific details about this lot...'**
  String get descriptionHint;

  /// No description provided for @submitLot.
  ///
  /// In en, this message translates to:
  /// **'SUBMIT LOT'**
  String get submitLot;

  /// No description provided for @confirmSubmission.
  ///
  /// In en, this message translates to:
  /// **'Confirm Submission'**
  String get confirmSubmission;

  /// No description provided for @confirmSubmitMessage.
  ///
  /// In en, this message translates to:
  /// **'Are you sure you want to submit this lot for quality inspection?'**
  String get confirmSubmitMessage;

  /// No description provided for @submit.
  ///
  /// In en, this message translates to:
  /// **'Submit'**
  String get submit;

  /// No description provided for @pleaseSelectFarm.
  ///
  /// In en, this message translates to:
  /// **'Please select a farm'**
  String get pleaseSelectFarm;

  /// No description provided for @pleaseSelectMilletType.
  ///
  /// In en, this message translates to:
  /// **'Please select millet type'**
  String get pleaseSelectMilletType;

  /// No description provided for @pleaseEnterQuantity.
  ///
  /// In en, this message translates to:
  /// **'Please enter estimated quantity'**
  String get pleaseEnterQuantity;

  /// No description provided for @enterValidQuantity.
  ///
  /// In en, this message translates to:
  /// **'Enter a valid quantity'**
  String get enterValidQuantity;

  /// No description provided for @pleaseSelectHarvestDate.
  ///
  /// In en, this message translates to:
  /// **'Please select the harvest date'**
  String get pleaseSelectHarvestDate;

  /// No description provided for @lotSubmittedSuccessfully.
  ///
  /// In en, this message translates to:
  /// **'Lot submitted successfully'**
  String get lotSubmittedSuccessfully;

  /// No description provided for @milletPearl.
  ///
  /// In en, this message translates to:
  /// **'Pearl Millet (Bajra)'**
  String get milletPearl;

  /// No description provided for @milletFinger.
  ///
  /// In en, this message translates to:
  /// **'Finger Millet (Ragi)'**
  String get milletFinger;

  /// No description provided for @milletFoxtail.
  ///
  /// In en, this message translates to:
  /// **'Foxtail Millet'**
  String get milletFoxtail;

  /// No description provided for @milletSorghum.
  ///
  /// In en, this message translates to:
  /// **'Sorghum (Jowar)'**
  String get milletSorghum;

  /// No description provided for @milletBarnyard.
  ///
  /// In en, this message translates to:
  /// **'Barnyard Millet (Sanwa)'**
  String get milletBarnyard;

  /// No description provided for @milletBrowntop.
  ///
  /// In en, this message translates to:
  /// **'Browntop Millet (Korralu)'**
  String get milletBrowntop;

  /// No description provided for @milletKodo.
  ///
  /// In en, this message translates to:
  /// **'Kodo Millet (Varagu)'**
  String get milletKodo;

  /// No description provided for @milletLittle.
  ///
  /// In en, this message translates to:
  /// **'Little Millet (Kutki)'**
  String get milletLittle;

  /// No description provided for @milletProso.
  ///
  /// In en, this message translates to:
  /// **'Proso Millet (Chena)'**
  String get milletProso;

  /// No description provided for @farmManagement.
  ///
  /// In en, this message translates to:
  /// **'Farm Management'**
  String get farmManagement;

  /// No description provided for @noFarmsFound.
  ///
  /// In en, this message translates to:
  /// **'No farms found'**
  String get noFarmsFound;

  /// No description provided for @addFirstFarm.
  ///
  /// In en, this message translates to:
  /// **'Add your first farm to get started.'**
  String get addFirstFarm;

  /// No description provided for @addFarm.
  ///
  /// In en, this message translates to:
  /// **'ADD FARM'**
  String get addFarm;

  /// No description provided for @addFarmTitle.
  ///
  /// In en, this message translates to:
  /// **'Add Farm'**
  String get addFarmTitle;

  /// No description provided for @viewFarm.
  ///
  /// In en, this message translates to:
  /// **'VIEW FARM'**
  String get viewFarm;

  /// No description provided for @manage.
  ///
  /// In en, this message translates to:
  /// **'MANAGE'**
  String get manage;

  /// No description provided for @area.
  ///
  /// In en, this message translates to:
  /// **'AREA'**
  String get area;

  /// No description provided for @soilType.
  ///
  /// In en, this message translates to:
  /// **'SOIL TYPE'**
  String get soilType;

  /// No description provided for @areaAcres.
  ///
  /// In en, this message translates to:
  /// **'{area} Acres'**
  String areaAcres(String area);

  /// No description provided for @failedToLoadFarms.
  ///
  /// In en, this message translates to:
  /// **'Failed to load farms'**
  String get failedToLoadFarms;

  /// No description provided for @retry.
  ///
  /// In en, this message translates to:
  /// **'RETRY'**
  String get retry;

  /// No description provided for @farmSettings.
  ///
  /// In en, this message translates to:
  /// **'Farm Settings'**
  String get farmSettings;

  /// No description provided for @viewLotsFor.
  ///
  /// In en, this message translates to:
  /// **'View Lots for {farmName}'**
  String viewLotsFor(String farmName);

  /// No description provided for @viewAllLots.
  ///
  /// In en, this message translates to:
  /// **'View all lots and their details'**
  String get viewAllLots;

  /// No description provided for @requestInspection.
  ///
  /// In en, this message translates to:
  /// **'Request Inspection'**
  String get requestInspection;

  /// No description provided for @scheduleAgronomist.
  ///
  /// In en, this message translates to:
  /// **'Schedule an agronomist visit'**
  String get scheduleAgronomist;

  /// No description provided for @deleteFarm.
  ///
  /// In en, this message translates to:
  /// **'Delete Farm'**
  String get deleteFarm;

  /// No description provided for @removeFromDashboard.
  ///
  /// In en, this message translates to:
  /// **'Remove from dashboard permanently'**
  String get removeFromDashboard;

  /// No description provided for @archiveFarm.
  ///
  /// In en, this message translates to:
  /// **'Archive Farm'**
  String get archiveFarm;

  /// No description provided for @archiveFarmSubtitle.
  ///
  /// In en, this message translates to:
  /// **'Remove from active dashboard'**
  String get archiveFarmSubtitle;

  /// No description provided for @archiveFarmTitle.
  ///
  /// In en, this message translates to:
  /// **'Archive Farm?'**
  String get archiveFarmTitle;

  /// No description provided for @archiveFarmConfirm.
  ///
  /// In en, this message translates to:
  /// **'Are you sure you want to archive {farmName}?'**
  String archiveFarmConfirm(String farmName);

  /// No description provided for @archive.
  ///
  /// In en, this message translates to:
  /// **'Archive'**
  String get archive;

  /// No description provided for @save.
  ///
  /// In en, this message translates to:
  /// **'Save'**
  String get save;

  /// No description provided for @farmName.
  ///
  /// In en, this message translates to:
  /// **'Farm Name'**
  String get farmName;

  /// No description provided for @welcomeTitle.
  ///
  /// In en, this message translates to:
  /// **'ShreeAnna'**
  String get welcomeTitle;

  /// No description provided for @welcomeSubtitle.
  ///
  /// In en, this message translates to:
  /// **'Welcome, Farmer Friend'**
  String get welcomeSubtitle;

  /// No description provided for @login.
  ///
  /// In en, this message translates to:
  /// **'Login'**
  String get login;

  /// No description provided for @newRegistration.
  ///
  /// In en, this message translates to:
  /// **'New Registration'**
  String get newRegistration;

  /// No description provided for @welcomeBack.
  ///
  /// In en, this message translates to:
  /// **'Welcome Back'**
  String get welcomeBack;

  /// No description provided for @enterMobileNumberHint.
  ///
  /// In en, this message translates to:
  /// **'Enter your 10 digit number'**
  String get enterMobileNumberHint;

  /// No description provided for @enterMobileSubtitle.
  ///
  /// In en, this message translates to:
  /// **'Enter your mobile number to continue.'**
  String get enterMobileSubtitle;

  /// No description provided for @sendOtp.
  ///
  /// In en, this message translates to:
  /// **'Send OTP'**
  String get sendOtp;

  /// No description provided for @askFpoToRegister.
  ///
  /// In en, this message translates to:
  /// **'Ask your FPO to register you.'**
  String get askFpoToRegister;

  /// No description provided for @dontHaveAccount.
  ///
  /// In en, this message translates to:
  /// **'Don\'t have an account?'**
  String get dontHaveAccount;

  /// No description provided for @invalidMobileNumber.
  ///
  /// In en, this message translates to:
  /// **'Please enter a valid 10-digit mobile number'**
  String get invalidMobileNumber;

  /// No description provided for @enterOtp.
  ///
  /// In en, this message translates to:
  /// **'Enter OTP'**
  String get enterOtp;

  /// No description provided for @otpSentTo.
  ///
  /// In en, this message translates to:
  /// **'A 6-digit OTP has been sent to {phone}'**
  String otpSentTo(String phone);

  /// No description provided for @verifyOtp.
  ///
  /// In en, this message translates to:
  /// **'VERIFY OTP'**
  String get verifyOtp;

  /// No description provided for @resendOtp.
  ///
  /// In en, this message translates to:
  /// **'Resend OTP'**
  String get resendOtp;

  /// No description provided for @didNotReceiveOtp.
  ///
  /// In en, this message translates to:
  /// **'Didn\'t receive the OTP?'**
  String get didNotReceiveOtp;

  /// No description provided for @pleaseEnterCompleteOtp.
  ///
  /// In en, this message translates to:
  /// **'Please enter the complete 6-digit OTP'**
  String get pleaseEnterCompleteOtp;

  /// No description provided for @otpSentAgain.
  ///
  /// In en, this message translates to:
  /// **'OTP sent again'**
  String get otpSentAgain;

  /// No description provided for @loginSuccessful.
  ///
  /// In en, this message translates to:
  /// **'Login successful'**
  String get loginSuccessful;

  /// No description provided for @unableToLoadProfile.
  ///
  /// In en, this message translates to:
  /// **'Unable to load profile'**
  String get unableToLoadProfile;

  /// No description provided for @acceptAgreement.
  ///
  /// In en, this message translates to:
  /// **'ACCEPT AGREEMENT'**
  String get acceptAgreement;

  /// No description provided for @rejectAgreement.
  ///
  /// In en, this message translates to:
  /// **'REJECT AGREEMENT'**
  String get rejectAgreement;

  /// No description provided for @callHelpline.
  ///
  /// In en, this message translates to:
  /// **'Call Helpline'**
  String get callHelpline;

  /// No description provided for @emailSupport.
  ///
  /// In en, this message translates to:
  /// **'Email Support'**
  String get emailSupport;

  /// No description provided for @frequentlyAskedQuestions.
  ///
  /// In en, this message translates to:
  /// **'Frequently Asked Questions'**
  String get frequentlyAskedQuestions;

  /// No description provided for @workingHours.
  ///
  /// In en, this message translates to:
  /// **'Mon - Sat (9:00 AM - 6:00 PM)'**
  String get workingHours;

  /// No description provided for @supportDescription.
  ///
  /// In en, this message translates to:
  /// **'Need help with your farm, millet lots, or payments? Contact your FPO or reach out to us.'**
  String get supportDescription;
}

class _AppLocalizationsDelegate
    extends LocalizationsDelegate<AppLocalizations> {
  const _AppLocalizationsDelegate();

  @override
  Future<AppLocalizations> load(Locale locale) {
    return SynchronousFuture<AppLocalizations>(lookupAppLocalizations(locale));
  }

  @override
  bool isSupported(Locale locale) =>
      <String>['en', 'gu', 'hi'].contains(locale.languageCode);

  @override
  bool shouldReload(_AppLocalizationsDelegate old) => false;
}

AppLocalizations lookupAppLocalizations(Locale locale) {
  // Lookup logic when only language code is specified.
  switch (locale.languageCode) {
    case 'en':
      return AppLocalizationsEn();
    case 'gu':
      return AppLocalizationsGu();
    case 'hi':
      return AppLocalizationsHi();
  }

  throw FlutterError(
    'AppLocalizations.delegate failed to load unsupported locale "$locale". This is likely '
    'an issue with the localizations generation tool. Please file an issue '
    'on GitHub with a reproducible sample app and the gen-l10n configuration '
    'that was used.',
  );
}
