import React, {useState, useEffect} from 'react';
import {
  Alert,
  BackHandler,
  Image,
  StyleSheet,
  TouchableHighlight,
  useWindowDimensions,
  View,
} from 'react-native';
import {Text} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {GetPrecedence} from './Services/ServiceFns';
import {SingleProduct} from './SingleProduct';
import * as Actions from './store/actions';
import Header from './header';
import {styles} from './Welcome';
import {styles1} from './Settings';

const Product = (props: {navigation: any}) => {
  const SCREEN_HEIGHT = useWindowDimensions().height;
  const {navigation} = props;
  const product = useSelector((state: any) => state.pricey.products);
  var products = product;
  const preference = useSelector((state: any) => state.pricey.preference);
  const ratelist = useSelector((state: any) => state.pricey.ratelist);
  const [btnbgcolor, setbgcolor] = useState('#808080');
  // let emptyflag: boolean = true;
  // let change: any;
  const [emptyflag, setEmpty] = useState(true);
  const [change, setChange] = useState('');
  useEffect(() => {
    products.map((product: any) => {
      if (
        product.price.unit === '' ||
        product.weight.unit === '' ||
        product.price.value === undefined ||
        product.weight.value === undefined
      ) {
        setEmpty(true);
      } else {
        setEmpty(false);
      }
    });
  }, [change, products]);
  useEffect(() => {
    if (product.length < 2 || emptyflag === true) {
      setbgcolor('#808080');
    } else {
      setbgcolor('#355371');
    }
  }, [emptyflag, products]);
  const dispatch = useDispatch();
  const AddItem: any = () => {
    const data = {
      name: '',
      weight: {value: undefined, unit: preference.measurement},
      price: {value: undefined, unit: preference.currency},
    };
    console.warn('dataaaaa', data);
    dispatch(Actions.setProduct(data));
  };
  const compare: any = () => {
    console.warn('resulttt', product);
    dispatch(Actions.setProductValue(products));
    const precedence: number[] = GetPrecedence(products, ratelist);
    let nan: any;
    precedence.map((item: any) => {
      if (item === null) {
        nan = true;
        console.warn(nan);
      }
    });
    if (product.length < 2 || emptyflag === true) {
      Alert.alert('Failed to Compare', 'Enter required details', [
        {text: 'Ok', style: 'cancel', onPress: () => {}},
      ]);
    } else if (nan) {
      Alert.alert('Failed to Compare', 'Enter required details', [
        {text: 'Ok', style: 'cancel', onPress: () => {}},
      ]);
    } else {
      dispatch(Actions.setPrecedence(precedence));
      dispatch(
        Actions.resetProduct([
          {
            name: '',
            weight: {value: undefined, unit: preference.measurement},
            price: {value: undefined, unit: preference.currency},
          },
          {
            name: '',
            weight: {value: undefined, unit: preference.measurement},
            price: {value: undefined, unit: preference.currency},
          },
        ]),
      );
      navigation.navigate('Result');
    }
  };
  //Value updation
  const onChangeName = (value: string, index: number) => {
    setChange(value);
    products[index].name = value;
  };
  const onChangeWeight = (value: string, index: number) => {
    setChange(value);
    products[index].weight.value = value;
  };
  const onChangePrice = (value: string, index: number) => {
    setChange(value);
    products[index].price.value = value;
  };
  const updatePrice = (i: number, unit: string) => {
    setChange(unit);
    products[i].price.unit = unit;
  };
  const updateWeight = (i: number, unit: string) => {
    setChange(unit);
    products[i].weight.unit = unit;
  };

  //End

  //Back button click
  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e: any) => {
        e.preventDefault();

        // // Prompt the user before leaving the screen
        // Alert.alert('Discard changes?', 'Are you sure to exit?', [
        //   {text: "Don't leave", style: 'cancel', onPress: () => {}},
        //   {
        //     text: 'Discard',
        //     style: 'destructive',
        //     // If the user confirmed, then we dispatch the action we blocked earlier
        //     // This will continue the action that had triggered the removal of the screen
        // //     onPress: () => {
        navigation.dispatch(e.data.action);
        BackHandler.exitApp();
        //   },
        // },
      }),
    [],
  );
  return (
    <View style={styles1.body}>
      <Header navigation={navigation} />
      <View style={[styles1.subbody, {height: SCREEN_HEIGHT - 85}]}>
        <ScrollView>
          {product.map((prod: any, key: number) => (
            <View>
              <SingleProduct
                onChangeName={onChangeName}
                onChangeWeight={onChangeWeight}
                onChangePrice={onChangePrice}
                updateWeight={updateWeight}
                updatePrice={updatePrice}
                i={key}
              />
            </View>
          ))}
          <TouchableHighlight style={styles2.button} onPress={() => AddItem()}>
            <Text style={[styles1.btntext, {marginTop: -7}]}>
              <Image
                style={[styles2.add]}
                resizeMode="cover"
                source={require('../assets/add.png')}
              />
              &nbsp;Add
            </Text>
          </TouchableHighlight>
        </ScrollView>
        <TouchableHighlight
          style={[styles1.button, {backgroundColor: btnbgcolor + ''}]}
          onPress={() => compare()}>
          <Text style={[styles1.btntext, {color: 'white'}]}>Compare</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};
const styles2 = StyleSheet.create({
  button: {
    width: '27.86%',
    height: 40,
    borderRadius: 5,
    justifyContent: 'center', //Centered horizontally
    alignItems: 'center',
    backgroundColor: '#B2CDD8',
    marginBottom: 250,
    marginTop: 20,
  },
  add: {
    width: 24,
    height: 24,
  },
});

export default Product;
