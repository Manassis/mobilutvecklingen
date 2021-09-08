import React, { useState }from 'react';
import {Button, Image, StyleSheet, Text, View} from "react-native";

export function WinLoseDraw (props) {
    const [winner, setWinner] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.test}>{winner}</Text>

            <View>

                <Button title={"Play again"} onPress={MakeMove}></Button>
                <Button title={"Quit"} onPress={StartPage}></Button>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    }

});
