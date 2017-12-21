import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Icon } from 'native-base';


class ExploreScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Explore',
    tabBarIcon: ({ focused }) => (
      <Icon name='search' style={{ color: 'white', height: 25, width: 20 } }/>
    ),
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>Explore Screen</Text>
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

export default ExploreScreen;
