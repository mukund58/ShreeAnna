import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart' show rootBundle;

import '../../../app/theme.dart';

class ManageFarmScreen extends StatefulWidget {
  final String farmName;

  const ManageFarmScreen({super.key, required this.farmName});

  @override
  State<ManageFarmScreen> createState() => _ManageFarmScreenState();
}

class _ManageFarmScreenState extends State<ManageFarmScreen> {
  late TextEditingController _farmNameController;
  late TextEditingController _areaController;
  late TextEditingController _villageController;
  late TextEditingController _districtController;
  late TextEditingController _talukaController;
  late TextEditingController _surveryNumberController;
  String _soilType = 'Black Soil';

  @override
  void initState() {
    super.initState();

    _farmNameController = TextEditingController(text: widget.farmName);
    _areaController = TextEditingController(text: '12');
    _districtController = TextEditingController(text: 'Dahod');
    _talukaController = TextEditingController(text: 'Dahod');
    _villageController = TextEditingController(text: 'Navagam');
    _surveryNumberController = TextEditingController(text: '');
    _loadLandData();
  }

  Future<void> _loadLandData() async {
    try {
      final raw = await rootBundle.loadString(
        'assets/data/gujarat_land_records.json',
      );
      final data = json.decode(raw) as Map<String, dynamic>;

      final districts = data['districts'] as List<dynamic>?;
      if (districts != null && districts.isNotEmpty) {
        final match = districts.firstWhere(
          (d) =>
              (d['district_name'] as String).toLowerCase() ==
              _districtController.text.toLowerCase(),
          orElse: () => districts.first,
        );

        final talukas = (match['talukas'] as List<dynamic>?) ?? [];
        if (talukas.isNotEmpty) {
          final tal = talukas.first;
          final villages = (tal['villages'] as List<dynamic>?) ?? [];
          if (villages.isNotEmpty) {
            setState(() {
              _talukaController.text = tal['taluka_name'] as String? ?? '';
              _villageController.text =
                  villages.first['village_name'] as String? ?? '';
              final surveys =
                  (villages.first['survey_numbers'] as List<dynamic>?);
              if (surveys != null && surveys.isNotEmpty) {
                _surveryNumberController = TextEditingController(
                  text: surveys.first as String,
                );
              }
            });
          }
        }
      }
    } catch (e) {
      // ignore errors silently for now
    }
  }

  @override
  void dispose() {
    _farmNameController.dispose();
    _areaController.dispose();
    _villageController.dispose();
    _districtController.dispose();
    _talukaController.dispose();
    _surveryNumberController.dispose();

    super.dispose();
  }

  void _saveChanges() {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Farm changes saved successfully')),
    );

