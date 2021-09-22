import React, {useEffect, useState }from 'react';
import { Text, TextInput, View, Button, StyleSheet} from "react-native";

export function Opponents(props) {

    const [games, setGames] = useState([]);

    const startGame = () => {
        fetch(ADDRESS + "games/start", {
            method: 'GET',
            headers: {
                token: props.token
            }
        }).then(response => response.json())
            .then(gameStatus => {
                props.setView("StartGame")
            });
    }

    const fetchGames = () => {
        fetch(ADDRESS + 'games', {
            headers: {
                'token': props.token,
            },
        })
            .then(response => response.json())
            .then(response => {
                setGames (response)
            });
    };

    useEffect(fetchGames, []);



    return (
        <View style={styles.container2}>

            <View style={styles.starta}>
                <Button title={"StartGame"} onPress={startGame} />
            </View>

            <Text style={styles.opText}>Opponents</Text>

            <View style={styles.refresha}>
            <Button title={"Refresh"} onPress={fetchGames} />
            </View>

            <View>

                {
                    games.map(game => {
                        return (
                            <View key={game.gameId}>
                                <Text style={styles.plName}>{ game.playerName }</Text>
                                <Button title={"Join"} onPress={() => {
                                    fetch(ADDRESS+ 'games/join/' + game.gameId, {
                                        headers: {
                                            'token': props.token,
                                        },
                                    }).then(response => response.json())
                                        .then(response => {
                                            props.setView("MakeMove")
                                        });
                                }
                                } />
                                <View style={styles.removes}>
                                <Button title={"Remove"} onPress={() => {
                                    fetch(ADDRESS+ 'games/join/' + game.gameId, {
                                        headers: {
                                            'token': props.token,
                                        },
                                    }).then(response => response.json()).then(fetchGames);
                                }
                                } />
                                </View>
                            </View>
                        );
                    })
                }

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
container2: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightyellow'
},

    opText: {
        fontSize: 17
    },

    plName: {
    paddingBottom: '10%'
    }

});
