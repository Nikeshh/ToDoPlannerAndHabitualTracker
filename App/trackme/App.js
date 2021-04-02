import React from 'react';
import Launch from './components/Launch';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/Reducers';
import Login from './components/Login';
import Register from './components/Register';
import Settings from './components/Settings';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const store = createStore(reducers);
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login}></Stack.Screen>
          <Stack.Screen name="Register" component={Register}></Stack.Screen>
          <Stack.Screen name="Launch" component={Launch}></Stack.Screen>
          <Stack.Screen name="Settings" component={Settings}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}