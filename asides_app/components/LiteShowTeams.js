import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';

export default function LiteShowTeams ({route, navigation}) {

    const teams = route.params; 
    console.log(teams);
    
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
        