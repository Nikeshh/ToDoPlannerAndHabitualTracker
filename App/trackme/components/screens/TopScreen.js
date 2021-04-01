import React, { Component } from 'react';
import { View, TextInput, Button, SectionList, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Appbar } from 'react-native-paper';
import styles from '../styles';
import ToDoAll from './ToDoAll';

class TopScreen extends Component {

    constructor(props){
      super(props);
      this.state = { 
        input: "" 
      };
    }
  
    render() {
  
      updateInput = input => {
        this.setState({ input });
      };
  
      addToDo = () => {
        this.props.addTodo(this.state.input);
        this.setState({ input: "" });
      }
    
      _goBack = () => console.log('Went back');
      _handleSearch = () => console.log('Searching');
      _handleMore = () => console.log('Shown more');

      _showSettings = () => {
        this.props.navigation.navigate('Settings')
      }
  
      return(
        <View>
          <Appbar.Header>
            {/*<Appbar.BackAction onPress={_goBack} />*/}
            <Appbar.Content title="Top" subtitle="Lists all the top todo's to be completed" />
            <Appbar.Action icon="magnify" onPress={_handleSearch} />
            {/*<Appbar.Action icon="dots-vertical" onPress={_handleMore} />*/}
            <Appbar.Action icon="settings" onPress={_showSettings} />
          </Appbar.Header>
          <ScrollView>
            {/*<Data />*/}
            <ToDoAll show_new_todo = { true } screen = "All" />
            {/*<TextInput
              style={styles.input}
              onChangeText={updateInput}
              value={this.state.input}
            />
            <Button
              onPress={addToDo}
              title="+"
              color="#841584"
              accessibilityLabel="Add a todo"
            />*/}
          </ScrollView>
        </View>
      );
    }
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

export default TopScreen;