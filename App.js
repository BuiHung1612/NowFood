import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import AppStack from './navigation/AppStack';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import Login from './Screens/Login';

let store = createStore(rootReducer);
const App = () => {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
