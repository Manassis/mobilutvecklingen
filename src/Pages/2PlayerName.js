import React, { useState }from 'react';
import {StyleSheet, Text, TextInput, View, Button } from "react-native";
import {StartPage} from "./1StartPage";
import { CustomButton } from "../Components/Buttons";
import {ADDRESS} from "../service";

export function PlayerName(props) {

    const [username, setUsername] = useState('');

    return (
        <View style={styles.container}>

                <Text style={styles.size}>PLAYER</Text>

                <View style={styles.name}>
                    <Text>Name yours</Text>
                    <TextInput style={styles.textInput} onChangeText={setUsername}>{username}</TextInput>
                </View>

                <View style={styles.go}>

                    <CustomButton onClick={() => {
                        if (username.trim().length === 0) return;

                        fetch(ADDRESS+ 'user/name', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'token': props.token,
                            },
                            body: JSON.stringify({ name: username })
                        }).then(response => {
                            props.setView("Opponents")

                        });

                    }} text={"GO AHEAD"} />

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
        backgroundColor: 'lightyellow'

    },

    size: {
        fontSize: 30
    },

    name: {
        marginTop: '20%'
    },

    go: {
        width: '100%',
        height: '30%',
        marginTop: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textInput: {
        borderWidth: 1.5
    }

});
