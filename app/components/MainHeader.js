import React from 'react';

import {Text, View, Image, StyleSheet} from 'react-native';

import Colors from '../styles/colors';
import FontSizes from '../styles/fontSizes';

const MainHeader = () => (
  <View style={Styles.logo}>
    <View style={Styles.logoText}>
      <Text style={Styles.logoTitle}>Travolta</Text>
      <Text style={Styles.logoSubtitle}>Your movie demo app</Text>
    </View>
    <Image
      style={Styles.logoImage}
      source={require('../images/john-travolta.png')}
    />
  </View>
);

const Styles = StyleSheet.create({
  logo: {
    backgroundColor: Colors.highlight,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
  },
  logoText: {
    marginRight: 18,
    alignItems: 'flex-end',
  },
  logoTitle: {
    // Uncommenting the next line will throw an error... for now
    //fontFamily: 'Oleo Script',

    fontSize: FontSizes.gigantic,
    color: Colors.background,
  },
  logoSubtitle: {
    color: Colors.background,
    fontWeight: '200',
    fontSize: FontSizes.subhead,
  },
  logoImage: {
    height: 90,
    width: 40,
  },
});

export default MainHeader;
