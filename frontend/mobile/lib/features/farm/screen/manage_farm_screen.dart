import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart' show rootBundle;

import '../../../app/theme.dart';
import '../../../l10n/generated/app_localizations.dart';
import '../model/farm.dart';
import '../data/farm_api.dart';

class ManageFarmScreen extends StatefulWidget {
  final Farm farm;

  const ManageFarmScreen({super.key, required this.farm, required String farmName});

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
  String? _selectedMilletType;
  final FarmApi _farmApi = FarmApi();

  bool _isSaving = false;

  @override
  void initState() {
    super.initState();

    final farm = widget.farm;

    _farmNameController = TextEditingController(text: farm.farmName);

    _areaController = TextEditingController(text: farm.areaInAcres.toString());

    _districtController = TextEditingController(text: farm.district);

    _talukaController = TextEditingController(text: farm.taluka);

    _villageController = TextEditingController(text: farm.village);

    _surveryNumberController = TextEditingController(text: farm.surveyNumber);

    _soilType = farm.soilType;

    _selectedMilletType = farm.milletType;

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
                _surveryNumberController.text = surveys.first as String;
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

  Future<void> _saveChanges() async {
    if (_isSaving) {
      return;
    }

    final farmName = _farmNameController.text.trim();
    final area = double.tryParse(_areaController.text.trim());

    if (farmName.isEmpty) {
      _showMessage('Please enter farm name.');
      return;
    }

    if (area == null || area <= 0) {
      _showMessage('Please enter a valid area.');
      return;
    }

    if (_selectedMilletType == null || _selectedMilletType!.isEmpty) {
      _showMessage('Please select millet type.');
      return;
    }

    setState(() {
      _isSaving = true;
    });

    try {
      final updatedFarm = await _farmApi.updateFarm(
        farmId: widget.farm.id,
        farmName: farmName,
        areaInAcres: area,
        soilType: _soilType,
        milletType: _selectedMilletType!,
        district: _districtController.text.trim(),
        taluka: _talukaController.text.trim(),
        village: _villageController.text.trim(),
        latitude: widget.farm.latitude,
        longitude: widget.farm.longitude,
        imageUrl: widget.farm.imageUrl,
      );

      if (!mounted) {
        return;
      }

      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Farm updated successfully.')),
      );

      Navigator.pop(context, updatedFarm);
    } catch (e) {
      if (!mounted) {
        return;
      }

      _showMessage(e.toString().replaceFirst('Exception: ', ''));
    } finally {
      if (mounted) {
        setState(() {
          _isSaving = false;
        });
      }
    }
  }

  void _showMessage(String message) {
    ScaffoldMessenger.of(context)
        .showSnackBar(SnackBar(content: Text(message)));
  }

  @override
  Widget build(BuildContext context) {
    final l10n = AppLocalizations.of(context)!;
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
        title: Text(
          l10n.appName,
          style: const TextStyle(
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
              Text(
                '${l10n.manage} ${l10n.farm}',
                style: const TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(height: 4),
              Text(
                'Update details for ${widget.farm.farmName}.',
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
                    _buildLabel(l10n.farmName),
                    TextField(
                      controller: _farmNameController,
                      decoration: _inputDecoration(),
                    ),
                    const SizedBox(height: 14),
                    _buildLabel(l10n.area),
                    TextField(
                      controller: _areaController,
                      keyboardType: TextInputType.number,
                      decoration: _inputDecoration(),
                    ),
                    const SizedBox(height: 14),
                    _buildLabel(l10n.soilType),
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
                    _buildLabel(l10n.milletType),
                    // Millet / Crop Type
                    DropdownButtonFormField<String>(
                      initialValue: _selectedMilletType,
                      decoration: _inputDecoration(),
                      items: [
                        DropdownMenuItem(
                          value: 'Pearl Millet',
                          child: Text(l10n.milletPearl),
                        ),
                        DropdownMenuItem(
                          value: 'Finger Millet',
                          child: Text(l10n.milletFinger),
                        ),
                        DropdownMenuItem(
                          value: 'Foxtail Millet',
                          child: Text(l10n.milletFoxtail),
                        ),
                        DropdownMenuItem(
                          value: 'Little Millet',
                          child: Text(l10n.milletLittle),
                        ),
                        DropdownMenuItem(
                          value: 'Kodo Millet',
                          child: Text(l10n.milletKodo),
                        ),
                        DropdownMenuItem(
                          value: 'Barnyard Millet',
                          child: Text(l10n.milletBarnyard),
                        ),
                        DropdownMenuItem(
                          value: 'Proso Millet',
                          child: Text(l10n.milletProso),
                        ),
                      ],
                      onChanged: (value) {
                        setState(() {
                          _selectedMilletType = value;
                        });
                      },
                    ),

                    const SizedBox(height: 14),

                    _buildLabel(l10n.district),
                    TextField(
                      controller: _districtController,
                      decoration: _inputDecoration(),
                    ),
                    const SizedBox(height: 16),
                    _buildLabel(l10n.taluka),
                    TextField(
                      controller: _talukaController,
                      decoration: _inputDecoration(),
                    ),
                    const SizedBox(height: 16),
                    _buildLabel(l10n.village),
                    TextField(
                      controller: _villageController,
                      decoration: _inputDecoration(),
                    ),
                    const SizedBox(height: 16),
                    Text(
                      l10n.accountStatus,
                      style: const TextStyle(
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
                  child: Text(
                    l10n.cancel,
                    style: const TextStyle(fontWeight: FontWeight.bold),
                  ),
                ),
              ),
              const SizedBox(height: 10),
              SizedBox(
                width: double.infinity,
                height: 48,
                child: ElevatedButton(
                  onPressed: _isSaving ? null : _saveChanges,
                  style: ElevatedButton.styleFrom(
                    backgroundColor: ShreeAnnaTheme.primaryGreen,
                    foregroundColor: Colors.white,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(6),
                    ),
                  ),

                  child: _isSaving
                      ? const SizedBox(
                          width: 20,
                          height: 20,
                          child: CircularProgressIndicator(
                            strokeWidth: 2,
                            color: Colors.white,
                          ),
                        )
                      : Text(
                          l10n.save,
                          style: const TextStyle(fontWeight: FontWeight.bold),
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
