import React from 'react';
import Main_nav from './Components/Navigation/Main_nav';
import {createStore, applyMiddleware} from 'redux';
import allReducers from './Components/store/Reducers';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
const store = createStore(allReducers, applyMiddleware(thunk));
const App = () => {
  return (
    <Provider store={store}>
      <Main_nav />
    </Provider>
  );
};
export default App;
