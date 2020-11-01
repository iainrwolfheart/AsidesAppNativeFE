import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, Button} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function LiteAddPlayer({addPlayer}) {

    const [inputValue, setInputValue] = useState('');

    const onChange = (value) => setInputValue(value);

    return (
        <SafeAreaView>
            <TextInput 
                placeholder="Type a name..."
                style={styles.textbox}
                onChangeText={onChange}
            />
            <TouchableOpacity style={styles.btn} onPress={() => {
                addPlayer(inputValue)
                }}>
                <Text style={styles.btnText}>
                    <AntDesign name="pluscircleo" size={18} color="green"/> 
                    Add Player       
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    textbox: {
        height: 35,
        borderColor: 'gray',
        backgroundColor: 'white',
        padding: 10,
        fontSize: 16,
    },
    btn: {
        backgroundColor: "lightgrey",
        padding: 9,
        margin: 5
    },
    btnText: {
        color: 'green',
        fontSize: 18,
        textAlign: 'center',
    },
})