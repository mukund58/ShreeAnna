import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart' show rootBundle;

import '../../../app/theme.dart';

class RegistrationScreen extends StatefulWidget {
  const RegistrationScreen({super.key});

  @override
  State<RegistrationScreen> createState() => _RegistrationScreenState();
}

class _RegistrationScreenState extends State<RegistrationScreen> {
  // ------------------------------------------------------------
  // FORM KEY
  // ------------------------------------------------------------
  final _formKey = GlobalKey<FormState>();

  // ------------------------------------------------------------
  // CONTROLLERS
  // ------------------------------------------------------------
  final _nameController = TextEditingController();
  final _mobileController = TextEditingController();
  final _addressController = TextEditingController();
  final _emailController = TextEditingController();
  final _dobController = TextEditingController();

  // ------------------------------------------------------------
  // DROPDOWN DATA
  // ------------------------------------------------------------
  List<String> _districts = [];
  List<String> _talukas = [];
  List<String> _villages = [];

  String? _selectedState = 'Gujarat';
  String? _selectedFpo;
  String? _selectedDistrict;
  String? _selectedTaluka;
  String? _selectedVillage;

  @override
  void initState() {
    super.initState();
    _loadLandData();
  }

  @override
  void dispose() {
    _nameController.dispose();
    _mobileController.dispose();
    _emailController.dispose();
    _addressController.dispose();
    _dobController.dispose();
    super.dispose();
  }

  // ------------------------------------------------------------
  // ASSET DATA LOADERS
  // ------------------------------------------------------------
  Future<void> _loadLandData() async {
    try {
      final raw = await rootBundle.loadString(
        'assets/data/gujarat_land_records.json',
      );
      final data = json.decode(raw) as Map<String, dynamic>;
      final districts = (data['districts'] as List<dynamic>?) ?? [];

      setState(() {
        _districts = districts
            .map<String>((d) => d['district_name'] as String)
            .toList();
      });
    } catch (e) {
      debugPrint('Error loading land data: $e');
    }
  }

  Future<void> _populateTalukasForDistrict(String districtName) async {
    try {
      final raw = await rootBundle.loadString(
        'assets/data/gujarat_land_records.json',
      );
      final data = json.decode(raw) as Map<String, dynamic>;
      final districts = (data['districts'] as List<dynamic>?) ?? [];

      final match = districts.firstWhere(
        (d) => (d['district_name'] as String) == districtName,
        orElse: () => null,
      );

      setState(() {
        if (match != null) {
          final talukas = (match['talukas'] as List<dynamic>?) ?? [];
          _talukas = talukas
              .map<String>((t) => t['taluka_name'] as String)
              .toList();
        } else {
          _talukas = [];
        }
      });
    } catch (e) {
      debugPrint('Error loading talukas: $e');
    }
  }

  Future<void> _populateVillagesForTaluka(
    String districtName,
    String talukaName,
  ) async {
    try {
      final raw = await rootBundle.loadString(
        'assets/data/gujarat_land_records.json',
      );
      final data = json.decode(raw) as Map<String, dynamic>;
      final districts = (data['districts'] as List<dynamic>?) ?? [];

      final match = districts.firstWhere(
        (d) => (d['district_name'] as String) == districtName,
        orElse: () => null,
      );

      setState(() {
        if (match != null) {
          final talukas = (match['talukas'] as List<dynamic>?) ?? [];
          final tal = talukas.firstWhere(
            (t) => (t['taluka_name'] as String) == talukaName,
            orElse: () => null,
          );
          if (tal != null) {
            final villages = (tal['villages'] as List<dynamic>?) ?? [];
            _villages = villages
                .map<String>((v) => v['village_name'] as String)
                .toList();
          } else {
            _villages = [];
          }
        } else {
          _villages = [];
        }
      });
    } catch (e) {
      debugPrint('Error loading villages: $e');
    }
  }

  // ------------------------------------------------------------
  // REGISTER HANDLER
  // ------------------------------------------------------------
  void _registerFarmer() {
    if (!_formKey.currentState!.validate()) {
      return;
    }

    final farmerName = _nameController.text.trim();
    final mobile = _mobileController.text.trim();
    final address = _addressController.text.trim();
    final state = _selectedState ?? '';
    final district = _selectedDistrict ?? '';
    final taluka = _selectedTaluka ?? '';
    final village = _selectedVillage ?? '';
    final fpo = _selectedFpo ?? '';

    debugPrint('Farmer Name: $farmerName');
    debugPrint('Mobile: $mobile');
    debugPrint('Address: $address');
    debugPrint('State: $state');
    debugPrint('District: $district');
    debugPrint('Taluka: $taluka');
    debugPrint('Village: $village');
    debugPrint('FPO: $fpo');

    ScaffoldMessenger.of(
      context,
    ).showSnackBar(const SnackBar(content: Text('Registration form is valid')));
  }

