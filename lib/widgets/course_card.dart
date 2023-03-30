import 'package:flutter/material.dart';

class CourseCard extends StatelessWidget {
  const CourseCard({
    Key? key,
    required this.image,
    required this.title,
    required this.onActionPressed,
    // required this.description,
  }) : super(key: key);
  final String image;
  final String title;
  final Function() onActionPressed;
  // final String description;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: MediaQuery.of(context).size.width / 7,
      child: Card(
        clipBehavior: Clip.antiAlias,
        child: InkWell(
          onTap: onActionPressed,
          child: Column(
            children: [
              Image.asset(
                image,
                fit: BoxFit
                    .cover, // Set the fit property to cover the available space
                width: double
                    .infinity, // Set the width to fill the available space
              ),

              Padding(
                padding: const EdgeInsets.all(12.0),
                child: Text(
                  title,
                ),
              ),
              // Padding(
              //   padding: const EdgeInsets.all(12.0),
              //   child: Text(description),
              // )
            ],
          ),
        ),
      ),
    );
  }
}
