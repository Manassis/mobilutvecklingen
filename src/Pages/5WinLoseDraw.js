import React, { useState }from 'react';
import {Button, Image, Text, View} from "react-native";

export function WinLoseDraw (props) {
    const [winner, setWinner] = useState('');

    return (
        <View>
            <Text style={styles.test}>{winner}</Text>
            <View>
                <Button title={""} onPress={""}>Play again</Button>
                <Button title={""} onPress={""}>Quit</Button>
            </View>
        </View>
    );
}
