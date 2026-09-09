import 'package:flutter/material.dart';

import '../../../app/theme.dart';
import '../../../l10n/generated/app_localizations.dart';

class QualityCertificateScreen extends StatelessWidget {
  const QualityCertificateScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final l10n = AppLocalizations.of(context)!;
    return Scaffold(
      backgroundColor: ShreeAnnaTheme.background,
      appBar: AppBar(
        backgroundColor: ShreeAnnaTheme.background,
        elevation: 0,
        leading: IconButton(
          onPressed: () => Navigator.pop(context),
          icon: const Icon(Icons.arrow_back, color: Color(0xFF394139)),
        ),
        title: Text(
          l10n.qualityCertificate,
          style: const TextStyle(
            color: ShreeAnnaTheme.primaryGreen,
            fontSize: 20,
            fontWeight: FontWeight.bold,
          ),
        ),
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Container(
                width: double.infinity,
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(6),
                  border: Border.all(color: const Color(0xFFD5DFD0)),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text(
                      'CERTIFICATE NUMBER',
                      style: TextStyle(fontSize: 11, color: Color(0xFF707870)),
                    ),
                    const SizedBox(height: 6),
                    const Text(
                      'QC-2026-001',
                      style: TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    const SizedBox(height: 12),
                    const Text(
                      'FARMER',
                      style: TextStyle(fontSize: 11, color: Color(0xFF707870)),
                    ),
                    const SizedBox(height: 6),
                    const Text(
                      'John Doe',
                      style: TextStyle(fontWeight: FontWeight.bold),
                    ),
                    const SizedBox(height: 12),
                    const Text(
                      'LOT NUMBER',
                      style: TextStyle(fontSize: 11, color: Color(0xFF707870)),
                    ),
                    const SizedBox(height: 6),
                    const Text(
                      'LOT-001',
                      style: TextStyle(fontWeight: FontWeight.bold),
                    ),
                    const SizedBox(height: 12),
                    const Text(
                      'QUALITY GRADE',
                      style: TextStyle(fontSize: 11, color: Color(0xFF707870)),
                    ),
                    const SizedBox(height: 6),
                    const Text(
                      'A',
                      style: TextStyle(
                        fontSize: 22,
                        fontWeight: FontWeight.bold,
                        color: ShreeAnnaTheme.primaryGreen,
                      ),
                    ),
                    const SizedBox(height: 12),
                    const Text(
                      'ISSUE DATE',
                      style: TextStyle(fontSize: 11, color: Color(0xFF707870)),
                    ),
                    const SizedBox(height: 6),
                    const Text('15 Aug 2026'),
                    const SizedBox(height: 12),
                    const Text(
                      'VALID UNTIL',
                      style: TextStyle(fontSize: 11, color: Color(0xFF707870)),
                    ),
                    const SizedBox(height: 6),
                    const Text('15 Sep 2026'),
                  ],
                ),
              ),

              const SizedBox(height: 18),

              SizedBox(
                height: 50,
                width: double.infinity,
                child: ElevatedButton.icon(
                  onPressed: () {
                    ScaffoldMessenger.of(context).showSnackBar(
                      const SnackBar(content: Text('Downloading PDF...')),
                    );
                  },
                  icon: const Icon(Icons.download),
                  label: const Text(
                    'Download PDF',
                    style: TextStyle(fontSize: 16, color: Colors.white),
                  ),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: ShreeAnnaTheme.primaryGreen,
                    foregroundColor: Colors.white,
                    elevation: 0,
                    padding: const EdgeInsets.symmetric(horizontal: 16),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(16),
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
