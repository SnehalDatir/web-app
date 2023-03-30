import 'package:flutter/material.dart';
import 'package:flutter_academy/pages/home_page.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'तृप्ती गणपति मंडल',
      theme: ThemeData(
        primarySwatch: Colors.orange,
      ),
      home: HomePage(title: 'तृप्ती गणपति मंडल'),
    );
  }
}
