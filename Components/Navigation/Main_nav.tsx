import React from 'react';
import Settings from '../Settings';
import Welcome from '../Welcome';
import Product from '../Product';
import Result from '../Result';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Header from '../header';

const Main_nav = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Main_nav;
