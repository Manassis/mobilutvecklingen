import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import {StartPage} from "./src/Pages/1StartPage";

export default function App() {

    const [view, setView] = useState('start');
    const [token, setToken] = useState('');
    const [move, setMove] = useState('');
    const [winner, setWinner] = useState('');


    let display = null;
    if (view === 'start') {
        display = <StartPage setView={setView} setToken={setToken}/>;
    } else if (view === 'playerName') {
        display = <PlayerName setView={setView} token={token}/>;
    } else if (view === 'Opponents') {
        display = <Opponents />;
    } else if (view === 'MakeMove') {
        display = <MakeMove setMove={setMove} token={token}/>;
    } else if (view === 'WinLoseDraw') {
        display = <WinLoseDraw setWinner={setWinner} token={token}/>;
    } else {
        return <View>Error</View>
    }

    return (
      <View style={styles.box}>
          <Text style={styles.test}>{token}</Text>
          {display}
      </View>
    );
    // return display
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
