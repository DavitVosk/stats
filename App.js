import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { TabNavigator } from 'react-navigation';

import CreateScreen from './src/screens/CreateScreen';
import HomeScreen from "./src/screens/HomeScreen";
import ExploreScreen from "./src/screens/ExploreScreen";
import TripsScreen from "./src/screens/TripsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

export default class App extends React.Component {
  render() {
    const MainNavigation = TabNavigator({
        home: { screen: HomeScreen },
        explore: { screen: ExploreScreen },
        create: { screen: CreateScreen },
        trips: { screen: TripsScreen },
        profile: { screen: ProfileScreen }
      }, {
        tabBarVisible: true,
        tabBarPosition: 'bottom',
        tabBarOptions: {
          showIcon: true,
          activeTintColor: 'rgb(240,171, 120)',
          labelStyle: {
            fontSize: 10,
            color: 'rgb(165,164,161)'
          },
          style: {
            backgroundColor: 'rgb(88,87, 84)',
            borderTopColor: 'red',
            borderTopWidth: 1
          },
        }
      },
      {
        lazy: true,
      });

    return (
      <View style={styles.container}>
        <MainNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
