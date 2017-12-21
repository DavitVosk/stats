import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';


const Circle = ({ label, icon }) => {
    return (
      <View style={styles.circle}>
        {icon}
        <Text style={{ color: 'white', fontSize: 10 }}>{label}</Text>
      </View>
    );
};

const styles = {
  circle:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    backgroundColor: 'rgb(48,49,46)',
    borderRadius: 100,
    marginTop: 20
  }
};

export default Circle;
