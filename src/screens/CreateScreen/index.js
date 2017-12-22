import React, { Component } from 'react';
import { View, ImageBackground, Dimensions, Image, ScrollView, Platform } from 'react-native';
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Icon,
  Title,
  Right,
  Text
} from 'native-base';

import Circle from '../../components/circle';
import LinearChart from '../../components/linearChart';
import PieChart from '../../components/pieChart';
import Rectangle from '../../components/rectangle';
import ContactCard from '../../components/contactCard';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

class StatisticScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Create',
    tabBarIcon: ({ focused }) => (
      <Image style={{ width: 30, height: 30 }}
             source={require('../../../Design_Assets/lower_menu/create.png')}
      />
    ),
  });

  render() {
    const header = (
      <Header
        style={styles.header}>
        <Left style={{ flex: 1 }}>
          <Icon name='md-menu' style={styles.icon} />
        </Left>
        <Body style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Title style={styles.title}>DISTANCE</Title>
        </Body>
        <Right style={{ flex: 1 }} />
      </Header>
    );

    const options = (
      <View style={styles.optionsContainer}>
        <Image source={require('../../../Design_Assets/statspressed.png')} />
        <Image source={require('../../../Design_Assets/default/visualisation.png')}
               style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5 }}
        />
      </View>
    );

    const linearChart = (
      <View style={styles.layer}>
        <View>
          <Circle label='MILES' />
          <Circle label='MONTH' />
        </View>

        <LinearChart />
      </View>
    );

    const pieChart = (
      <View style={styles.layer}>
        <View>
          <Circle label='COMPARE' />
          <Circle label='SHARE'
                  icon={<Icon name='md-share' style={{ color: 'white', fontSize: 17 }} />}
          />
        </View>

        <View style={{ flex: 1, alignItems: 'center' }}>
          <PieChart />
        </View>
      </View>
    );

    const slider = (
      <View style={styles.layer}>
        <View>
          <Rectangle text='EDIT' contentStyle={{ color: 'gray', }} />
          <Rectangle icon='add'
                     contentStyle={{ color: 'white' }}
                     containerStyle={{ backgroundColor: 'rgb(48,49,46)', marginTop: 10 }}
          />
        </View>

        <ScrollView horizontal style={{ marginLeft: 10 }}>
          <ContactCard
            imageUrl={require('../../../Design_Assets/me.png')}
            text="ME"
            textBgColor='rgb(233, 167, 113)'
          />
          <ContactCard
            imageUrl={require('../../../Design_Assets/markwhite.png')}
            text="MARK WHITE"
            textBgColor='rgb(242, 193, 79)'
          />
          <ContactCard
            imageUrl={require('../../../Design_Assets/jack_black.png')}
            text="JACK BLACK"
            textBgColor='rgb(222, 108, 145)'
          />
          <ContactCard
            imageUrl={require('../../../Design_Assets/jane_doe.png')}
            text="JANE DOE"
            textBgColor='rgb(114, 206, 222)'
          />
        </ScrollView>
      </View>
    );

    return (
      <Container>
        <ImageBackground
          source={require('../../../Design_Assets/bgprofile.png')}
          style={{ height: SCREEN_HEIGHT, width: SCREEN_WIDTH, }}
        >
          {header}

          <Content>
            {options}
            {linearChart}
            {pieChart}
            {slider}
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

const styles = {
  icon: {
    color: 'white',
    backgroundColor: 'transparent',
    marginLeft: 20,
  },
  header: {
    backgroundColor: 'transparent',
    elevation: 0,
    borderBottomWidth: 0
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'GaspoSlab-Medium',
    // backgroundColor:'red'
  },
  layer: {
    // flex: 1,
    flexDirection: 'row',
    marginTop: Platform.OS === 'android' ? 10 : 30,
    marginHorizontal: 20
  },
  optionsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Platform.OS === 'android' ? 5 : 10,
    marginHorizontal: 40
  },
};

export default StatisticScreen;
