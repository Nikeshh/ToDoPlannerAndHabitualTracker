import React, {Component, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import Todo from './Todo.js';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: '09-10-2020'
        };
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <DatePicker
                        style={styles.datePickerStyle}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="DD-MM-YYYY"
                        minDate="01-01-2016"
                        maxDate="01-01-2019"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0,
                            },
                            dateInput: {
                            marginLeft: 36,
                            },
                        }}
                        onDateChange={(date) => {
                            this.setState({ date: date })
                        }}
                    />
                    <Todo />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      justifyContent: 'center',
    },
    title: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      padding: 20,
    },
    datePickerStyle: {
      width: 200,
      marginTop: 20,
    },
});