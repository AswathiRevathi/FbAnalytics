/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';

export default class App extends Component{
_click=()=>{
alert("clickedd")
}
  render(){
    console.log("insise");
    return(
      <View>
<Button title="Click" onPress={this._click}></Button>
        <Text>FTFFHJ</Text>
      </View>
    );
  }
}