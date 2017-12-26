import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';

export default class LoginScreen extends Component {
    render () {
        return (
            <View>
                <Text> This is the Login Screen </Text>
                <Button onPress={() => 
                this.props.navigation.navigate ('HomeScreen')}
                title= "Go to the Home Screen" />
            </View>
        );
    }
}