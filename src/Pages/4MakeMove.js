import React, { useState }from 'react';
import {Button, Image, Text, View} from "react-native";

export function MakeMove(props) {

    const [move, setMove] = useState('');

    return (
        <View>
            <Text style={styles.test}>{move}</Text>
            <View> 2-delat med bild import</View>
            <View> 3-delat med clickbara bilder</View>
        </View>
    );
}
