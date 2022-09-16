import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const About = (props: {navigation: any}) => {
  return (
    <View style={styles.body}>
      <Text style={styles.logo}>Pricy</Text>
      <Text style={styles.netstratum}>Netstratum Inc</Text>
      <Text style={styles.version}>Version 1.0</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#254B72',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 30,
  },
  logo: {
    fontFamily: 'Pacifico',
    color: 'white',
    fontSize: 69.23,
  },
  netstratum: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 66.5,
  },
  version: {color: 'white', fontSize: 18, fontWeight: '700'},
  header: {
    height: 60,
    backgroundColor: '#fff',
  },
  icon: {
    width: 43,
    height: 43,
    marginTop: 9,
  },
});
export default About;
