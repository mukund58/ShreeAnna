import 'dart:convert';

import '../../../core/network/api_client.dart';
import '../../../core/network/api_config.dart';
import '../models/farmer.dart';

import 'package:flutter/material.dart';

class FarmerApi {
  final ApiClient _apiClient = ApiClient();

  Future<Farmer> getMe() async {
    final response = await _apiClient.get(ApiConfig.farmerMe);

    if (response.statusCode == 200) {
      final json = jsonDecode(response.body);

      return Farmer.fromJson(json);
    }

    if (response.statusCode == 401) {
      debugPrint('401 body: ${response.body}');
      debugPrint('401 headers: ${response.headers}');
      throw Exception('Your session has expired. Please login again.');
    }

    if (response.statusCode == 404) {
      throw Exception('Farmer profile not found.');
    }

    throw Exception('Failed to load farmer profile.');
  }
}
