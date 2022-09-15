import React, {useEffect, useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import * as Actions from './store/actions';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Dimensions,
  Pressable,
  Image,
  useWindowDimensions,
  Alert,
  BackHandler,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Settings = (props: {navigation: any}) => {
  const SCREEN_HEIGHT = useWindowDimensions().height;
  const SCREEN_WIDTH = useWindowDimensions().width;
  var height: number;
  if (SCREEN_HEIGHT < SCREEN_WIDTH) {
    height = SCREEN_HEIGHT + 90;
  } else {
    height = SCREEN_HEIGHT - 300;
  }
  const {navigation} = props;
  const dispatch = useDispatch();
  const preference = useSelector((state: any) => state.pricey.preference);
  const [curropen, setcurrOpen] = useState(false);
  const [currvalue, setcurrValue] = useState(preference.currency);

  const [openmeasure, setmeasureOpen] = useState(false);
  const [measurevalue, setmeasureValue] = useState(preference.measurement);

  const [Currency, setCurrency] = useState([
    {label: 'Euro - EUR', value: 'EUR'},
    {label: 'Omani Rial - OMR', value: 'OMR'},
    {label: 'US Dollar - USD', value: 'USD'},
    {label: 'Indian Rupee - INR', value: 'INR'},
    {label: 'Myanmar Kyat - MMK', value: 'MMK'},
    {label: 'South African Rand - ZAR', value: 'ZAR'},
    {label: 'Tajikistani Somoni - TJS', value: 'TJS'},
    {label: 'Turkmenistani Manat - TMT', value: 'TMT'},
    {label: 'Danish Krone - DKK', value: 'DKK'},
    {label: 'Pakistani Rupee - PKR', value: 'PKR'},
    {label: 'Kenyan Shilling - KES', value: 'KES'},
    {label: 'Uzbekistan Som - UZS', value: 'UZS'},
    {label: 'Bahamian Dollar - BSD', value: 'BSD'},
    {label: 'Guatemalan Quetzal - GTQ', value: 'GTQ'},
    {label: 'Yemeni Rial - YER', value: 'YER'},
    {label: 'Burundian Franc - BIF', value: 'BIF'},
    {label: 'Namibian Dollar - NAD', value: 'NAD'},
    {label: 'Syrian Pound - SYP', value: 'SYP'},
    {label: 'Jordanian Dinar - JOD', value: 'JOD'},
    {label: 'Cape Verdean Escudo - CVE', value: 'CVE'},
    {label: 'Ugandan Shilling - UGX', value: 'UGX'},
    {label: 'Ukrainian Hryvnia - UAH', value: 'UAH'},
    {label: 'Romanian Leu - RON', value: 'RON'},
    {label: 'Vanuatu Vatu - VUV', value: 'VUV'},
    {label: 'Comorian Franc - KMF', value: 'KMF'},
    {label: 'Cayman Islands Dollar - KYD', value: 'KYD'},
    {label: 'São Tomé and Príncipe Dobra - STD', value: 'STD'},
    {label: 'Indonesian Rupiah - IDR', value: 'IDR'},
    {label: 'Libyan Dinar - LYD', value: 'LYD'},
    {label: 'CFA Franc BEAC - XAF', value: 'XAF'},
    {label: 'Guinean Franc - GNF', value: 'GNF'},
    {label: 'Serbian Dinar - RSD', value: 'RSD'},
    {label: 'Aruban Florin - AWG', value: 'AWG'},
    {label: 'Croatian Kuna - HRK', value: 'HRK'},
    {label: 'Turkish Lira - TRY', value: 'TRY'},
    {label: 'Moroccan Dirham - MAD', value: 'MAD'},
    {label: 'Philippine Peso - PHP', value: 'PHP'},
    {label: 'Barbadian Dollar - BBD', value: 'BBD'},
    {label: 'Nigerian Naira - NGN', value: 'NGN'},
    {label: 'Hong Kong Dollar - HKD', value: 'HKD'},
    {label: 'Chilean Peso - CLP', value: 'CLP'},
    {label: 'Gibraltar Pound - GIP', value: 'GIP'},
    {label: 'Falkland Islands Pound - FKP', value: 'FKP'},
    {label: 'Macanese Pataca - MOP', value: 'MOP'},
    {label: 'Egyptian Pound - EGP', value: 'EGP'},
    {label: 'Hungarian Forint - HUF', value: 'HUF'},
    {label: 'Polish Zloty - PLN', value: 'PLN'},
    {label: 'Australian Dollar - AUD', value: 'AUD'},
    {label: 'Solomon Islands Dollar - SBD', value: 'SBD'},
    {label: 'Liberian Dollar - LRD', value: 'LRD'},
    {label: 'Singapore Dollar - SGD', value: 'SGD'},
    {label: 'Albanian Lek - ALL', value: 'ALL'},
    {label: 'Nepalese Rupee - NPR', value: 'NPR'},
    {label: 'Mauritian Rupee - MUR', value: 'MUR'},
    {label: 'Iraqi Dinar - IQD', value: 'IQD'},
    {label: 'Norwegian Krone - NOK', value: 'NOK'},
    {label: 'Somali Shilling - SOS', value: 'SOS'},
    {label: 'Brunei Dollar - BND', value: 'BND'},
    {label: 'Chinese Yuan - CNY', value: 'CNY'},
    {label: 'Sierra Leonean Leone - SLL', value: 'SLL'},
    {label: 'Trinidad & Tobago Dollar - TTD', value: 'TTD'},
    {label: 'United Arab Emirates Dirham - AED', value: 'AED'},
    {label: 'Salvadoran ColÃ³n - SVC', value: 'SVC'},
    {label: 'Bitcoin - BTC', value: 'BTC'},
    {label: 'Kuwaiti Dinar - KWD', value: 'KWD'},
    {label: 'South Korean Won - KRW', value: 'KRW'},
    {label: 'Canadian Dollar - CAD', value: 'CAD'},
    {label: 'Cambodian Riel - KHR', value: 'KHR'},
    {label: 'Lebanese Pound - LBP', value: 'LBP'},
    {label: 'Special Drawing Rights - XDR', value: 'XDR'},
    {label: 'Swiss Franc - CHF', value: 'CHF'},
    {label: 'Israeli New Sheqel - ILS', value: 'ILS'},
    {label: 'Rwandan Franc - RWF', value: 'RWF'},
    {label: 'Angolan Kwanza - AOA', value: 'AOA'},
    {label: 'Swazi Lilangeni - SZL', value: 'SZL'},
    {label: 'Peruvian Nuevo Sol - PEN', value: 'PEN'},
    {label: 'Kyrgystani Som - KGS', value: 'KGS'},
    {label: 'Japanese Yen - JPY', value: 'JPY'},
    {label: 'Uruguayan Peso - UYU', value: 'UYU'},
    {label: 'CFA Franc BCEAO - XOF', value: 'XOF'},
    {label: 'Nicaraguan CÃ³rdoba - NIO', value: 'NIO'},
    {label: 'Bangladeshi Taka - BDT', value: 'BDT'},
    {label: 'Armenian Dram - AMD', value: 'AMD'},
    {label: 'Cuban Convertible Peso - CUC', value: 'CUC'},
    {label: 'Papua New Guinean Kina - PGK', value: 'PGK'},
    {label: 'Georgian Lari - GEL', value: 'GEL'},
    {label: 'Honduran Lempira - HNL', value: 'HNL'},
    {label: 'Tanzanian Shilling - TZS', value: 'TZS'},
    {label: 'Kazakhstani Tenge - KZT', value: 'KZT'},
    {label: 'Laotian Kip - LAK', value: 'LAK'},
    {label: 'Netherlands Antillean Guilder - ANG', value: 'ANG'},
    {label: 'Bosnia-Herzegovina Convertible Mark - BAM', value: 'BAM'},
    {label: 'Malagasy Ariary - MGA', value: 'MGA'},
    {label: 'Azerbaijani Manat - AZN', value: 'AZN'},
    {label: 'Eritrean Nakfa - ERN', value: 'ERN'},
    {label: 'Thai Baht - THB', value: 'THB'},
    {label: 'Mongolian Tugrik - MNT', value: 'MNT'},
    {label: 'Panamanian Balboa - PAB', value: 'PAB'},
    {label: 'Qatari Rial - QAR', value: 'QAR'},
    {label: 'Ghanaian Cedi - GHS', value: 'GHS'},
    {label: 'Maldivian Rufiyaa - MVR', value: 'MVR'},
    {label: 'Czech Republic Koruna - CZK', value: 'CZK'},
    {label: 'Iranian Rial - IRR', value: 'IRR'},
    {label: 'Surinamese Dollar - SRD', value: 'SRD'},
    {label: 'British Pound Sterling - GBP', value: 'GBP'},
    {label: 'Bhutanese Ngultrum - BTN', value: 'BTN'},
    {label: 'Colombian Peso - COP', value: 'COP'},
    {label: 'Costa Rican ColÃ³n - CRC', value: 'CRC'},
    {label: 'Samoan Tala - WST', value: 'WST'},
    {label: 'Gambian Dalasi - GMD', value: 'GMD'},
    {label: 'CFP Franc - XPF', value: 'XPF'},
    {label: 'North Korean Won - KPW', value: 'KPW'},
    {label: 'Malawian Kwacha - MWK', value: 'MWK'},
    {label: "Tongan Pa'anga - TOP", value: 'TOP'},
    {label: 'New Zealand Dollar - NZD', value: 'NZD'},
    {label: 'Djiboutian Franc - DJF', value: 'DJF'},
    {label: 'East Caribbean Dollar - XCD', value: 'XCD'},
    {label: 'Icelandic KrÃ³na - ISK', value: 'ISK'},
    {label: 'Russian Ruble - RUB', value: 'RUB'},
    {label: 'Belize Dollar - BZD', value: 'BZD'},
    {label: 'Bahraini Dinar - BHD', value: 'BHD'},
    {label: 'Ethiopian Birr - ETB', value: 'ETB'},
    {label: 'St. Helena Pound - SHP', value: 'SHP'},
    {label: 'Argentine Peso - ARS', value: 'ARS'},
    {label: 'Macedonian Denar - MKD', value: 'MKD'},
    {label: 'Botswanan Pula - BWP', value: 'BWP'},
    {label: 'Sudanese Pound - SDG', value: 'SDG'},
    {label: 'Brazilian Real - BRL', value: 'BRL'},
    {label: 'Swedish Krona - SEK', value: 'SEK'},
    {label: 'Mexican Peso - MXN', value: 'MXN'},
    {label: 'Haitian Gourde - HTG', value: 'HTG'},
    {label: 'Seychellois Rupee - SCR', value: 'SCR'},
    {label: 'New Taiwan Dollar - TWD', value: 'TWD'},
    {label: 'Algerian Dinar - DZD', value: 'DZD'},
    {label: 'Dominican Peso - DOP', value: 'DOP'},
    {label: 'Bolivian Boliviano - BOB', value: 'BOB'},
    {label: 'Jamaican Dollar - JMD', value: 'JMD'},
    {label: 'Bermudan Dollar - BMD', value: 'BMD'},
    {label: 'Saudi Riyal - SAR', value: 'SAR'},
    {label: 'Guyanaese Dollar - GYD', value: 'GYD'},
    {label: 'Sri Lankan Rupee - LKR', value: 'LKR'},
    {label: 'Vietnamese Dong - VND', value: 'VND'},
    {label: 'Paraguayan Guarani - PYG', value: 'PYG'},
    {label: 'Tunisian Dinar - TND', value: 'TND'},
    {label: 'Moldovan Leu - MDL', value: 'MDL'},
    {label: 'Lesotho Loti - LSL', value: 'LSL'},
    {label: 'Bulgarian Lev - BGN', value: 'BGN'},
    {label: 'Congolese Franc - CDF', value: 'CDF'},
    {label: 'Fijian Dollar - FJD', value: 'FJD'},
    {label: 'Malaysian Ringgit - MYR', value: 'MYR'},
  ]);
  const [Measurement, setMeasurement] = useState([
    {label: 'Gram - g', value: 'g'},
    {label: 'Kilogram - Kg', value: 'Kg'},
    {label: 'Pounds - Pounds', value: 'Pounds'},
  ]);
  const updateSettings = () => {
    let ob = {setstatus: true, currency: currvalue, measurement: measurevalue};
    dispatch(Actions.setPreference(ob));
    navigation.navigate('Product');
  };

  return (
    <View style={styles1.body}>
      <ScrollView>
        <View
          style={[
            styles1.subbody,
            {
              height: height,
            },
          ]}>
          <Pressable
            style={styles1.close}
            onPress={() => navigation.navigate('Product')}>
            <Image resizeMode="cover" source={require('../assets/close.png')} />
          </Pressable>
          <Text style={styles1.titletext}>Choose your preference {'\n'}</Text>
          <Text style={styles1.itemtext}>{'\n'}Currency</Text>
          <DropDownPicker
            placeholder="Currency"
            placeholderStyle={{color: '#848484'}}
            style={[styles1.dropdown, {zIndex: 1}]}
            open={curropen}
            value={currvalue}
            items={Currency}
            setOpen={setcurrOpen}
            setValue={setcurrValue}
            setItems={setCurrency}
            listMode="SCROLLVIEW"
            dropDownContainerStyle={[
              styles1.dropdownContainer,
              styles1.dropdown,
            ]}
          />
          <Text>{'\n'}</Text>
          <View style={styles1.line}></View>
          <Text style={styles1.itemtext}>{'\n'}Unit of Measurement</Text>
          <DropDownPicker
            placeholder="Unit of Measurement"
            placeholderStyle={{color: '#848484'}}
            style={[styles1.dropdown, {zIndex: 1}]}
            open={openmeasure}
            value={measurevalue}
            items={Measurement}
            setOpen={setmeasureOpen}
            setValue={setmeasureValue}
            setItems={setMeasurement}
            listMode="SCROLLVIEW"
            dropDownContainerStyle={[
              styles1.dropdownContainer,
              styles1.dropdown,
            ]}
          />
        </View>
      </ScrollView>
      <View style={[styles1.bottom, styles1.subbody]}>
        <TouchableOpacity
          style={[
            styles1.button,
            {
              backgroundColor: '#355371',
            },
          ]}
          onPress={updateSettings}>
          <Text style={[styles1.btntext, {color: '#fff'}]}>Submit</Text>
        </TouchableOpacity>

        <TouchableHighlight
          style={[styles1.button, {marginBottom: 20}]}
          onPress={() => navigation.navigate('Product')}>
          <Text
            style={[
              styles1.btntext,
              {
                color: '#355371',
              },
            ]}>
            Skip
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};
export const styles1 = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    color: '#404041',
    fontFamily: 'Mulish',
    fontSize: 12,
    fontWeight: '700',
  },
  subbody: {
    width: '87.2%',
    alignSelf: 'center',
  },
  titletext: {
    marginTop: 77,
    fontSize: 18,
    color: '#404041',
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: '700',
  },
  itemtext: {
    fontSize: 16,
    color: '#404041',
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: '700',
    margin: 3,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 44,
    marginBottom: 5,
    borderRadius: 5,
    justifyContent: 'center', //Centered horizontally
    alignItems: 'center', //Centered vertically
  },

  btntext: {
    fontWeight: '700',
  },
  dropdown: {borderColor: '#fff'},
  dropdownContainer: {
    zIndex: 100,
    elevation: 5,
  },
  line: {
    backgroundColor: '#848484',
    width: '100%',
    height: 1,
  },
  bottom: {justifyContent: 'space-between', marginTop: 'auto'},
  close: {position: 'absolute', right: 0, marginTop: 23},
});

export default Settings;
