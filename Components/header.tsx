import {View, Image, Pressable} from 'react-native';
import {styles} from './Welcome';
import {styles1} from './Settings';
import React from 'react';

const Header = (props: {navigation: any}) => {
  const {navigation} = props;
  return (
    <View style={[styles.header, {elevation: 9}]}>
      <View style={styles1.subbody}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require('../assets/pricylogo.png')}></Image>

        <Pressable
          style={styles1.close}
          onPress={() => navigation.navigate('Settings')}>
          <Image
            resizeMode="cover"
            source={require('../assets/settings.png')}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;
