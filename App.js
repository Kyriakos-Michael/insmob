import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';




export default class App extends React.Component {
  constructor () {
    super();
    this.state = {

    }

  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight><Text>Hello</Text></TouchableHighlight>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
