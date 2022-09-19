import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
// import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {styles1} from './Settings';
import * as Actions from './store/actions';

let favour: {currency: string; measure: string} = {currency: '', measure: ''};

export const SingleProduct: any = ({
  onChangeName,
  onChangeWeight,
  onChangePrice,
  updateWeight,
  updatePrice,
  i,
}: any) => {
  const preference = useSelector((state: any) => state.pricey.preference);
  const measurecategory = useSelector(
    (state: any) => state.pricey.measurecategory.category,
  );
  const dispatch = useDispatch();
  const [curropen, setcurrOpen] = useState(false);
  let fav: string;
  favour.currency === ''
    ? (fav = preference.currency)
    : (fav = favour.currency);
  const [currvalue, setcurrValue] = useState(fav);
  const [Currency, setCurrency] = useState([
    {label: 'EUR', value: 'EUR'},
    {label: 'OMR', value: 'OMR'},
    {label: 'USD', value: 'USD'},
    {label: 'INR', value: 'INR'},
    {label: 'MMK', value: 'MMK'},
    {label: 'ZAR', value: 'ZAR'},
    {label: 'TJS', value: 'TJS'},
    {label: 'TMT', value: 'TMT'},
    {label: 'DKK', value: 'DKK'},
    {label: 'PKR', value: 'PKR'},
    {label: 'KES', value: 'KES'},
    {label: 'UZS', value: 'UZS'},
    {label: 'BSD', value: 'BSD'},
    {label: 'GTQ', value: 'GTQ'},
    {label: 'YER', value: 'YER'},
    {label: 'BIF', value: 'BIF'},
    {label: 'NAD', value: 'NAD'},
    {label: 'SYP', value: 'SYP'},
    {label: 'JOD', value: 'JOD'},
    {label: 'CVE', value: 'CVE'},
    {label: 'UGX', value: 'UGX'},
    {label: 'UAH', value: 'UAH'},
    {label: 'RON', value: 'RON'},
    {label: 'VUV', value: 'VUV'},
    {label: 'KMF', value: 'KMF'},
    {label: 'KYD', value: 'KYD'},
    {label: 'STD', value: 'STD'},
    {label: 'IDR', value: 'IDR'},
    {label: 'LYD', value: 'LYD'},
    {label: 'XAF', value: 'XAF'},
    {label: 'GNF', value: 'GNF'},
    {label: 'RSD', value: 'RSD'},
    {label: 'AWG', value: 'AWG'},
    {label: 'HRK', value: 'HRK'},
    {label: 'TRY', value: 'TRY'},
    {label: 'MAD', value: 'MAD'},
    {label: 'PHP', value: 'PHP'},
    {label: 'BBD', value: 'BBD'},
    {label: 'NGN', value: 'NGN'},
    {label: 'HKD', value: 'HKD'},
    {label: 'CLP', value: 'CLP'},
    {label: 'GIP', value: 'GIP'},
    {label: 'FKP', value: 'FKP'},
    {label: 'MOP', value: 'MOP'},
    {label: 'EGP', value: 'EGP'},
    {label: 'HUF', value: 'HUF'},
    {label: 'PLN', value: 'PLN'},
    {label: 'AUD', value: 'AUD'},
    {label: 'SBD', value: 'SBD'},
    {label: 'LRD', value: 'LRD'},
    {label: 'SGD', value: 'SGD'},
    {label: 'ALL', value: 'ALL'},
    {label: 'NPR', value: 'NPR'},
    {label: 'MUR', value: 'MUR'},
    {label: 'IQD', value: 'IQD'},
    {label: 'NOK', value: 'NOK'},
    {label: 'SOS', value: 'SOS'},
    {label: 'BND', value: 'BND'},
    {label: 'CNY', value: 'CNY'},
    {label: 'SLL', value: 'SLL'},
    {label: 'TTD', value: 'TTD'},
    {label: 'AED', value: 'AED'},
    {label: 'SVC', value: 'SVC'},
    {label: 'BTC', value: 'BTC'},
    {label: 'KWD', value: 'KWD'},
    {label: 'KRW', value: 'KRW'},
    {label: 'CAD', value: 'CAD'},
    {label: 'KHR', value: 'KHR'},
    {label: 'LBP', value: 'LBP'},
    {label: 'XDR', value: 'XDR'},
    {label: 'CHF', value: 'CHF'},
    {label: 'ILS', value: 'ILS'},
    {label: 'RWF', value: 'RWF'},
    {label: 'AOA', value: 'AOA'},
    {label: 'SZL', value: 'SZL'},
    {label: 'PEN', value: 'PEN'},
    {label: 'KGS', value: 'KGS'},
    {label: 'JPY', value: 'JPY'},
    {label: 'UYU', value: 'UYU'},
    {label: 'XOF', value: 'XOF'},
    {label: 'NIO', value: 'NIO'},
    {label: 'BDT', value: 'BDT'},
    {label: 'AMD', value: 'AMD'},
    {label: 'CUC', value: 'CUC'},
    {label: 'PGK', value: 'PGK'},
    {label: 'GEL', value: 'GEL'},
    {label: 'HNL', value: 'HNL'},
    {label: 'TZS', value: 'TZS'},
    {label: 'KZT', value: 'KZT'},
    {label: 'LAK', value: 'LAK'},
    {label: 'ANG', value: 'ANG'},
    {label: 'BAM', value: 'BAM'},
    {label: 'MGA', value: 'MGA'},
    {label: 'AZN', value: 'AZN'},
    {label: 'ERN', value: 'ERN'},
    {label: 'THB', value: 'THB'},
    {label: 'MNT', value: 'MNT'},
    {label: 'PAB', value: 'PAB'},
    {label: 'QAR', value: 'QAR'},
    {label: 'GHS', value: 'GHS'},
    {label: 'MVR', value: 'MVR'},
    {label: 'CZK', value: 'CZK'},
    {label: 'IRR', value: 'IRR'},
    {label: 'SRD', value: 'SRD'},
    {label: 'GBP', value: 'GBP'},
    {label: 'BTN', value: 'BTN'},
    {label: 'COP', value: 'COP'},
    {label: 'CRC', value: 'CRC'},
    {label: 'WST', value: 'WST'},
    {label: 'GMD', value: 'GMD'},
    {label: 'XPF', value: 'XPF'},
    {label: 'KPW', value: 'KPW'},
    {label: 'MWK', value: 'MWK'},
    {label: 'TOP', value: 'TOP'},
    {label: 'NZD', value: 'NZD'},
    {label: 'DJF', value: 'DJF'},
    {label: 'XCD', value: 'XCD'},
    {label: 'ISK', value: 'ISK'},
    {label: 'RUB', value: 'RUB'},
    {label: 'BZD', value: 'BZD'},
    {label: 'BHD', value: 'BHD'},
    {label: 'ETB', value: 'ETB'},
    {label: 'SHP', value: 'SHP'},
    {label: 'ARS', value: 'ARS'},
    {label: 'MKD', value: 'MKD'},
    {label: 'BWP', value: 'BWP'},
    {label: 'SDG', value: 'SDG'},
    {label: 'BRL', value: 'BRL'},
    {label: 'SEK', value: 'SEK'},
    {label: 'MXN', value: 'MXN'},
    {label: 'HTG', value: 'HTG'},
    {label: 'SCR', value: 'SCR'},
    {label: 'TWD', value: 'TWD'},
    {label: 'DZD', value: 'DZD'},
    {label: 'DOP', value: 'DOP'},
    {label: 'BOB', value: 'BOB'},
    {label: 'JMD', value: 'JMD'},
    {label: 'BMD', value: 'BMD'},
    {label: 'SAR', value: 'SAR'},
    {label: 'GYD', value: 'GYD'},
    {label: 'LKR', value: 'LKR'},
    {label: 'VND', value: 'VND'},
    {label: 'PYG', value: 'PYG'},
    {label: 'TND', value: 'TND'},
    {label: 'MDL', value: 'MDL'},
    {label: 'LSL', value: 'LSL'},
    {label: 'BGN', value: 'BGN'},
    {label: 'CDF', value: 'CDF'},
    {label: 'FJD', value: 'FJD'},
    {label: 'MYR', value: 'MYR'},
  ]);
  favour.measure === ''
    ? (fav = preference.measurement)
    : (fav = favour.measure);
  const [openmeasure, setmeasureOpen] = useState(false);
  const [measurevalue, setmeasureValue] = useState(fav);
  const [Measurement, setMeasurement] = useState(measurecategory);
  //updatePrice(currvalue); //To set at initial time
  //updateWeight(measurevalue);
  useEffect(() => {
    updatePrice(i, currvalue);
    favour.currency = currvalue;
  }, [currvalue]);
  useEffect(() => {
    updateWeight(i, measurevalue);
    favour.measure = measurevalue;
  }, [measurevalue]);
  // useEffect(() => {
  //   setmeasureOpen(false);
  // }, [curropen]);
  const deleteProduct = () => {
    dispatch(Actions.deleteProduct(i));
  };
  return (
    <View
    // onTouchStart={() => {
    //   setcurrOpen(false);
    //   setmeasureOpen(false);
    // }}
    >
      <Text style={[styles1.body, {marginVertical: 15}]}>
        Product {i + 1}
        {'\n'}
      </Text>
      <Text
        style={[
          {position: 'absolute', right: 0, marginVertical: 15},
          styles1.body,
        ]}
        onPress={deleteProduct}>
        Delete
      </Text>

      <TextInput
        placeholder="Name of Product (optional)"
        placeholderTextColor={'#848484'}
        style={[styles.input, {width: '100%'}]}
        onChangeText={name => {
          onChangeName(name, i);
        }}></TextInput>
      <Text>{'\n'}</Text>
      <TextInput
        keyboardType="numeric"
        placeholder="Price"
        placeholderTextColor={'#848484'}
        style={[styles.input, {width: '66.66%'}]}
        onChangeText={price => {
          onChangePrice(price, i);
        }}></TextInput>
      <DropDownPicker
        placeholder=""
        style={[styles1.dropdown, styles.dropdown]}
        dropDownContainerStyle={[
          styles1.dropdownContainer,
          styles1.dropdown,
          {
            width: '30%',
            position: 'absolute',
            right: 0,
            marginTop: -50,
            zIndex: 100,
          },
        ]}
        open={curropen}
        value={currvalue}
        items={Currency}
        setOpen={setcurrOpen}
        setValue={setcurrValue}
        setItems={setCurrency}
        listMode="SCROLLVIEW"
      />
      <Text>{'\n'}</Text>
      <TextInput
        keyboardType="numeric"
        placeholder="Weight"
        placeholderTextColor={'#848484'}
        style={[styles.input, {width: '66.66%'}]}
        onChangeText={weight => {
          onChangeWeight(weight, i);
        }}></TextInput>
      <DropDownPicker
        placeholder=""
        style={[styles1.dropdown, styles.dropdown]}
        open={openmeasure}
        value={measurevalue}
        items={Measurement}
        setOpen={setmeasureOpen}
        setValue={setmeasureValue}
        listMode="SCROLLVIEW"
        setItems={setMeasurement}
        dropDownContainerStyle={[
          styles1.dropdownContainer,
          styles1.dropdown,
          {
            width: '30%',
            position: 'absolute',
            right: 0,
            marginTop: -50,
            zIndex: 100,
          },
        ]}
      />
      <View style={styles.line} />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 11,
    marginTop: -25,
    color: '#000000',
  },
  line: {
    borderBottomColor: '#DBDBDB',
    borderBottomWidth: 1,
    marginTop: 20,
  },
  dropdown: {
    width: '30%',
    position: 'absolute',
    right: 0,
    marginTop: -50,
    zIndex: 1,
  },
});
