import React, {useRef, useState} from 'react'
import {Button, Image, StyleSheet, Text, View} from "react-native";
import {ADDRESS} from "../service";

const ROCK_IMAGE = require('../Pictures/Rock.png');
const SCISSORS_IMAGE = require('../Pictures/Sciccor.png');
const PAPER_IMAGE = require('../Pictures/Bag.png');


export function MakeMove(props) {

    const [view, setView] = useState('start');
    const [gameStatus, setGameStatus] = useState(null);
    const [hasPicked, setHasPicked] = useState(false);
    const task = useRef(null);

    const fetchStatus = () => {
        fetch(ADDRESS + "games/status", {
            method: 'GET',
            headers: {
                token: props.token
            }
        }).then(response => response.json())
            .then(gameStatus => {
                setGameStatus(gameStatus);
            });
    }

    const makeMove = move => {
        setHasPicked(true);
        fetch(ADDRESS + "games/move/" + move, {
            method: 'GET',
            headers: {
                token: props.token
            }
        }).then(response => response.json())
            .then(gameStatus => {
                console.log(gameStatus);
                setGameStatus(gameStatus);

                task.current = setInterval(() => {

                    fetchStatus();

                }, 3000);
            });
    }


    // setInterval
    // clearInterval

    let pick = <></>;
    let opponentPick = <></>;
    let winner = gameStatus;
    let youLose = gameStatus;

    if (gameStatus !== null) {
        if (gameStatus.playerMove.localeCompare("ROCK") === 0) {
            pick = <Image style={styles.picture1} source={ROCK_IMAGE} onPress={() => {
            }}/>;
        } else if (gameStatus.playerMove.localeCompare("PAPER") === 0) {
            pick = <Image style={styles.picture1} source={PAPER_IMAGE} onPress={() => {
            }}/>;
        } else if (gameStatus.playerMove.localeCompare("SCISSORS") === 0) {
            pick = <Image style={styles.picture1} source={SCISSORS_IMAGE} onPress={() => {
            }}/>;
        }

        if (gameStatus.opponentMove.localeCompare("ROCK") === 0) {
            opponentPick = <Image style={styles.picture1} source={ROCK_IMAGE} onPress={() => {
            }}/>;
        } else if (gameStatus.opponentMove.localeCompare("PAPER") === 0) {
            opponentPick = <Image style={styles.picture1} source={PAPER_IMAGE} onPress={() => {
            }}/>;
        } else if (gameStatus.opponentMove.localeCompare("SCISSORS") === 0) {
            opponentPick = <Image style={styles.picture1} source={SCISSORS_IMAGE} onPress={() => {
            }}/>;
        }
    }



    return (
        <View style={styles.container}>

            <View style={styles.box}>
                {
                    function() {
                        if (gameStatus === null) {
                            if (hasPicked) return (<Text style={styles.move}>WAITING</Text>);
                            else return (<Text style={styles.move}>MAKE YOUR MOVE</Text>);
                        }
                        else if (gameStatus.status === 'WIN') return (<Text style={styles.move}>YOU WIN</Text>);
                        else if (gameStatus.status === 'LOSE') return (<Text style={styles.move}>YOU LOSE</Text>);
                        else if (gameStatus.status === 'DRAW') return (<Text style={styles.move}>YOU DRAW</Text>);
                        else {
                            if (hasPicked) return (<Text style={styles.move}>WAITING</Text>);
                            else return (<Text style={styles.move}>MAKE YOUR MOVE</Text>);
                        }
                    }()
                }
            </View>

            <View style={styles.moves}>

                <View>
                    <Text>Player Move</Text>
                    { pick }
                </View>
                <View>
                    <Text>Opponent Move:</Text>
                    { opponentPick }
                </View>

            </View>

            {
                !hasPicked && (
                <View style={styles.box}>
                    <View style={styles.pictureView}>
                        <View style={styles.buttonContainer}>
                            <View>
                                <Image style={styles.picture1} source={require('../Pictures/Rock.png')}/>
                            </View>
                            <View>
                                <Button style={styles.picButton} title={"Choose"} onPress={() => makeMove("ROCK")}/>
                            </View>
                        </View>

                        <View style={styles.buttonContainer}>
                            <View>
                                <Image style={styles.picture1} source={require('../Pictures/Sciccor.png')}/>
                            </View>
                            <View>
                                <Button title={"Choose"} onPress={() => makeMove("SCISSORS")}/>
                            </View>
                        </View>

                        <View style={styles.buttonContainer}>
                            <View>
                                <Image style={styles.picture1} source={require('../Pictures/Bag.png')}/>
                            </View>
                            <View>
                                <Button title={"Choose"} onPress={() => makeMove("PAPER")}/>
                            </View>
                        </View>
                    </View>

                </View>
                )
            }

            <View style={styles.box}>
                <Button title={"Play Again"} onPress={() => props.setView("playerName")}/>
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
        justifyContent: 'center',
    },

    picture1: {
        marginRight: '5%',
        marginLeft: '5%',
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },

    moves: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign:'center'


    },

    picButton: {
        // alignContent: 'center',
        // margin: 'auto',
    },

    box: {
        width: '100%',
        paddingTop:'30%',
        flex: 1,
    },

    move: {
        textAlign:'center',
        fontSize: 17
    },

    buttonContainer: {
        // width: 150,
        // height: 150,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }

});
