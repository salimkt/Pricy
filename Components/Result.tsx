import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  useWindowDimensions,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import Header from './header';
import {styles1} from './Settings';

const Result = (props: {navigation: any}) => {
  const SCREEN_HEIGHT = useWindowDimensions().height;

  const {navigation} = props;
  const precedence: number[] = useSelector(
    (state: any) => state.pricey.precedence,
  );
  let max: number = Math.max(...precedence);
  let profitable = precedence.indexOf(max) + 1;
  function pad(s: string | number) {
    return s < 10 ? '0' + s : s;
  }
  var d = new Date();
  let df = [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
  console.warn(df);

  return (
    <View style={styles1.body}>
      <Header navigation={navigation} />
      <View style={[styles1.subbody, {height: SCREEN_HEIGHT - 85}]}>
        <ScrollView
          style={{
            height: SCREEN_HEIGHT,
          }}>
          <View style={[styles.result]}>
            <Text style={[styles.resultText, {fontSize: 32, marginTop: 30}]}>
              Voila!
            </Text>
            <Text style={[styles.resultText, {fontSize: 18, marginTop: 18}]}>
              Maximum Profit is on Product {profitable}
            </Text>
            {precedence.map((pre, key) => (
              <Text
                style={[
                  styles.resultText,
                  {
                    fontSize: 18,
                    marginTop: 12,
                    alignSelf: 'flex-start',
                    marginLeft: 20,
                    marginBottom: 8,
                  },
                ]}>
                Unit Price of product
                {' ' + (key + 1) + ' - $ ' + pre.toFixed(2)}
              </Text>
            ))}
            <Text>currency exchange rate as on {df}</Text>
          </View>
        </ScrollView>
        <TouchableHighlight
          style={[styles1.button, {backgroundColor: '#E5E5E5'}]}
          onPress={() => navigation.navigate('Product')}>
          <Text style={[styles1.btntext, {color: '#355371'}]}>
            Compare another product
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  result: {
    backgroundColor: '#fff',
    marginTop: '30%',
    marginBottom: 'auto',
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.12)',
    borderRadius: 20,
  },
  resultText: {
    color: '#404041',
    alignSelf: 'center',
    fontFamily: 'Mulish',
    fontWeight: '700',
  },
});
export default Result;
