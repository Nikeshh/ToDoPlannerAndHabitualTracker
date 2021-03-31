import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Appbar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TopScreen from './screens/TopScreen';

export default class Todo extends Component {

    render() {
    
      const Tab = createBottomTabNavigator();

        return (
          <NavigationContainer>
              <Tab.Navigator
                  screenOptions={({ route }) => ({
                      tabBarIcon: ({ focused, color, size }) => {
                      let iconName;
                      if (route.name === 'Top') {
                          iconName = focused
                          ? 'ios-information-circle'
                          : 'ios-information-circle-outline';
                      } else {
                          iconName = focused
                          ? 'ios-information-circle'
                          : 'ios-information-circle-outline';
                      }
                      return <Ionicons name={iconName} size={size} color={color} />;
                      },
                  })}
                  tabBarOptions={{
                      activeTintColor: 'tomato',
                      inactiveTintColor: 'gray',
                  }}
                  >
                  <Tab.Screen name="Top" component={TopScreen} />
                  <Tab.Screen name="ToDo" component={ToDoScreen} />
                  <Tab.Screen name="Completed" component={CompletedScreen} />
                  <Tab.Screen name="All" component={AllScreen} />
                  <Tab.Screen name="Juggle" component={JuggleScreen} />
              </Tab.Navigator>
         </NavigationContainer>
      );
    }
}

class ToDoScreen extends Component {
  render() {
    return(
      <View>
        <Appbar.Header>
          <Appbar.BackAction onPress={_goBack} />
          <Appbar.Content title="Todo" subtitle="List all the todo's not completed" />
          <Appbar.Action icon="magnify" onPress={_handleSearch} />
          <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
        </Appbar.Header>
      </View>
    );
  }
}

class CompletedScreen extends Component {
  render() {
    return(
      <View>
        <Appbar.Header>
          <Appbar.BackAction onPress={_goBack} />
          <Appbar.Content title="Completed" subtitle="Lists all the completed todo's" />
          <Appbar.Action icon="magnify" onPress={_handleSearch} />
          <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
        </Appbar.Header>
      </View>
    );
  }
}

class AllScreen extends Component {
  render() {
    return(
      <View>
        <Appbar.Header>
          <Appbar.BackAction onPress={_goBack} />
          <Appbar.Content title="All" subtitle="Lists all the todo's" />
          <Appbar.Action icon="magnify" onPress={_handleSearch} />
          <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
        </Appbar.Header>
      </View>
    );
  }
}

class JuggleScreen extends Component {
  render() {
    return(
      <View>
        <Appbar.Header>
          <Appbar.BackAction onPress={_goBack} />
          <Appbar.Content title="Juggle" subtitle="Juggles and give you a list of todo's" />
          <Appbar.Action icon="magnify" onPress={_handleSearch} />
          <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
        </Appbar.Header>
      </View>
    );
  }
}