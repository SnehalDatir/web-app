import 'package:flutter/material.dart';

class CourseCardImgList extends StatelessWidget {
  const CourseCardImgList({
    Key? key,
    required this.images,
    required this.title,
    required this.onActionPressed,
    // required this.description,
  }) : super(key: key);
  final List<String> images;
  final String title;
  final Function() onActionPressed;
  // final String description;

  @override
  Widget build(BuildContext context) => Scaffold(
      body: GridView.builder(
          itemCount: images.length,
          gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent(
            maxCrossAxisExtent: 400,
            crossAxisSpacing: 20.0,
            mainAxisSpacing: 20.0,
          ),
          itemBuilder: (context, i) => Card(
                  child: Center(
                      child: Padding(
                padding: EdgeInsets.all(8.0),
                child: Padding(
                    padding: EdgeInsets.all(1.0),
                    child: Image.asset(images[i])),
              )))));
}
