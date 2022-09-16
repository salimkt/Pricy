export const SET_PREFERENCE = 'SET_PREFERENCE';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_PRODUCTVALUES = 'SET_PRODUCTVALUES';
export const SET_PRECEDENCE = 'SET_PRECEDENCE';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const SET_RATE = 'SET_RATE';
export const SET_MEASURE_CATEGORY = 'SET_MEASURE_CATEGORY';
export const RESET_PRODUCT = 'RESET_PRODUCT';

export const setPreference = (preference: any) => {
  return {
    type: SET_PREFERENCE,
    payload: preference,
  };
};
export const setProduct = (product: any) => {
  return {
    type: SET_PRODUCTS,
    payload: product,
  };
};
export const setProductValue = (product: any) => {
  return {
    type: SET_PRODUCTVALUES,
    payload: product,
  };
};
export const setPrecedence = (precedence: number[]) => {
  return {
    type: SET_PRECEDENCE,
    payload: precedence,
  };
};
export const deleteProduct = (index: any) => {
  return {
    type: DELETE_PRODUCT,
    payload: index,
  };
};
export const setRate = (list: any) => {
  return {
    type: SET_RATE,
    payload: list,
  };
};
export const resetProduct = (list: any) => {
  return {
    type: RESET_PRODUCT,
    payload: list,
  };
};
export const setMeasureCategory = (measure: any) => {
  return {
    type: SET_MEASURE_CATEGORY,
    payload: measure,
  };
};
