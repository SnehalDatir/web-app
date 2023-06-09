import 'package:flutter/material.dart';
import 'package:flutter_academy/res/assets.dart';

class Header extends StatelessWidget {
  const Header({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: MediaQuery.of(context).size.height,
      decoration: BoxDecoration(
        color: Colors.grey.shade100,
        image: DecorationImage(
          image: AssetImage(Assets.instructor),
          fit: BoxFit.cover,
          colorFilter: ColorFilter.mode(
            Colors.black.withOpacity(0.7),
            BlendMode.srcATop,
          ),
        ),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const SizedBox(height: 40.0),
          Text(
            "तृप्ती गणेशमूर्ती मध्ये आपले स्वागत आहे",
            style: Theme.of(context).textTheme.headline2?.copyWith(
                  color: Colors.white,
                ),
          ),
          Text(
            "गणेश मुर्ती घेण्यासाठी तुमचे सर्वात आवडते ठिकाण आहे",
            style: Theme.of(context)
                .textTheme
                .headline5
                ?.copyWith(color: Colors.white),
          ),
        ],
      ),
    );
  }
}
