/* eslint-disable no-unused-vars */
import {combineReducers} from 'redux';
import {pricyReducer} from './pricey.reducer';

const allReducers = combineReducers({
  pricey: pricyReducer,
});

export default allReducers;
