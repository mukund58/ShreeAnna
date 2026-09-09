import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

import '../storage/token_storage.dart';
import '../../features/auth/screen/welcome_screen.dart';

/// A global navigator key so ApiClient can redirect to WelcomeScreen
/// from anywhere in the app when a 401 is received.
final GlobalKey<NavigatorState> navigatorKey = GlobalKey<NavigatorState>();

class ApiClient {
  final TokenStorage _tokenStorage = TokenStorage();

  Future<http.Response> get(String url) async {
    final token = await _tokenStorage.getAccessToken();
    final response = await http.get(Uri.parse(url), headers: _headers(token));
    _checkUnauthorized(response);
    return response;
  }

  Future<http.Response> post(String url, {Map<String, dynamic>? body}) async {
    final token = await _tokenStorage.getAccessToken();
    final response = await http.post(
      Uri.parse(url),
      headers: _headers(token),
      body: body == null ? null : jsonEncode(body),
    );
    _checkUnauthorized(response);
    return response;
  }

  Future<http.Response> put(String url, {Map<String, dynamic>? body}) async {
    final token = await _tokenStorage.getAccessToken();
    final response = await http.put(
      Uri.parse(url),
      headers: _headers(token),
      body: body == null ? null : jsonEncode(body),
    );
    _checkUnauthorized(response);
    return response;
  }

  Future<http.Response> patch(String url, {Map<String, dynamic>? body}) async {
    final token = await _tokenStorage.getAccessToken();
    final response = await http.patch(
      Uri.parse(url),
      headers: _headers(token),
      body: body == null ? null : jsonEncode(body),
    );
    _checkUnauthorized(response);
    return response;
  }

  Map<String, String> _headers(String? token) {
    return {
      'Content-Type': 'application/json',
      if (token != null && token.isNotEmpty) 'Authorization': 'Bearer $token',
    };
  }

  /// Called after every response. If the server returns 401 we clear
  /// the stored token and push WelcomeScreen as the new root so the
  /// user is forced to log in again.
  void _checkUnauthorized(http.Response response) {
    if (response.statusCode == 401) {
      _tokenStorage.clearAccessToken();
      navigatorKey.currentState?.pushAndRemoveUntil(
        MaterialPageRoute(builder: (_) => const WelcomeScreen()),
        (route) => false,
      );
    }
  }
}
