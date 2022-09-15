import * as Actions from '../actions';
const initialState: any = {
  preference: {
    setstatus: false,
    currency: '',
    measurement: '',
  },
  products: [],
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
        products: action.payload,
      };
    default:
      return state;
  }
};
