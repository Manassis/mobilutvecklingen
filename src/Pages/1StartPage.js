import React, { useState }from 'react';
import {Button, Image, Text, View} from "react-native";
import LogBoxInspectorFooter from "react-native/Libraries/LogBox/UI/LogBoxInspectorFooter";

export function StartPage(props) {

    useEffect(() => {

        // Generera en token här

        fetch(ADDRESS+ 'auth/token')
            .then(response => response.text())
            .then(token => {
                props.setToken(token);
            });

    }, []);

    return (
        <View>
            <Text>PLAY</Text>
            <Button title={"START"} onPress={ () => props.setView("playerName")}></Button>

        </View>
    );
}
/*<Image source={require('/Users/mislljud/mobilapp-uppgift/src/Pictures/Rock.png')}/>
<Image source={require('/Users/mislljud/mobilapp-uppgift/src/Pictures/Bag.png')}/>
<Image source={require('/Users/mislljud/mobilapp-uppgift/src/Pictures/Sciccor.png')}/>*/
