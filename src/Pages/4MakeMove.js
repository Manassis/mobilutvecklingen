import React, { useState }from 'react';
import {Button, Image, Text, View} from "react-native";


export function MakeMove(props) {

    const [move, setMove] = useState('');


    return (
        <View style={styles.container}>
            <Text>MAKE MOVE</Text>

            <View>
                <View>
                    {/*<Image*/}
                    {/*    style={{*/}
                    {/*        resizeMode: "cover",*/}
                    {/*        height: 100,*/}
                    {/*        width: 210*/}
                    {/*    }}*/}
                    {/*    source={require("")}*/}
                    {/*/>*/}
                </View>
                <View>
                    {/*<Image*/}
                    {/*    style={{*/}
                    {/*        resizeMode: "contain",*/}
                    {/*        height: 100,*/}
                    {/*        width: 200*/}
                    {/*    }}*/}
                    {/*    source={require("")}*/}
                    {/*/>*/}
                </View>
                <View style={styles.picview}>
                    <Image style={styles.picture1} source={require('/Users/mislljud/mobilapp-uppgift/src/Pictures/Rock.png')}/>
                    <Image style={styles.picture1} source={require('/Users/mislljud/mobilapp-uppgift/src/Pictures/Sciccor.png')}/>
                    <Image style={styles.picture1} source={require('/Users/mislljud/mobilapp-uppgift/src/Pictures/Bag.png')}/>
                </View>

            </View>

            <Button title={props.text} onPress={props.onClick}/>
            <Button title={props.text} onPress={props.onClick}/>
            <Button title={props.text} onPress={props.onClick}/>
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

    }

});
