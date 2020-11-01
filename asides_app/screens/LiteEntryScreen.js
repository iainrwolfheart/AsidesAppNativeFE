import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, Alert, Button, FlatList, TouchableOpacity} from 'react-native';
import LiteAddPlayer from '../components/LiteAddPlayer';
import LitePlayerListItem from '../components/LitePlayerListItem';
import axios from 'axios';

export default function LiteEntryScreen({ history }) {

    const [players, setPlayers] = useState([
            "Iain",
            "Rich",
            "Carl",
            "Mike",
            "Matt",
            "Olivia",
            "Archie",
            "Eevee"
        ]);

    const addPlayer = (playerToAdd) => {
        if (playerToAdd != "") {
            setPlayers(previousPlayers => {
                return [...previousPlayers, playerToAdd];
            });
        }
        else Alert.alert("Error", "Please enter a name before submitting.");
    }

    const removePlayer = (playerToRemove) => {
        setPlayers(previousPlayers => {
            return previousPlayers.filter(player => player != playerToRemove);
        })
    }

    const onSubmit = () => {
        console.log(players);
        if (players.length < 8 || players.length > 16) {
            Alert.alert("Error", "Please add 8-16 players for a decent game.");
        } else {
            axios.post('http://localhost:8080/litegroup', {"players": players}).then(response => {
                console.log(response.data);
            }).catch(error => console.log(error));
        }
    }

    return (
        <SafeAreaView styles={styles.container}>
            <Text>LITE ENTRY SCREEN</Text>
            <LiteAddPlayer addPlayer={addPlayer}/>
            <FlatList data={players} renderItem={({item}) => (
                <LitePlayerListItem player={item} removePlayer={removePlayer}/>
            )}>
            </FlatList>
            <TouchableOpacity style={styles.btn}
                onPress={() => onSubmit()}>
                <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
            <Button title="Go home" onPress={() => history.push("/")}></Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60
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

    }
})



