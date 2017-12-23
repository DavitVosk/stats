import React from 'react';
import { View, Text, Platform } from 'react-native';

const Circle = ({ label, icon }) => {
    return (
      <View style={styles.circle}>
        {icon}
        <Text style={{ color: 'white', fontSize: 10, fontFamily: Platform.OS === 'android' ? 'Brandon-med':null }}>{label}</Text>
      </View>
    );
};

const styles = {
  circle:{
    justifyContent: 'center',
    alignItems: 'center',
    height: Platform.OS === 'android' ? 60 : 60,
    width: Platform.OS === 'android' ? 60 : 60,
    backgroundColor: 'rgb(48,49,46)',
    borderRadius: 100,
    marginTop: 20,
  }
};

export default Circle;
