import React, {useEffect, useState, useRef }from 'react';
import { Text, TextInput, View, Button, StyleSheet} from "react-native";
import {ADDRESS} from "../service";

export function StartGame(props) {

    const task = useRef(null);

    const fetchStatus = () => {
        fetch(ADDRESS+ "games/status", {
            method: 'GET',
            headers: {
                token: props.token
            }
        }).then(response => response.json())
            .then(gameStatus => {
                if (gameStatus.status === 'ACTIVE') {
                    clearInterval(task.current);
                    props.setView("MakeMove")
                }
            });
    }

    useEffect(() => {
        task.current = setInterval(fetchStatus, 3000);
    }, [fetchStatus, task]);

    return (
        <View style={styles.container2}>
            <Text>Waiting for your opponent</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container2: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightyellow'
    },

});
