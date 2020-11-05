import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import axios from 'axios';

export default function LiteShowTeams ({route, navigation}) {

    const players = route.params; 
    const [returnedTeams, setReturnedTeams] = useState(null);

    useEffect(() => {
        axios.post('http://localhost:8080/litegroup', {"players": players.players}).then(response => {
                setReturnedTeams(response.data);
            }).catch(error => console.log(error));
    }, []);
    
        return (
            <View style={styles.container}>
                <Text>This works!</Text>
            </View>
        )
}
        
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
    }
})
        