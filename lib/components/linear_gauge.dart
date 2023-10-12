import 'package:flutter/material.dart';
import 'package:syncfusion_flutter_gauges/gauges.dart';

class LinearPercentGauge extends StatefulWidget {
  const LinearPercentGauge({super.key, required this.pointerValue});
  final double pointerValue;

  @override
  State<LinearPercentGauge> createState() => _LinearPercentGaugeState();
}

class _LinearPercentGaugeState extends State<LinearPercentGauge> {
  double currentPointerValue = 0.0;

  @override
  void initState() {
    super.initState();
    currentPointerValue = widget.pointerValue;
  }

  @override
  Widget build(BuildContext context) {
    return SfLinearGauge();
  }
}
