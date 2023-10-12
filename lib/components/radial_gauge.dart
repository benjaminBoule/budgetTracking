import 'package:flutter/material.dart';
import 'package:syncfusion_flutter_gauges/gauges.dart';

class RadialPercentGauge extends StatefulWidget {
  const RadialPercentGauge({super.key, required this.pointerValue});
  final double pointerValue;

  @override
  State<RadialPercentGauge> createState() => _RadialPercentGaugeState();
}

class _RadialPercentGaugeState extends State<RadialPercentGauge> {
  double currentPointerValue = 0.0;

  @override
  void initState() {
    super.initState();
    currentPointerValue = widget.pointerValue;
  }

  @override
  Widget build(BuildContext context) {
    return SfRadialGauge(axes: [
      RadialAxis(
        minimum: 0,
        maximum: 100,
        showLabels: false,
        showTicks: false,
        radiusFactor: 1,
        axisLineStyle: const AxisLineStyle(
            thickness: 0.2,
            cornerStyle: CornerStyle.bothCurve,
            color: Color.fromARGB(255, 255, 136, 136),
            thicknessUnit: GaugeSizeUnit.factor),
        pointers: [
          RangePointer(
            value: currentPointerValue,
            cornerStyle: CornerStyle.bothCurve,
            width: 0.2,
            sizeUnit: GaugeSizeUnit.factor,
            color: Colors.green,
          )
        ],
      ),
      RadialAxis(
        minimum: 0,
        maximum: 100,
        showLabels: false,
        showTicks: false,
        radiusFactor: 0.75,
        axisLineStyle: const AxisLineStyle(
            thickness: 0.25,
            cornerStyle: CornerStyle.bothCurve,
            color: Color.fromARGB(255, 255, 136, 136),
            thicknessUnit: GaugeSizeUnit.factor),
        pointers: [
          RangePointer(
            value: currentPointerValue,
            cornerStyle: CornerStyle.bothCurve,
            width: 0.25,
            sizeUnit: GaugeSizeUnit.factor,
            color: Colors.green,
          )
        ],
      ),
      RadialAxis(
        minimum: 0,
        maximum: 100,
        showLabels: false,
        showTicks: false,
        radiusFactor: 0.5,
        axisLineStyle: const AxisLineStyle(
            thickness: 0.25,
            cornerStyle: CornerStyle.bothCurve,
            color: Color.fromARGB(255, 255, 136, 136),
            thicknessUnit: GaugeSizeUnit.factor),
        pointers: [
          RangePointer(
            value: currentPointerValue,
            cornerStyle: CornerStyle.bothCurve,
            width: 0.25,
            sizeUnit: GaugeSizeUnit.factor,
            color: Colors.green,
          )
        ],
      )
    ]);
  }
}