  // ------------------------------------------------------------
  // BUILD METHOD
  // ------------------------------------------------------------
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: ShreeAnnaTheme.background,

      // HEADER
      appBar: AppBar(
        backgroundColor: ShreeAnnaTheme.background,
        elevation: 0,
        surfaceTintColor: Colors.transparent,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back, color: Color(0xFF394139)),
          onPressed: () => Navigator.pop(context),
        ),
        title: const Text(
          'ShreeAnna',
          style: TextStyle(
            fontSize: 20,
            fontWeight: FontWeight.bold,
            color: ShreeAnnaTheme.primaryGreen,
          ),
        ),
      ),

      // BODY
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.fromLTRB(26, 20, 26, 30),
          child: Form(
            key: _formKey,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // TITLE
                const Center(
                  child: Text(
                    'Farmer Registration',
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.w600,
                      color: Color(0xFF202420),
                    ),
                  ),
                ),
                const SizedBox(height: 8),
                const Center(
                  child: Text(
                    'Enter your details to create an account.',
                    textAlign: TextAlign.center,
                    style: TextStyle(fontSize: 13, color: Color(0xFF596159)),
                  ),
                ),

                const SizedBox(height: 28),

                // FARMER NAME
                _buildLabel('Farmer Name'),
                const SizedBox(height: 7),
                TextFormField(
                  controller: _nameController,
                  textCapitalization: TextCapitalization.words,
                  decoration: _inputDecoration(
                    hintText: 'Rahul Patel',
                    icon: Icons.person_outline,
                  ),
                  validator: (value) {
                    if (value == null || value.trim().isEmpty) {
                      return 'Please enter your name';
                    }
                    return null;
                  },
                ),

                const SizedBox(height: 16),

                // MOBILE NUMBER
                _buildLabel('Mobile No 10 digits'),
                const SizedBox(height: 7),
                TextFormField(
                  controller: _mobileController,
                  keyboardType: TextInputType.phone,
                  maxLength: 10,
                  decoration: _inputDecoration(
                    hintText: '1234567890',
                    icon: Icons.phone_outlined,
                  ).copyWith(counterText: ''),
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'Please enter mobile number';
                    }
                    if (value.length != 10) {
                      return 'Enter a valid 10-digit number';
                    }
                    return null;
                  },
                ),

                const SizedBox(height: 16),

                // EMAIL
                _buildLabel('Email'),
                const SizedBox(height: 7),
                TextFormField(
                  controller: _emailController,
                  decoration: _inputDecoration(
                    hintText: 'rahul@gmail.com',
                    icon: Icons.email_outlined,
                  ),
                  validator: (value) {
                    if (value == null || value.trim().isEmpty) {
                      return 'Please enter your email';
                    }
                    if (!value.contains('@')) {
                      return 'Enter a valid email address';
                    }
                    return null;
                  },
                ),

                const SizedBox(height: 16),

                // ADDRESS
                _buildLabel('Address'),
                const SizedBox(height: 7),
                TextFormField(
                  controller: _addressController,
                  maxLines: 1,
                  decoration: _inputDecoration(
                    hintText: '123 Farm Lane',
                    icon: Icons.location_on_outlined,
                  ),
                  validator: (value) {
                    if (value == null || value.trim().isEmpty) {
                      return 'Please enter your address';
                    }
                    return null;
                  },
                ),

                const SizedBox(height: 16),

                // DISTRICT DROPDOWN
                _buildLabel('District'),
                const SizedBox(height: 7),
                DropdownButtonFormField<String>(
                  value: _selectedDistrict,
                  // Change 1: Dynamic hint text showing the loading status
                  hint: Text(
                    _districts.isEmpty
                        ? 'Loading districts...'
                        : 'Select District',
                  ),
                  decoration: _inputDecoration(
                    hintText: '',
                    icon: Icons.map_outlined,
                  ),
                  // Change 2: Ensure items is null when list is empty to let the loading hint show up
                  items: _districts.isEmpty
                      ? null
                      : _districts.map((district) {
                          return DropdownMenuItem(
                            value: district,
                            child: Text(district),
                          );
                        }).toList(),
                  onChanged:
                      _districts
                          .isEmpty // Change 3: Keep disabled until data is ready
                      ? null
                      : (value) {
                          if (value != null) {
                            setState(() {
                              _selectedDistrict = value;
                              _selectedTaluka = null;
                              _selectedVillage = null;
                              _talukas = [];
                              _villages = [];
                            });
                            _populateTalukasForDistrict(value);
                          }
                        },
                  validator: (value) =>
                      value == null ? 'Please select a district' : null,
                ),

                const SizedBox(height: 16),

                // TALUKA
                _buildLabel('Taluka'),
                const SizedBox(height: 7),
                DropdownButtonFormField<String>(
                  value: _selectedTaluka,
                  decoration: _inputDecoration(
                    hintText: 'Select taluka',
                    icon: Icons.location_city_outlined,
                  ),
                  items: _talukas
                      .map((t) => DropdownMenuItem(value: t, child: Text(t)))
                      .toList(),
                  onChanged: (v) async {
                    if (v == null) return;
                    setState(() {
                      _selectedTaluka = v;
                      _selectedVillage = null;
                      _villages = [];
                    });
                    if (_selectedDistrict != null) {
                      await _populateVillagesForTaluka(_selectedDistrict!, v);
                    }
                  },
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'Please select your taluka';
                    }
                    return null;
                  },
                ),

                const SizedBox(height: 16),

                // VILLAGE
                _buildLabel('Village'),
                const SizedBox(height: 7),
                DropdownButtonFormField<String>(
                  value: _selectedVillage,
                  hint: const Text('Select Village'),
                  decoration: _inputDecoration(
                    hintText: '',
                    icon: Icons.location_city_outlined,
                  ),
                  items: _villages.map((village) {
                    return DropdownMenuItem(
                      value: village,
                      child: Text(village),
                    );
                  }).toList(),
                  onChanged: _selectedTaluka == null
                      ? null
                      : (value) {
                          if (value != null) {
                            setState(() {
                              _selectedVillage = value;
                            });
                          }
                        },
                  validator: (value) =>
                      value == null ? 'Please select a village' : null,
                ),
                const SizedBox(height: 16),

                // DATE OF BIRTH
                _buildLabel('Date of Birth'),
                const SizedBox(height: 7),
                TextFormField(
                  controller: _dobController,
                  readOnly: true, // <-- Prevents manual typing/keyboard popup
                  decoration: _inputDecoration(
                    hintText: 'Select Date of Birth',
                    icon: Icons.calendar_today_outlined,
                  ),
                  onTap: () async {
                    // Opens the native date picker window
                    DateTime? pickedDate = await showDatePicker(
                      context: context,
                      initialDate: DateTime(2000), // Default start view
                      firstDate: DateTime(1920), // Oldest selectable date
                      lastDate: DateTime.now(), // Users cannot pick a date in the future
                    );

                    if (pickedDate != null) {
                      // Formats the date string into Day/Month/Year layout
                      String formattedDate =
                          "${pickedDate.day.toString().padLeft(2, '0')}/${pickedDate.month.toString().padLeft(2, '0')}/${pickedDate.year}";

                      setState(() {
                        _dobController.text =
                            formattedDate; // Updates the input box UI
                      });
                    }
                  },
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'Please select your date of birth';
                    }
                    return null;
                  },
                ),

                const SizedBox(height: 30),

                // REGISTER BUTTON
                SizedBox(
                  width: double.infinity,
                  height: 48,
                  child: ElevatedButton(
                    onPressed: _registerFarmer,
                    style: ElevatedButton.styleFrom(
                      backgroundColor: ShreeAnnaTheme.primaryGreen,
                      foregroundColor: Colors.white,
                      elevation: 1,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(2),
                      ),
                    ),
                    child: const Text(
                      'Register',
                      style: TextStyle(
                        fontSize: 14,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  // ------------------------------------------------------------
  // HELPERS
  // ------------------------------------------------------------
  Widget _buildLabel(String text) {
    return Text(
      text,
      style: const TextStyle(
        fontSize: 13,
        fontWeight: FontWeight.w500,
        color: Color(0xFF303530),
      ),
    );
  }

  InputDecoration _inputDecoration({
    required String hintText,
    required IconData icon,
  }) {
    return InputDecoration(
      hintText: hintText,
      hintStyle: const TextStyle(fontSize: 13, color: Color(0xFF9A9F9A)),
      prefixIcon: Icon(icon, size: 19, color: const Color(0xFF596159)),
      contentPadding: const EdgeInsets.symmetric(horizontal: 12, vertical: 14),
      border: OutlineInputBorder(
        borderRadius: BorderRadius.circular(2),
        borderSide: const BorderSide(color: Color(0xFF7E877E)),
      ),
      enabledBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(2),
        borderSide: const BorderSide(color: Color(0xFF7E877E)),
      ),
      focusedBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(2),
        borderSide: const BorderSide(
          color: ShreeAnnaTheme.primaryGreen,
          width: 1.5,
        ),
      ),
      errorBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(2),
        borderSide: const BorderSide(color: Colors.red),
      ),
      focusedErrorBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(2),
        borderSide: const BorderSide(color: Colors.red, width: 1.5),
      ),
    );
  }
}
