import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import { Appbar } from 'react-native-paper';
import styles from '../components/styles';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import ColorPalette from 'react-native-color-palette';

export default class Settings extends Component {
    render(){
        this.state = {
            templates: ['template1'],
            number: '3',
            background: '#fff'
        }

        onChangeTopCount = (value) => {

        }

        let selectedColor = '#C0392B';

        return(
            <View style={styles}>
                <Appbar.Header>
                    <Appbar.Content title="Settings" subtitle="You can change the settings here!" />
                </Appbar.Header>
                <Text>Template : </Text>
                <DropDownPicker
                    items={[
                        {label: 'Template1', value: 'template1', icon: () => <Icon name="flag" size={18} color="#900" />},
                        {label: 'Template2', value: 'template2', icon: () => <Icon name="flag" size={18} color="#900" />},
                    ]}
                    multiple={true}
                    multipleText="%d items have been selected."
                    min={0}
                    max={10}
                    defaultValue={this.state.templates}
                    containerStyle={{height: 40}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    onChangeItem={item => this.setState({
                        templates: item
                    })}
                />
                <Text>Color : </Text>
                <ColorPalette
                    onChange={color => selectedColor = color}
                    value={selectedColor}
                    colors={['#C0392B', '#E74C3C', '#9B59B6', '#8E44AD', '#2980B9']}
                    title={"Controlled Color Palette:"}
                    icon={
                        <Icon name={'check-circle-o'} size={25} color={'black'} />
                    }
                />
                <Text>Top Items Count : </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeTopCount}
                    value={this.state.number}
                    placeholder="Enter the top items count value"
                    keyboardType="numeric"
                />
            </View>
        )
    }
}