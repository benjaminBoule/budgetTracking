import 'package:budget_app/components/radial_gauge.dart';
import 'package:flutter/material.dart';
import 'package:percent_indicator/circular_percent_indicator.dart';
import 'package:syncfusion_flutter_gauges/gauges.dart';

class Dashboard extends StatelessWidget {
  const Dashboard({super.key});

  showPopupMenu(BuildContext context) {
    // showMenu(
    //     context: context,
    //     position: const RelativeRect.fromLTRB(25.0, 25.0, 0.0, 0.0),
    //     items: [
    //       const PopupMenuItem<String>(value: '1', child: Text('menu option 1')),
    //       const PopupMenuItem<String>(value: '2', child: Text('menu option 2')),
    //       const PopupMenuItem<String>(value: '3', child: Text('menu option 3')),
    //     ]);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          "Dashboard",
        ),
        automaticallyImplyLeading: false,
        actions: [
          IconButton(
            onPressed: showPopupMenu(context),
            icon: const Icon(Icons.menu),
          )
        ],
      ),
      body: Builder(builder: (icontext) {
        return Column(
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Column(
                  children: [
                    Container(
                      height: 250,
                      width: 180,
                      decoration: BoxDecoration(
                          border: Border.all(color: Colors.black)),
                      child: const RadialPercentGauge(pointerValue: 40),
                    ),
                  ],
                ),
                Container(
                  padding: const EdgeInsets.only(top: 12),
                  decoration:
                      BoxDecoration(border: Border.all(color: Colors.black)),
                  height: 250,
                  width: 140,
                  child: const Column(
                    children: [
                      Column(
                        children: [
                          Text(
                            '\$250',
                            style: TextStyle(
                                fontSize: 30,
                                color: Color.fromARGB(255, 231, 54, 54),
                                fontWeight: FontWeight.bold),
                          ),
                          Text('Today')
                        ],
                      ),
                      SizedBox(height: 16),
                      Column(
                        children: [
                          Text('\$832',
                              style: TextStyle(
                                  fontSize: 24, fontWeight: FontWeight.bold)),
                          Text(
                            'This Week',
                          )
                        ],
                      ),
                      SizedBox(height: 8),
                      Column(
                        children: [
                          Text('\$2,250',
                              style: TextStyle(
                                  fontSize: 24, fontWeight: FontWeight.bold)),
                          Text('This Month')
                        ],
                      ),
                      SizedBox(height: 8),
                      Column(
                        children: [
                          Text('\$12,250',
                              style: TextStyle(
                                  fontSize: 24, fontWeight: FontWeight.bold)),
                          Text('Total Owed')
                        ],
                      ),
                    ],
                  ),
                ),
              ],
            ),
            Container(
              height: 200,
              alignment: Alignment.center,
              child: Column(
                children: [
                  Container(
                    height: 40,
                    width: 400,
                    decoration: BoxDecoration(color: Colors.green),
                    child: Text('Next Payments'),
                  )
                ],
              ),
            ),
          ],
        );
      }),
    );
  }
}
