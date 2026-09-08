import 'dart:convert';

import 'package:http/http.dart' as http;

import '../storage/token_storage.dart';

class ApiClient {
  final TokenStorage _tokenStorage = TokenStorage();

  Future<http.Response> get(String url) async {
    final token = await _tokenStorage.getAccessToken();

    return await http.get(Uri.parse(url), headers: _headers(token));
  }

  Future<http.Response> post(String url, {Map<String, dynamic>? body}) async {
    final token = await _tokenStorage.getAccessToken();

    return await http.post(
      Uri.parse(url),
      headers: _headers(token),
      body: body == null ? null : jsonEncode(body),
    );
  }

  Future<http.Response> put(String url, {Map<String, dynamic>? body}) async {
    final token = await _tokenStorage.getAccessToken();

    return await http.put(
      Uri.parse(url),
      headers: _headers(token),
      body: body == null ? null : jsonEncode(body),
    );
  }

  Future<http.Response> patch(String url, {Map<String, dynamic>? body}) async {
    final token = await _tokenStorage.getAccessToken();

    return await http.patch(
      Uri.parse(url),
      headers: _headers(token),
      body: body == null ? null : jsonEncode(body),
    );
  }

  Map<String, String> _headers(String? token) {
    return {
      'Content-Type': 'application/json',
      if (token != null && token.isNotEmpty) 'Authorization': 'Bearer $token',
    };
  }
}
