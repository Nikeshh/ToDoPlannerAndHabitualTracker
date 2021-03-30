import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Appbar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Todo(){

    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');
  
    const _handleMore = () => console.log('Shown more');
  
    function TopScreen() {
      return (
        <View>
          <Appbar.Header>
            <Appbar.BackAction onPress={_goBack} />
            <Appbar.Content title="Top" subtitle="Lists all the top todo's to be completed" />
            <Appbar.Action icon="magnify" onPress={_handleSearch} />
            <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
          </Appbar.Header>
          <ScrollView>
            <Data />
          </ScrollView>
        </View>
      );
    }
  
    function ToDoScreen() {
      return (
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
  
    function CompletedScreen() {
      return (
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
  
    function AllScreen() {
      return (
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
  
    function JuggleScreen() {
      return (
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

const values = [
    {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
    {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
];
  
const Data = () => {
    return (
        <View style={styles.container}>
        <SectionList
            sections={values}
            renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',  
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
});