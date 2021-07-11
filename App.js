import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import {StartPage} from "./src/Pages/1StartPage";

export default function App() {

  return (
      <View style={styles.container}>
          {StartPage}
          <Text>Press Me</Text>
      </View>
  );
}

const testStyle = StyleSheet.create({
  text: {
    backgroundColor: 'white'
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightyellow',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
