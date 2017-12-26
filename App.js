import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import { StackNavigator } from 'react-navigation'; // Installed NPM Package

import LoginScreen from './Screens/LoginScreen.js'; // Import a Screen from Screens Folder
import HomeScreen from './Screens/HomeScreen.js';  // Import a Screen from Screens Folder


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




// React Navigation Setup: 
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
