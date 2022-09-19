import * as Actions from '../actions';

const weights = ['Ounces', 'Pounds', 'ton', 'g', 'Kg', 'mg'];
const volumes = [
  'fl oz',
  'cup',
  'pint',
  'quart',
  'gallon',
  'Liter',
  'ml',
  'ounce',
];

const lengths = ['in', 'ft', 'yd', 'mi', 'cm', 'm', 'km'];
const Areas = ['sqft', 'sqcm', 'sqm', 'ha', 'sqin', 'sqyd', 'ac'];
const whole = [
  //Weight
  {label: 'g', value: 'g'},
  {label: 'Kg', value: 'Kg'},
  {label: 'mg', value: 'mg'},
  {label: '£', value: 'Pounds'},
  {label: '℥', value: 'Ounces'},
  {label: 't', value: 'ton'},
  //Volume
  {label: 'L', value: 'Liter'},
  {label: 'ml', value: 'ml'},
  {label: 'Ounce', value: 'ounce'},
  {label: 'fl oz', value: 'fl oz'},
  {label: 'cup', value: 'cup'},
  {label: 'pt', value: 'pint'},
  {label: 'qt', value: 'quart'},
  {label: 'gal', value: 'gallon'},
  //length
  {label: 'in', value: 'in'},
  {label: 'cm', value: 'cm'},
  {label: 'm', value: 'm'},
  {label: 'ft', value: 'ft'},
  {label: 'yd', value: 'yd'},
  {label: 'mi', value: 'mi'},
  {label: 'km', value: 'km'},
  //Area
  {label: 'sqft', value: 'sqft'},
  {label: 'sqcm', value: 'sqcm'},
  {label: 'sqm', value: 'sqm'},
  {label: 'ha', value: 'ha'},
  {label: 'sqin', value: 'sqin'},
  {label: 'sqyd', value: 'sqyd'},
  {label: 'ac', value: 'ac'},
];
const weightmeasure = [
  //Weight
  {label: 'g', value: 'g'},
  {label: 'Kg', value: 'Kg'},
  {label: 'mg', value: 'mg'},
  {label: '£', value: 'Pounds'},
  {label: '℥', value: 'Ounces'},
  {label: 't', value: 'ton'},
];
const volumemeasure = [
  //Volume
  {label: 'L', value: 'Liter'},
  {label: 'ml', value: 'ml'},
  {label: 'Ounce', value: 'ounce'},
  {label: 'fl oz', value: 'fl oz'},
  {label: 'cup', value: 'cup'},
  {label: 'pt', value: 'pint'},
  {label: 'qt', value: 'quart'},
  {label: 'gal', value: 'gallon'},
];
const lengthmeasure = [
  //length
  {label: 'in', value: 'in'},
  {label: 'cm', value: 'cm'},
  {label: 'm', value: 'm'},
  {label: 'ft', value: 'ft'},
  {label: 'yd', value: 'yd'},
  {label: 'mi', value: 'mi'},
  {label: 'km', value: 'km'},
];
const Areameasure = [
  //Area
  {label: 'sqft', value: 'sqft'},
  {label: 'sqcm', value: 'sqcm'},
  {label: 'sqm', value: 'sqm'},
  {label: 'ha', value: 'ha'},
  {label: 'sqin', value: 'sqin'},
  {label: 'sqyd', value: 'sqyd'},
  {label: 'ac', value: 'ac'},
];

const initialState: any = {
  preference: {
    setstatus: false,
    currency: '',
    measurement: '',
  },
  measurecategory: {setstatus: false, category: whole},
  products: [
    {
      name: '',
      weight: {value: '', unit: ''},
      price: {value: '', unit: ''},
    },
    {
      name: '',
      weight: {value: '', unit: ''},
      price: {value: '', unit: ''},
    },
  ],
  precedence: [],
  ratelist: {},
  // products: {
  //   name: '',
  //   weight: {
  //     value: 0,
  //     unit: '',
  //   },
  //   currency: {
  //     value: 0,
  //     unit: '',
  //   },
  // },
};

export const pricyReducer = (state = initialState, action: any) => {
  var copylist;
  switch (action.type) {
    case Actions.SET_PREFERENCE:
      return {
        ...state,
        preference: action.payload,
      };
    case Actions.SET_PRODUCTS:
      copylist = [...state.products];
      copylist.push(action.payload);
      // const copylist = [...state.products, action.payload];
      return {
        ...state,
        products: copylist,
      };
    case Actions.SET_PRODUCTVALUES:
      return {
        ...state,
        products: action.payload,
      };
    case Actions.SET_PRECEDENCE:
      return {
        ...state,
        precedence: action.payload,
      };
    case Actions.DELETE_PRODUCT:
      copylist = [...state.products];
      copylist.splice(action.payload, 1);
      return {
        ...state,
        products: copylist,
      };
    case Actions.SET_RATE:
      return {
        ...state,
        ratelist: action.payload,
      };
    case Actions.RESET_PRODUCT:
      return {
        ...state,
        products: [
          {
            name: '',
            weight: {value: '', unit: ''},
            price: {value: '', unit: ''},
          },
          {
            name: '',
            weight: {value: '', unit: ''},
            price: {value: '', unit: ''},
          },
        ],
      };
    case Actions.SET_MEASURE_CATEGORY:
      let category: any;
      if (weights.includes(action.payload)) {
        category = weightmeasure;
      } else if (volumes.includes(action.payload)) {
        category = volumemeasure;
      } else if (lengths.includes(action.payload)) {
        category = lengthmeasure;
      } else if (Areas.includes(action.payload)) {
        category = Areameasure;
      }
      return {
        ...state,
        measurecategory: {setstatus: true, category: category},
      };
    default:
      return state;
  }
};
