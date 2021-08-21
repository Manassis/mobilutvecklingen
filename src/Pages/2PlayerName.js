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



// <View style={{
//     justifyContent: "center",
//     alignItems: "center"
// }}>
//
//     <View style={{
//         backgroundColor: "lightyellow",
//         marginTop: 20,
//         height: 145,
//         width: 360,
//         justifyContent: "center",
//         alignItems: "center"
//     }}>
//         <Text>PLAY</Text>
//     </View>
//
//     <View style={{
//         backgroundColor: "orange",
//         height: 400,
//         width: 360,
//         justifyContent: "center",
//         alignItems: "center"
//     }}>
//         <Text>THE RPS GAME</Text>
//     </View>
//
//     <View style={{
//         backgroundColor: "lightgreen",
//         height: 145,
//         width: 360,
//         justifyContent: "center",
//         alignItems: "center"
//     }}>
//         <Text>START</Text>
//     </View>
//     <StartPage
//
//     />
//
//
// </View>
