import React from 'react'
import { SafeAreaView, View, StyleSheet, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function LitePlayerListItem({player, removePlayer}) {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listView}>
                <Text style={styles.listText}>
                    {player}
                </Text>
                <AntDesign name="minuscircle" size={20} color='darkred' onPress={() => removePlayer(player)}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 2,
    },
    listView: {
        backgroundColor: 'lightgreen',
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listText: {
        fontSize: 18
    }
})