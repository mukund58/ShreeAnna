class ApiConfig {
  static const String baseUrl = 'http://10.0.2.2:5066';

  static const String sendFarmerOtp = '$baseUrl/api/auth/farmer/send-otp';

  static const String verifyFarmerOtp = '$baseUrl/api/auth/farmer/verify-otp';

  // Farmer
  static const String farmerMe = '$baseUrl/api/farmers/me';

  // Farms
  static String farmerFarms(String farmerId) => '$baseUrl/api/farmers/$farmerId/farms';

  static String farmById(String farmId) => '$baseUrl/api/farms/$farmId';

  static String verifyFarm(String farmId) => '$baseUrl/api/farms/$farmId/verify';
}
