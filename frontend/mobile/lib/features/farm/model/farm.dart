// here new class which reflects the farm model from backend
class Farm {
  final String id;
  final String farmCode;
  final String farmerId;
  final String farmName;
  final double areaInAcres;
  final String milletType;
  final String soilType;
  final String surveyNumber;
  final String district;
  final String taluka;
  final String village;
  final double latitude;
  final double longitude;
  final String imageUrl;
  final String status;
  final DateTime createdAt;
  final DateTime? verifiedAt;
  final String? verifiedBy;

  const Farm({
    required this.id,
    required this.farmCode,
    required this.farmerId,
    required this.farmName,
    required this.areaInAcres,
    required this.milletType,
    required this.soilType,
    required this.surveyNumber,
    required this.district,
    required this.taluka,
    required this.village,
    required this.latitude,
    required this.longitude,
    required this.imageUrl,
    required this.status,
    required this.createdAt,
    this.verifiedAt,
    this.verifiedBy,
  });

  factory Farm.fromJson(Map<String, dynamic> json) {
    return Farm(
      id: json['id'],
      farmCode: json['farmCode'],
      farmerId: json['farmerId'],
      farmName: json['farmName'],
      areaInAcres: (json['areaInAcres'] as num).toDouble(),
      milletType: json['milletType'], 
      soilType: json['soilType'],
      surveyNumber: json['surveyNumber'],
      district: json['district'],
      taluka: json['taluka'],
      village: json['village'],
      latitude: (json['latitude'] as num).toDouble(),
      longitude: (json['longitude'] as num).toDouble(),
      imageUrl: json['imageUrl'] ?? '',
      status: json['status'],
      createdAt: DateTime.parse(json['createdAt']),
      verifiedAt: json['verifiedAt'] != null
          ? DateTime.parse(json['verifiedAt'])
          : null,
      verifiedBy: json['verifiedBy'],
    );
  }
}
