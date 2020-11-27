import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function LiteShowTeams ({route, navigation}) {

    const players = route.params; 
    const [returnedTeams, setReturnedTeams] = useState({
        blueTeam: [{name: "Snorlax", rating: 8}, {name: "Pikachu", rating: 8}, {name: "Psyduck", rating: 8}, {name: "Mew", rating: 8}],
        redTeam: [{name: "Onyx", rating: 8}, {name: "Raichu", rating: 8}, {name: "Mewtwo", rating: 8}, {name: "Clefairy", rating: 8}],
    });

    useEffect(() => {
        const fetchData = async () => {
            const returnedData = await axios.post('http://localhost:8080/litegroup', {"players": players.players})
            .catch(error => console.log(error));
            setReturnedTeams(returnedData.data);   
            //Handle case where no data returned?ç
        }
      
        fetchData();
    }, []);
    
        return (
            <View style={styles.container}>
                <Text>Blue Team</Text>
                <FlatList 
                    data={returnedTeams.blueTeam} 
                    extraData={returnedTeams} 
                    renderItem={({item, index}) => (
                        <View>
                            <Text>{index + 1}. {item.username}</Text>
                        </View>
                    )}>
                </FlatList>
                <Text>Red Team</Text>
                <FlatList 
                    data={returnedTeams.redTeam} 
                    extraData={returnedTeams} 
                    renderItem={({item, index}) => (
                        <View>
                            <Text>{index + 1}. {item.username}</Text>
                        </View>
                    )}>
                </FlatList>
                <TouchableOpacity style={styles.btn}
                // onPress={() => fetchData()}
                >
                <Text style={styles.btnText}>Mix it up!</Text>
            </TouchableOpacity>
            </View>
        )
}
        
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
    },
    btn: {
        backgroundColor: 'white',
        padding: 9,
        margin: 5
    },
    btnText: {
        textAlign: 'center',
        fontSize: 18,
        color: 'green'
    },
})
        