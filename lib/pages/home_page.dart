import 'package:flutter/material.dart';
import 'package:flutter/services.dart' show rootBundle;
import 'dart:convert';
import 'package:galleryimage/galleryimage.dart';

import 'package:flutter_academy/res/assets.dart';
import 'package:flutter_academy/widgets/call_to_action.dart';
import 'package:flutter_academy/widgets/course_card.dart';
import 'package:flutter_academy/widgets/featured_section.dart';
import 'package:flutter_academy/widgets/footer.dart';
import 'package:flutter_academy/widgets/header.dart';

class HomePage extends StatefulWidget {
  const HomePage({required this.title});

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".
  final String title;

  @override
  State<HomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<HomePage> {
  List<String> _images = [];
  final cols = 4;

  @override
  void initState() {
    super.initState();
    _initImages();
  }

  Future _initImages() async {
    // >> To get paths you need these 2 lines
    final manifestContent = await rootBundle.loadString('AssetManifest.json');

    final Map<String, dynamic> manifestMap = json.decode(manifestContent);
    // >> To get paths you need these 2 lines

    _images = manifestMap.keys
        .where((element) => element.contains("ganesha"))
        .where((element) => element.contains(".jpeg"))
        .toList();

    print(_images);
    setState(() {});
  }

  Widget _buildGrid() => GridView.extent(
      maxCrossAxisExtent: 150,
      padding: const EdgeInsets.all(4),
      mainAxisSpacing: 4,
      crossAxisSpacing: 4,
      children: _buildGridTileList(30));

  // The images are saved with names pic0.jpg, pic1.jpg...pic29.jpg.
  // The List.generate() constructor allows an easy way to create
  // a list when objects have a predictable naming pattern.
  List<Container> _buildGridTileList(int count) =>
      List.generate(count, (i) => Container(child: Image.asset(_images[i])));

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView(
        children: <Widget>[
          AppBar(
            title: Text('तृप्ती गणपति मंडल'),
            elevation: 0,
          ),
          Header(),
          const SizedBox(height: 40.0),
          Padding(
            padding: const EdgeInsets.only(left: 20.0),
            child: Text("नवीन मुर्ती",
                style: Theme.of(context).textTheme.headline3),
          ),
          const SizedBox(height: 10.0),
          Container(
            height: 1000,
            child: GridView.count(
              crossAxisCount: 3,
              crossAxisSpacing: 4.0,
              mainAxisSpacing: 8.0,
              children: List.generate(
                _images.length,
                (index) {
                  return Row(children: <Widget>[
                    const SizedBox(width: 20.0),
                    CourseCard(
                      title: 'भगवान गणेश जी',
                      image: _images[index],
                      description: "",
                      onActionPressed: () {},
                    ),
                    const SizedBox(width: 20.0),
                  ]);
                },
              ),
            ),
          ),

          //footer
          // Footer(),
        ],
      ),
    );
  }
}
