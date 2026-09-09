// ignore: unused_import
import 'package:intl/intl.dart' as intl;

import 'app_localizations.dart';

// ignore_for_file: type=lint

/// The translations for English (`en`).
class AppLocalizationsEn extends AppLocalizations {
  AppLocalizationsEn([String locale = 'en']) : super(locale);

  @override
  String get appName => 'ShreeAnna';

  @override
  String get myProfile => 'My Profile';

  @override
  String get managePersonalInformation =>
      'Manage your personal information and account.';

  @override
  String get personalInformation => 'Personal Information';

  @override
  String get fullName => 'Full Name';

  @override
  String get mobileNumber => 'Mobile Number';

  @override
  String get email => 'Email';

  @override
  String get address => 'Address';

  @override
  String get location => 'Location';

  @override
  String get district => 'District';

  @override
  String get taluka => 'Taluka';

  @override
  String get village => 'Village';

  @override
  String get farmInformation => 'Farm Information';

  @override
  String get registeredFarms => 'Registered Farms';

  @override
  String get accountStatus => 'Account Status';

  @override
  String get memberSince => 'Member Since';

  @override
  String get account => 'Account';

  @override
  String get changePassword => 'Change Password';

  @override
  String get notifications => 'Notifications';

  @override
  String get language => 'Language';

  @override
  String get support => 'Support';

  @override
  String get helpSupport => 'Help & Support';

  @override
  String get termsConditions => 'Terms & Conditions';

  @override
  String get privacyPolicy => 'Privacy Policy';

  @override
  String get logout => 'Logout';

  @override
  String get logoutConfirmation => 'Are you sure you want to logout?';

  @override
  String get cancel => 'Cancel';

  @override
  String get english => 'English';

  @override
  String get gujarati => 'Gujarati';

  @override
  String get hindi => 'Hindi';

  @override
  String get selectLanguage => 'Select Language';

  @override
  String get languageChanged => 'Language changed successfully.';

  @override
  String get home => 'Home';

  @override
  String get myLots => 'My Lots';

  @override
  String get farm => 'Farm';

  @override
  String get profile => 'Profile';

  @override
  String helloFarmer(String name) {
    return 'Hello, $name';
  }

  @override
  String currentFpo(String fpo) {
    return 'Current FPO: $fpo';
  }

  @override
  String get activeLots => 'Active Lots';

  @override
  String lotsCount(int count) {
    return '$count Lots';
  }

  @override
  String pendingAction(int count) {
    return '$count Pending Action';
  }

  @override
  String get recentLotStatus => 'Recent Lot Status';

  @override
  String get sellMillet => 'Sell Millet';

  @override
  String get manageFarms => 'Manage Farms';

  @override
  String get viewDetails => 'View Details';

  @override
  String get submitted => 'Submitted';

  @override
  String submittedDate(String date) {
    return 'Submitted: $date';
  }

  @override
  String get manageAndTrackLots =>
      'Manage and track your submitted harvest lots.';

  @override
  String get submitNewLot => 'Submit New Lot';

  @override
  String get estimatedQuantity => 'Estimated Quantity';

  @override
  String get submissionDate => 'Submission Date';

  @override
  String get statusSubmitted => 'Submitted';

  @override
  String get statusInspectionInProgress => 'Inspection in Progress';

  @override
  String get statusCertified => 'Certified';

  @override
  String get statusAgreementAwaiting => 'Agreement Awaiting Approval';

  @override
  String get statusPickupScheduled => 'Pickup Scheduled';

  @override
  String get statusPaymentCompleted => 'Payment Completed';

  @override
  String get statusInspectionCompleted => 'Inspection Completed';

  @override
  String get statusPaymentProcessing => 'Payment Processing';

  @override
  String get lotPrefix => 'LOT #';

  @override
  String get lotDetails => 'Lot Details';

  @override
  String get procurementJourney => 'Procurement Journey';

  @override
  String get harvestDetails => 'Harvest Details';

  @override
  String get milletType => 'Millet Type';

  @override
  String get harvestDate => 'Harvest Date';

  @override
  String get farmLabel => 'Farm';

  @override
  String get fpo => 'FPO';

  @override
  String get quantity => 'Quantity';

  @override
  String get quantityKg => 'Estimated Quantity (kg)';

  @override
  String get fpoUpdateNote =>
      'Your FPO will update the lot status as it moves through the procurement process.';

  @override
  String get lotSubmitted => 'Lot Submitted';

  @override
  String get lotSubmittedSubtitle => 'Your lot has been submitted to the FPO.';

  @override
  String get qualityInspection => 'Quality Inspection';

  @override
  String get qualityInspectionSubtitle =>
      'Quality inspection is currently in progress.';

  @override
  String get qualityCertificate => 'Quality Certificate';

  @override
  String get qualityCertificateSubtitle =>
      'Certificate will be issued after inspection.';

  @override
  String get procurementAgreement => 'Procurement Agreement';

  @override
  String get procurementAgreementSubtitle =>
      'Agreement will be created after approval.';

  @override
  String get pickupDelivery => 'Pickup / Delivery';

  @override
  String get pickupDeliverySubtitle => 'Pickup schedule will appear here.';

  @override
  String get warehouseReceipt => 'Warehouse Receipt';

  @override
  String get warehouseReceiptSubtitle =>
      'Warehouse receipt will be recorded here.';

  @override
  String get payment => 'Payment';

  @override
  String get paymentSubtitle => 'Payment status will appear here.';

  @override
  String get viewResults => 'View Results';

  @override
  String get viewCertificate => 'View Certificate';

  @override
  String get viewAgreement => 'View Agreement';

  @override
  String get trackDetails => 'Track Details';

