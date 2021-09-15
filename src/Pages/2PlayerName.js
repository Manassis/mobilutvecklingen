import React, { useState }from 'react';
import {StyleSheet, Text, TextInput, View, Button } from "react-native";
import {StartPage} from "./1StartPage";
import { CustomButton } from "../Components/Buttons";

export function PlayerName() {
    return (
        <View>
            <H2>PLAYER</H2>
            <Text>Name yours</Text>
            <TextInput>Ditt namn</TextInput>
        </View>
    );
}

