import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import {StackNavigator} from 'react-navigation';

import LoginScreen from './Screens/LoginScreen.js';
import HomeScreen from './Screens/HomeScreen.js';


export default class App extends React.Component {
  constructor () {
    super();
    this.state = {
    }
  }
  render() {
    return (
     <AppNavigator />
    );
  }
}


const AppNavigator = StackNavigator ({
  LoginScreen: {screen: LoginScreen},
  HomeScreen: {screen: HomeScreen}


})




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