    Navigator.pop(context);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: ShreeAnnaTheme.background,
      appBar: AppBar(
        backgroundColor: ShreeAnnaTheme.background,
        elevation: 0,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back),
          onPressed: () {
            Navigator.pop(context);
          },
        ),
        title: const Text(
          'ShreeAnna',
          style: TextStyle(
            color: ShreeAnnaTheme.primaryGreen,
            fontWeight: FontWeight.bold,
          ),
        ),
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.fromLTRB(22, 20, 22, 30),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Text(
                'Manage Farm',
                style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 4),
              Text(
                'Update details for ${widget.farmName}.',
                style: const TextStyle(color: Color(0xFF687068)),
              ),
              const SizedBox(height: 20),
              Container(
                padding: const EdgeInsets.all(14),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(6),
                  border: Border.all(color: const Color(0xFFD5DDD2)),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    _buildLabel('Farm Name'),
                    TextField(
                      controller: _farmNameController,
                      decoration: _inputDecoration(),
                    ),
                    const SizedBox(height: 14),
                    _buildLabel('Total Area (Acres)'),
                    TextField(
                      controller: _areaController,
                      keyboardType: TextInputType.number,
                      decoration: _inputDecoration(),
                    ),
                    const SizedBox(height: 14),
                    _buildLabel('Soil Type'),
                    DropdownButtonFormField<String>(
                      initialValue: _soilType,
                      decoration: _inputDecoration(),
                      items: const [
                        DropdownMenuItem(
                          value: 'Black Soil',
                          child: Text('Black Soil'),
                        ),
                        DropdownMenuItem(
                          value: 'Red Soil',
                          child: Text('Red Soil'),
                        ),
                        DropdownMenuItem(
                          value: 'Alluvial Soil',
                          child: Text('Alluvial Soil'),
                        ),
                      ],
                      onChanged: (value) {
                        if (value != null) {
                          setState(() {
                            _soilType = value;
                          });
                        }
                      },
                    ),
                    const SizedBox(height: 14),
                    _buildLabel('District'),
                    TextField(
                      controller: _districtController,
                      decoration: _inputDecoration(),
                    ),
                    const SizedBox(height: 16),
                    _buildLabel('Taluka'),
                    TextField(
                      controller: _talukaController,
                      decoration: _inputDecoration(),
                    ),
                    const SizedBox(height: 16),
                    _buildLabel('Village'),
                    TextField(
                      controller: _villageController,
                      decoration: _inputDecoration(),
                    ),
                    const SizedBox(height: 16),
                    const Text(
                      'Farm Status',
                      style: TextStyle(
                        fontSize: 13,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    const SizedBox(height: 8),
                    Container(
                      width: double.infinity,
                      padding: const EdgeInsets.all(14),
                      decoration: BoxDecoration(
                        color: const Color(0xFFF4F8EF),
                        borderRadius: BorderRadius.circular(8),
                        border: Border.all(color: const Color(0xFFD5E3C9)),
                      ),
                      child: const Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Icon(
                            Icons.hourglass_top,
                            color: ShreeAnnaTheme.primaryGreen,
                            size: 20,
                          ),
                          SizedBox(width: 12),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  'Pending Verification',
                                  style: TextStyle(
                                    fontSize: 15,
                                    fontWeight: FontWeight.bold,
                                    color: ShreeAnnaTheme.primaryGreen,
                                  ),
                                ),
                                SizedBox(height: 4),
                                Text(
                                  'Farm verification is controlled by the FPO and should follow the survey record review process.',
                                  style: TextStyle(
                                    fontSize: 12,
                                    height: 1.35,
                                    color: Color(0xFF687068),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 28),
              SizedBox(
                width: double.infinity,
                height: 48,
                child: OutlinedButton(
                  onPressed: () {
                    Navigator.pop(context);
                  },
                  style: OutlinedButton.styleFrom(
                    foregroundColor: ShreeAnnaTheme.primaryGreen,
                    side: const BorderSide(color: ShreeAnnaTheme.primaryGreen),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(6),
                    ),
                  ),
                  child: const Text(
                    'Cancel',
                    style: TextStyle(fontWeight: FontWeight.bold),
                  ),
                ),
              ),
              const SizedBox(height: 10),
              SizedBox(
                width: double.infinity,
                height: 48,
                child: ElevatedButton(
                  onPressed: _saveChanges,
                  style: ElevatedButton.styleFrom(
                    backgroundColor: ShreeAnnaTheme.primaryGreen,
                    foregroundColor: Colors.white,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(6),
                    ),
                  ),
                  child: const Text(
                    'Save Changes',
                    style: TextStyle(fontWeight: FontWeight.bold),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildLabel(String text) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 5),
      child: Text(
        text,
        style: const TextStyle(fontSize: 12, fontWeight: FontWeight.bold),
      ),
    );
  }

  InputDecoration _inputDecoration() {
    return InputDecoration(
      contentPadding: const EdgeInsets.symmetric(horizontal: 10, vertical: 12),
      border: OutlineInputBorder(borderRadius: BorderRadius.circular(4)),
      enabledBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(4),
        borderSide: const BorderSide(color: Color(0xFFB8C5B5)),
      ),
    );
  }
}
