import React, { useState }from 'react';
import {Button, Image, Text, View} from "react-native";


export function MakeMove(props) {

    const [move, setMove] = useState('');


    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.move}>MAKE MOVE</Text>
            </View>
            <View>
                { pick }
            </View>


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

            {/*</View>*/}
            <View style={styles.box}>
                <View style={styles.pictureView}>
                    <View>
                        <Image style={styles.picture1} source={require('../Pictures/Rock.png')}/>
                        <Button style={styles.picButton} title={"Choose"} onPress={() => makeMove("ROCK")} />
                    </View>

                    <View>
                        <Image style={styles.picture1} source={require('../Pictures/Sciccor.png')}/>
                        <Button title={"Choose"} onPress={() => makeMove("SCISSORS")} />
                    </View>

                    <View>
                        <Image style={styles.picture1} source={require('../Pictures/Bag.png')}/>
                        <Button title={"Choose"} onPress={() => makeMove("PAPER")} />
                    </View>
                </View>

            </View>

            <View style={styles.box}>
                <Button title={"Exit"} onPress={() => clearInterval(task.current)}/>
            </View>

        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        backgroundColor: 'lightyellow'
    },

    pictureView: {
        display: 'flex',
        flexDirection: 'row',
    },

    picture1: {
        marginRight: '5%',
        marginLeft: '5%',
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },

    picButton: {
        alignContent: 'center'
    },

    box: {
        width: '100%',
        paddingTop:'30%',
        flex: 1,
    },

    move: {
        textAlign:'center',
    },

    test: {
        width: 100,
        height: 100,
    }

});
