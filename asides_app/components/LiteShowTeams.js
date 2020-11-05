import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';

export default class LiteShowTeams extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>This works!</Text>
            </View>
        )
    }
}
        
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
    }
})
        