import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, FlatList} from 'react-native';
import LiteAddPlayer from '../components/LiteAddPlayer';
import LitePlayerListItem from '../components/LitePlayerListItem';

export default function LiteEntryScreen({ history }) {

    const [players, setPlayers] = useState([
            "Iain",
            "Rich",
            "Carl",
            "Mike"
        ]);

    const addPlayer = (value) => {
        console.log(value);
    }

    const removePlayer = (playerToRemove) => {
        setPlayers(previousPlayers => {
            return previousPlayers.filter(player => player != playerToRemove);
        })
    }

    return (
        <SafeAreaView styles={styles.container}>
            <Text>LITE ENTRY SCREEN</Text>
            {/* <LiteAddPlayer addPlayer={addPlayer()}/> */}
            <FlatList data={players} renderItem={({item}) => (
                <LitePlayerListItem player={item} removePlayer={removePlayer}/>
            )}>
            </FlatList>
            <Button title="Go home" onPress={() => history.push("/")}></Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60
    },
})



