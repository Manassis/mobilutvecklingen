import React, {useEffect, useState }from 'react';
import { Text, TextInput, View, Button, StyleSheet} from "react-native";

export function Opponents(props) {

    const [games, setGames, startGames, setStartGames] = useState([]);

    useEffect(() => {

        fetch('http://localhost:8080/games', {
            headers: {
                'token': props.token,
            },
        })
            .then(response => response.json())
            .then(response => {
                setGames (response)
            });
    }, []);



    return <View style={styles.container2}>

               <View>
                  <Text>Opponents</Text>
               </View>

               <View>
                   {games.map(game => {
                      return <View key={game.id}>

                        <Text>{game.playerName}</Text>

                        <Button title={"Join"} onPress={ () => {
                            fetch('http://localhost:8080/games/start', {
                                headers: {
                                    'token': props.token,
                                },
                            })
                                .then(response => response.json())
                                .then(response => {
                                    setStartGames (response)
                                    props.setView("MakeMove")
                                });
                        });

                   }
                            startGames.map(startGames => {
                                return
                                    <View key={startGames.id}>{MakeMove}</View>
                        }
                        }/>;
               </View>
               })}
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
}

});
