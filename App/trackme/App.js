import React from 'react';
import { StyleSheet, View } from 'react-native';
import Launch from './components/Launch';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/Reducers'

export default function App() {
  const store = createStore(reducers);
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Launch />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',  
  }
});
