
'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';
export default class AlfanousApp extends Component {
  render() {

    if (Platform.OS === 'android'){
       return(
         <View style={styles.container}>
           <Text style={styles.welcome}>
             Welcome to Alfanous android App!
           </Text>
           <Text style={styles.welcome}>
             مرحبا تطبيق الفانـــوس
           </Text>
         </View>
       );
    }else{
      return(
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to Alfanous ios App!
          </Text>
          <Text style={styles.welcome}>
            مرحبا تطبيق الفانـــوس
          </Text>
        </View>

      );
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
