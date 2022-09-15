import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {getCurrencylist} from './Services/apiServices';

const Welcome = (props: {navigation: any}) => {
  const {navigation} = props;
  const preference = useSelector((state: any) => state.pricey.preference);
  const autonavig = () => {
    if (preference.setstatus === false) {
      navigation.navigate('Settings');
    } else {
      navigation.navigate('Product');
    }
  };
  getCurrencylist();
  setTimeout(autonavig, 1500);

  return (
    <View style={styles.body}>
      <Text style={styles.logo}>Pricy</Text>
    </View>
  );
};
export const styles = StyleSheet.create({
  body: {
    backgroundColor: '#254B72',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontFamily: 'Pacifico',
    color: 'white',
    fontSize: 69.23,
  },
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
export default Welcome;
