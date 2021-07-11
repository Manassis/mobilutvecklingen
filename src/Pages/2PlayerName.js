import React, { useState }from 'react';
import {H2, Text, TextInput, View} from "react-native";

export function PlayerName() {
    return (
        <View>
            <H2>PLAYER</H2>
            <Text>Name yours</Text>
            <TextInput>Ditt namn</TextInput>
        </View>
    );
}