  @override
  String get viewReceipt => 'View Receipt';

  @override
  String get viewPayment => 'View Payment';

  @override
  String get sellMilletTitle => 'Sell Millet';

  @override
  String get sellMilletSubtitle =>
      'This information will be submitted to your FPO for quality inspection.';

  @override
  String get selectFarm => 'Select Farm';

  @override
  String get chooseFarm => 'Choose a farm...';

  @override
  String get chooseMilletType => 'Choose millet type...';

  @override
  String get descriptionOptional => 'Description (Optional)';

  @override
  String get descriptionHint => 'Add any specific details about this lot...';

  @override
  String get submitLot => 'SUBMIT LOT';

  @override
  String get confirmSubmission => 'Confirm Submission';

  @override
  String get confirmSubmitMessage =>
      'Are you sure you want to submit this lot for quality inspection?';

  @override
  String get submit => 'Submit';

  @override
  String get pleaseSelectFarm => 'Please select a farm';

  @override
  String get pleaseSelectMilletType => 'Please select millet type';

  @override
  String get pleaseEnterQuantity => 'Please enter estimated quantity';

  @override
  String get enterValidQuantity => 'Enter a valid quantity';

  @override
  String get pleaseSelectHarvestDate => 'Please select the harvest date';

  @override
  String get lotSubmittedSuccessfully => 'Lot submitted successfully';

  @override
  String get milletPearl => 'Pearl Millet (Bajra)';

  @override
  String get milletFinger => 'Finger Millet (Ragi)';

  @override
  String get milletFoxtail => 'Foxtail Millet';

  @override
  String get milletSorghum => 'Sorghum (Jowar)';

  @override
  String get milletBarnyard => 'Barnyard Millet (Sanwa)';

  @override
  String get milletBrowntop => 'Browntop Millet (Korralu)';

  @override
  String get milletKodo => 'Kodo Millet (Varagu)';

  @override
  String get milletLittle => 'Little Millet (Kutki)';

  @override
  String get milletProso => 'Proso Millet (Chena)';

  @override
  String get farmManagement => 'Farm Management';

  @override
  String get noFarmsFound => 'No farms found';

  @override
  String get addFirstFarm => 'Add your first farm to get started.';

  @override
  String get addFarm => 'ADD FARM';

  @override
  String get addFarmTitle => 'Add Farm';

  @override
  String get viewFarm => 'VIEW FARM';

  @override
  String get manage => 'MANAGE';

  @override
  String get area => 'AREA';

  @override
  String get soilType => 'SOIL TYPE';

  @override
  String areaAcres(String area) {
    return '$area Acres';
  }

  @override
  String get failedToLoadFarms => 'Failed to load farms';

  @override
  String get retry => 'RETRY';

  @override
  String get farmSettings => 'Farm Settings';

  @override
  String viewLotsFor(String farmName) {
    return 'View Lots for $farmName';
  }

  @override
  String get viewAllLots => 'View all lots and their details';

  @override
  String get requestInspection => 'Request Inspection';

  @override
  String get scheduleAgronomist => 'Schedule an agronomist visit';

  @override
  String get deleteFarm => 'Delete Farm';

  @override
  String get removeFromDashboard => 'Remove from dashboard permanently';

  @override
  String get archiveFarm => 'Archive Farm';

  @override
  String get archiveFarmSubtitle => 'Remove from active dashboard';

  @override
  String get archiveFarmTitle => 'Archive Farm?';

  @override
  String archiveFarmConfirm(String farmName) {
    return 'Are you sure you want to archive $farmName?';
  }

  @override
  String get archive => 'Archive';

  @override
  String get save => 'Save';

  @override
  String get farmName => 'Farm Name';

  @override
  String get welcomeTitle => 'ShreeAnna';

  @override
  String get welcomeSubtitle => 'Welcome, Farmer Friend';

  @override
  String get login => 'Login';

  @override
  String get newRegistration => 'New Registration';

  @override
  String get welcomeBack => 'Welcome Back';

  @override
  String get enterMobileNumberHint => 'Enter your 10 digit number';

  @override
  String get enterMobileSubtitle => 'Enter your mobile number to continue.';

  @override
  String get sendOtp => 'Send OTP';

  @override
  String get askFpoToRegister => 'Ask your FPO to register you.';

  @override
  String get dontHaveAccount => 'Don\'t have an account?';

  @override
  String get invalidMobileNumber =>
      'Please enter a valid 10-digit mobile number';

  @override
  String get enterOtp => 'Enter OTP';

  @override
  String otpSentTo(String phone) {
    return 'A 6-digit OTP has been sent to $phone';
  }

  @override
  String get verifyOtp => 'VERIFY OTP';

  @override
  String get resendOtp => 'Resend OTP';

  @override
  String get didNotReceiveOtp => 'Didn\'t receive the OTP?';

  @override
  String get pleaseEnterCompleteOtp => 'Please enter the complete 6-digit OTP';

  @override
  String get otpSentAgain => 'OTP sent again';

  @override
  String get loginSuccessful => 'Login successful';

  @override
  String get unableToLoadProfile => 'Unable to load profile';

  @override
  String get acceptAgreement => 'ACCEPT AGREEMENT';

  @override
  String get rejectAgreement => 'REJECT AGREEMENT';

  @override
  String get callHelpline => 'Call Helpline';

  @override
  String get emailSupport => 'Email Support';

  @override
  String get frequentlyAskedQuestions => 'Frequently Asked Questions';

  @override
  String get workingHours => 'Mon - Sat (9:00 AM - 6:00 PM)';

  @override
  String get supportDescription =>
      'Need help with your farm, millet lots, or payments? Contact your FPO or reach out to us.';
}
