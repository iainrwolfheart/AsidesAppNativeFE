import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
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
            //Handle case where no data returned?
        }
      
        fetchData();
    }, []);
    
        return (
            <View style={styles.container}>
                <Text>Blue Team</Text>
                <FlatList 
                    data={returnedTeams.blueTeam} 
                    extraData={returnedTeams} 
                    renderItem={({item}) => (
                        <View>
                            <Text>{item.surname}</Text>
                        </View>
                    )}>
                </FlatList>
                <Text>Red Team</Text>
                <FlatList 
                    data={returnedTeams.redTeam} 
                    extraData={returnedTeams} 
                    renderItem={({item}) => (
                        <View>
                            <Text>{item.surname}</Text>
                        </View>
                    )}>
                </FlatList>
            </View>
        )
}
        
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
    }
})
        