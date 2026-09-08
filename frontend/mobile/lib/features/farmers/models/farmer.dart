class Farmer {
  final String id;
  final String farmerCode;
  final String fullName;
  final String phone;
  final String email;
  final String address;
  final String district;
  final String taluka;
  final String village;
  final DateTime dateOfBirth;
  final String status;
  final DateTime createdAt;
  final int farmCount;

  const Farmer({
    required this.id,
    required this.farmerCode,
    required this.fullName,
    required this.phone,
    required this.email,
    required this.address,
    required this.district,
    required this.taluka,
    required this.village,
    required this.dateOfBirth,
    required this.status,
    required this.createdAt,
    required this.farmCount,
  });

  factory Farmer.fromJson(Map<String, dynamic> json) {
    return Farmer(
      id: json['id'],
      farmerCode: json['farmerCode'],
      fullName: json['fullName'],
      phone: json['phone'],
      email: json['email'] ?? '',
      address: json['address'],
      district: json['district'],
      taluka: json['taluka'],
      village: json['village'],
      dateOfBirth: DateTime.parse(json['dateOfBirth']),
      status: json['status'],
      createdAt: DateTime.parse(json['createdAt']),
      farmCount: json['farmCount'] ?? 0,
    );
  }
}
