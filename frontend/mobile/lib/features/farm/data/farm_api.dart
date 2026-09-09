import 'dart:convert';

import '../../../core/network/api_client.dart';
import '../../../core/network/api_config.dart';
import '../model/farm.dart';

class FarmApi {
  final ApiClient _apiClient = ApiClient();

  Future<List<Farm>> getMyFarms(String farmerId) async {
    final response = await _apiClient.get(ApiConfig.farmerFarms(farmerId));

    if (response.statusCode == 200) {
      final decoded = jsonDecode(response.body);
      final List<dynamic> data = _extractList(decoded);

      return data.map((json) => Farm.fromJson(json)).toList();
    }

    if (response.statusCode == 401) {
      throw Exception('Your session has expired. Please login again.');
    }

    if (response.statusCode == 403) {
      throw Exception('You are not allowed to access these farms.');
    }

    throw Exception('Failed to load farms.');
  }

  Future<Farm> getFarmById(String farmId) async {
    final response = await _apiClient.get(ApiConfig.farmById(farmId));

    if (response.statusCode == 200) {
      final decoded = jsonDecode(response.body);
      return Farm.fromJson(_extractMap(decoded));
    }

    if (response.statusCode == 404) {
      throw Exception('Farm not found.');
    }

    throw Exception('Failed to load farm.');
  }

  List<dynamic> _extractList(dynamic decoded) {
    if (decoded is List<dynamic>) {
      return decoded;
    }

    if (decoded is Map<String, dynamic>) {
      final data = decoded['data'];
      if (data is List<dynamic>) {
        return data;
      }
    }

    throw Exception('Unexpected farms response format.');
  }

  Map<String, dynamic> _extractMap(dynamic decoded) {
    if (decoded is Map<String, dynamic>) {
      final data = decoded['data'];
      if (data is Map<String, dynamic>) {
        return data;
      }

      return decoded;
    }

    throw Exception('Unexpected farm response format.');
  }
}
