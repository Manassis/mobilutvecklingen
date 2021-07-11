import React, { useState }from 'react';
import {Button, Image, Text, View} from "react-native";
import LogBoxInspectorFooter from "react-native/Libraries/LogBox/UI/LogBoxInspectorFooter";

export function StartPage() {
    return (
        <View>
            <H2>PLAY</H2>
            <Image source={require('/Users/mislljud/mobilapp-uppgift/src/Pictures/Rock.png')}/>
            <Image source={require('/Users/mislljud/mobilapp-uppgift/src/Pictures/Bag.png')}/>
            <Image source={require('/Users/mislljud/mobilapp-uppgift/src/Pictures/Sciccor.png')}/>
            <Button>START</Button>
        </View>
    );
}
