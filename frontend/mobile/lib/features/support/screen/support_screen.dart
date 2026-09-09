import 'package:flutter/material.dart';

import '../../../app/theme.dart';
import '../../../l10n/generated/app_localizations.dart';

class SupportScreen extends StatelessWidget {
  const SupportScreen({super.key});

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
          l10n.helpSupport,
          style: const TextStyle(
            color: ShreeAnnaTheme.primaryGreen,
            fontSize: 20,
            fontWeight: FontWeight.bold,
          ),
        ),
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(18),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // ==================================================
              // HERO CARD
              // ==================================================
              Container(
                width: double.infinity,
                padding: const EdgeInsets.all(18),
                decoration: BoxDecoration(
                  color: ShreeAnnaTheme.primaryGreen,
                  borderRadius: BorderRadius.circular(8),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        Container(
                          width: 44,
                          height: 44,
                          decoration: BoxDecoration(
                            color: Colors.white.withValues(alpha: 0.18),
                            borderRadius: BorderRadius.circular(8),
                          ),
                          child: const Icon(
                            Icons.headset_mic_outlined,
                            color: Colors.white,
                            size: 26,
                          ),
                        ),
                        const SizedBox(width: 14),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                l10n.helpSupport,
                                style: const TextStyle(
                                  fontSize: 18,
                                  fontWeight: FontWeight.bold,
                                  color: Colors.white,
                                ),
                              ),
                              const SizedBox(height: 3),
                              Text(
                                l10n.workingHours,
                                style: const TextStyle(
                                  fontSize: 11,
                                  color: Colors.white70,
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 14),
                    Text(
                      l10n.supportDescription,
                      style: const TextStyle(
                        fontSize: 12,
                        color: Colors.white,
                        height: 1.4,
                      ),
                    ),
                  ],
                ),
              ),

              const SizedBox(height: 20),

              // ==================================================
              // QUICK ACTIONS
              // ==================================================
              Row(
                children: [
                  Expanded(
                    child: OutlinedButton.icon(
                      onPressed: () {
                        ScaffoldMessenger.of(context).showSnackBar(
                          const SnackBar(
                            content: Text('Calling Helpline: 1800-123-7473...'),
                          ),
                        );
                      },
                      icon: const Icon(Icons.phone, size: 18),
                      label: Text(l10n.callHelpline),
                      style: OutlinedButton.styleFrom(
                        foregroundColor: ShreeAnnaTheme.primaryGreen,
                        side: const BorderSide(color: ShreeAnnaTheme.primaryGreen),
                        padding: const EdgeInsets.symmetric(vertical: 13),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(6),
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: ElevatedButton.icon(
                      onPressed: () {
                        ScaffoldMessenger.of(context).showSnackBar(
                          const SnackBar(
                            content: Text('Opening email client...'),
                          ),
                        );
                      },
                      icon: const Icon(Icons.email_outlined, size: 18),
                      label: Text(l10n.emailSupport),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: ShreeAnnaTheme.primaryGreen,
                        foregroundColor: Colors.white,
                        padding: const EdgeInsets.symmetric(vertical: 13),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(6),
                        ),
                      ),
                    ),
                  ),
                ],
              ),

              const SizedBox(height: 24),

              // ==================================================
              // FAQS
              // ==================================================
              Text(
                l10n.frequentlyAskedQuestions,
                style: const TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                  color: Color(0xFF202420),
                ),
              ),

              const SizedBox(height: 12),

              Container(
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(6),
                  border: Border.all(color: const Color(0xFFD5DFD0)),
                ),
                child: Column(
                  children: [
                    _buildFaqItem(
                      question: 'How do I add a new farm?',
                      answer:
                          'Go to Farm Management tab from the bottom navigation or click "Manage Farms" on home. Click "ADD FARM", fill in your farm area, soil type, district, survey number, and upload farm photo with GPS location enabled.',
                    ),
                    const Divider(height: 1),
                    _buildFaqItem(
                      question: 'How do I submit my millet harvest for sale?',
                      answer:
                          'Click "Sell Millet" on the home screen. Select your registered farm, choose the millet variety (Bajra, Ragi, Jowar etc.), enter estimated weight in Kg, select harvest date, and submit for FPO inspection.',
                    ),
                    const Divider(height: 1),
                    _buildFaqItem(
                      question: 'What happens during Quality Inspection?',
                      answer:
                          'An agronomist/inspector assigned by your FPO visits your farm or warehouse to inspect grain quality, moisture content, and purity. Upon approval, a Quality Certificate and Procurement Agreement are issued.',
                    ),
                    const Divider(height: 1),
                    _buildFaqItem(
                      question: 'When will I receive payment for my sold lot?',
                      answer:
                          'After accepting the procurement agreement and warehouse delivery, direct bank transfer is initiated by the government MSP/FPO system within 3 to 5 business days directly into your bank account.',
                    ),
                  ],
                ),
              ),

              const SizedBox(height: 24),

              // ==================================================
              // CONTACT INFO CARD
              // ==================================================
              Container(
                width: double.infinity,
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(
                  color: const Color(0xFFF2F7ED),
                  borderRadius: BorderRadius.circular(6),
                  border: Border.all(color: const Color(0xFFD5DFD0)),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      l10n.support,
                      style: const TextStyle(
                        fontSize: 14,
                        fontWeight: FontWeight.bold,
                        color: Color(0xFF202420),
                      ),
                    ),
                    const SizedBox(height: 10),
                    const _InfoRow(
                      icon: Icons.phone_outlined,
                      label: 'Toll-Free Helpline',
                      value: '1800-123-7473',
                    ),
                    const SizedBox(height: 8),
                    const _InfoRow(
                      icon: Icons.email_outlined,
                      label: 'Email Support',
                      value: 'support@shreeanna.gov.in',
                    ),
                    const SizedBox(height: 8),
                    const _InfoRow(
                      icon: Icons.location_on_outlined,
                      label: 'FPO Head Office',
                      value: 'Krishi Bhavan, Sector 10A, Gandhinagar, Gujarat',
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildFaqItem({
    required String question,
    required String answer,
  }) {
    return ExpansionTile(
      title: Text(
        question,
        style: const TextStyle(
          fontSize: 13,
          fontWeight: FontWeight.w600,
          color: Color(0xFF202420),
        ),
      ),
      childrenPadding: const EdgeInsets.fromLTRB(16, 0, 16, 14),
      expandedAlignment: Alignment.centerLeft,
      children: [
        Text(
          answer,
          style: const TextStyle(
            fontSize: 12,
            color: Color(0xFF596159),
            height: 1.4,
          ),
        ),
      ],
    );
  }
}

class _InfoRow extends StatelessWidget {
  final IconData icon;
  final String label;
  final String value;

  const _InfoRow({
    required this.icon,
    required this.label,
    required this.value,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Icon(icon, size: 16, color: ShreeAnnaTheme.primaryGreen),
        const SizedBox(width: 10),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                label,
                style: const TextStyle(fontSize: 10, color: Color(0xFF707870)),
              ),
              const SizedBox(height: 2),
              Text(
                value,
                style: const TextStyle(
                  fontSize: 12,
                  fontWeight: FontWeight.w600,
                  color: Color(0xFF303530),
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }
}
