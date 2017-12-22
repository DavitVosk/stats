import React from 'react'
import { View, Text, Platform, requireNativeComponent } from 'react-native';
import { PieChart, ProgressCircle } from 'react-native-svg-charts';

import { Pie, Bar } from 'react-native-pathjs-charts';

class PieCharts extends React.PureComponent {
  render() {
    const data1 = [{ value: 70, color: 'rgb(114, 206, 222)' }, { value: 40, color: 'rgb(61, 60, 58)' }];
    const data2 = [{ value: 90, color: 'rgb(225, 107, 146)' }, { value: 5, color: 'rgb(61, 60, 58)' }];
    const data3 = [{ value: 90, color: 'rgb(242, 193, 79)' }, { value: 10, color: 'rgb(61, 60, 58)' }];
    const data4 = [{ value: 90, color: 'rgb(230, 141, 112)' }, { value: 15, color: 'rgb(61, 60, 58)' }];

    const pieData1 = data1
      .filter(item => item.value > 0)
      .map(({ value, color }, index) => ({
        value,
        color,
        key: `pie-${index}`,
      }));

    const pieData2 = data2
      .filter(item => item.value > 0)
      .map(({ value, color }, index) => ({
        value,
        color,
        key: `pie-${index}`,
      }));

    const pieData3 = data3
      .filter(item => item.value > 0)
      .map(({ value, color }, index) => ({
        value,
        color,
        key: `pie-${index}`,
      }));

    const pieData4 = data4
      .filter(item => item.value > 0)
      .map(({ value, color }, index) => ({
        value,
        color,
        key: `pie-${index}`,
      }));

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <PieChart
          style={{ height: 200, width: 200 }}
          data={pieData1}
          innerRadius='85%'
        />
        <Text style={[styles.pieTitle, { bottom: 0 }]}>63</Text>

        <PieChart
          style={{ height: 160, width: 160, position: 'absolute' }}
          data={pieData2}
          innerRadius='80%'
        />
        <Text style={[styles.pieTitle, { bottom: 20 }]}>98</Text>

        <PieChart
          style={{ height: 120, width: 120, position: 'absolute' }}
          data={pieData3}
          innerRadius='75%'
        />
        <Text style={[styles.pieTitle, { bottom: 40 }]}>87</Text>

        <PieChart
          style={{ height: 80, width: 80, position: 'absolute' }}
          data={pieData4}
          innerRadius='65%'
        />
        <Text style={[styles.pieTitle, { bottom: 60 }]}>74</Text>

        <View style={{ position: 'absolute', borderRadius: 100, }}>
          <Text style={{ color: 'white', fontSize: 12 }}>Distance</Text>
        </View>
      </View>
    )
  }
}

const styles = {
  pieTitle: {
    position: 'absolute',
    color: 'white',
    fontSize: 12
  }
}

export default PieCharts