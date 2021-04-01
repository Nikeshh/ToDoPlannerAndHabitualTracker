import React from 'react';
import Launch from './components/Launch';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/Reducers';
import Settings from './components/Settings';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const store = createStore(reducers);
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TrackMe">
          <Stack.Screen name="TrackMe" component={Launch}></Stack.Screen>
          <Stack.Screen name="Settings" component={Settings}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}