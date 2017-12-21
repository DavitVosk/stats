import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class ProfileScreen  extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Profile',
    tabBarIcon: ({ focused }) => (
      <Image style={{ width: 25, height: 25, }}
             source={require('../../../Design_Assets/lower_menu/profile_active.png')}
      />
    ),
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default ProfileScreen;
