import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';

import 'app/theme.dart';
import 'core/localization/app_language.dart';
import 'core/network/api_client.dart';
import 'core/storage/token_storage.dart';
import 'l10n/generated/app_localizations.dart';
import 'features/home/screens/home_screen.dart';
import 'features/auth/screen/welcome_screen.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();

  await AppLanguage.instance.loadLanguage();

  final tokenStorage = TokenStorage();
  final token = await tokenStorage.getAccessToken();
  final isLoggedIn = token != null && token.isNotEmpty;

  runApp(ShreeAnnaApp(
    appLanguage: AppLanguage.instance,
    isLoggedIn: isLoggedIn,
  ));
}

class ShreeAnnaApp extends StatelessWidget {
  final bool isLoggedIn;

  const ShreeAnnaApp({
    super.key,
    required AppLanguage appLanguage,
    required this.isLoggedIn,
  });

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: AppLanguage.instance,
      builder: (context, child) {
        return MaterialApp(
          debugShowCheckedModeBanner: false,

          navigatorKey: navigatorKey,

          locale: AppLanguage.instance.locale,

          supportedLocales: const [Locale('en'), Locale('gu'), Locale('hi')],

          localizationsDelegates: const [
            AppLocalizations.delegate,
            GlobalMaterialLocalizations.delegate,
            GlobalWidgetsLocalizations.delegate,
            GlobalCupertinoLocalizations.delegate,
          ],

          home: isLoggedIn ? const HomeScreen() : const WelcomeScreen(),
        );
      },
    );
  }
}
