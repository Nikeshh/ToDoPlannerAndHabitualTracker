import 'package:flutter/material.dart';
import 'home.dart';
import 'onboarding.dart';

import 'package:shared_preferences/shared_preferences.dart';

int? initScreen;

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  SharedPreferences prefs = await SharedPreferences.getInstance();
  initScreen = prefs.getInt('initScreen');
  // print('initScreen ${initScreen}');
  runApp(new MyApp());
}

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Todo Planner and Habitual Tracker',
      theme: ThemeData(
        primarySwatch: Colors.deepOrange,
      ),
      home: initScreen != 1 ? Onboarding() : Home(),
    );
  }
}