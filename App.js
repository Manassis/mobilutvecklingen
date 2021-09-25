import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import {StartPage} from "./src/Pages/1StartPage";
import {PlayerName} from "./src/Pages/2PlayerName";
import {MakeMove} from "./src/Pages/4MakeMove";
import {Opponents} from "./src/Pages/3Opponents";
import {StartGame} from "./src/Pages/StartGame";

export default function App () {

    const [view, setView] = useState('start');
    const [token, setToken] = useState('');
    const [move, setMove] = useState('Make Move');
    const [winner, setWinner] = useState('');


    let display = null;
    if (view === 'start') {
        display = <StartPage setView={setView} setToken={setToken}/>;
    } else if (view === 'playerName') {
        display = <PlayerName setView={setView} token={token}/>;
    } else if (view === 'Opponents') {
        display = <Opponents setView={setView} token={token}/>;
    } else if (view === 'MakeMove') {
        display = <MakeMove setMove={setMove} setView={setView} token={token}/>;
    } else if (view === 'StartGame') {
        display = <StartGame setView={setView} token={token}/>;
    } else {
        return <View>Error</View>
    }

    return (
      <View style={styles.box}>
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

    box: {
        width: '100%',
        height: '100%',
    },

    test: {
        position: 'absolute',
        top: '40%',
        left: '30%'
    }
});
