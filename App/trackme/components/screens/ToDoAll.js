import React, { Component } from 'react';
import { ScrollView } from 'react-native';

class ToDoAll extends Component {

    render() {
        let listItem = [];
        return(
            <ScrollView>
                { listItem }
            </ScrollView>
        );
    }
}

export default ToDoAll;