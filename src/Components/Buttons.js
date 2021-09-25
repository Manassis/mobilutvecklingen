import React, { useState }from 'react';
import {Button, Image, StyleSheet, Text, View} from "react-native";

// onClick, text

export function CustomButton(props) {
    return (
        <Button style={styles.custombutton1} onPress={props.onClick} title={props.text}></Button>
    );
}
const styles = StyleSheet.create({
    custombutton1: {
        width: '50%',
        height: '100%'
    }

});
