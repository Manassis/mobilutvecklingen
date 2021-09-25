import React, { useState, useEffect }from 'react';
import {Button, Image, StyleSheet, Text, View} from "react-native";
import LogBoxInspectorFooter from "react-native/Libraries/LogBox/UI/LogBoxInspectorFooter";
import {ADDRESS} from "../service";

export function StartPage(props) {

    const [view, setView] = useState('');

    useEffect(() => {

        // Generera en token här.

        fetch(ADDRESS+ 'auth/token')
            .then(response => response.text())
            .then(token => {
                props.setToken(token);
            });

    }, []);

    return (
        <View style={styles.all}>
            <View style={styles.text}>
                <Text style={styles.size}>WELCOME</Text>
            </View>

            <View style={styles.picview}>
                <Image style={styles.picture1} source={require('../Pictures/Play.png')}/>

            </View>

            <View style={styles.container}>
                <Button style={styles.button} title={"START GAME"} onPress={ () => props.setView("playerName")} />

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightyellow'
    },

    all: {
        backgroundColor: 'lightyellow'

    },

    picview: {
        marginTop: '10%',
        height: '50%',
        display: 'flex',
        flexDirection: 'row',
        textAlignVertical: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightyellow'

    },

    picture1: {
        width: '100%',
        height: '50%',
    },


    text: {
        marginTop: '25%',
        display: 'flex',
        textAlignVertical: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightyellow'

    },

    size: {
        fontSize: 30
    }

});

