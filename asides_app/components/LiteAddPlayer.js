import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, Button} from 'react-native';

export default function LiteAddPlayer({addPlayer}) {

    let [value, onChangeText] = useState('');

    return (
        <SafeAreaView>
            <TextInput 
                value="What" 
                style={styles.textbox}
                value={value}
                onChangeText={text => onChangeText(text)}
            />
            <Button title="Add" onPress={addPlayer(value)}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    textbox: {
        height: 35,
        borderColor: 'gray',
        backgroundColor: 'white'
    }
})