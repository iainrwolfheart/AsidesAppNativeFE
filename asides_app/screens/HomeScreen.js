import React from 'react'
import { SafeAreaView, StyleSheet, Text, Button} from 'react-native';

export default function HomeScreen({route, navigation}) {

    const authToken = route.params.auth;

    console.log("Home screen auth: " + authToken);

    return (
        <SafeAreaView>
            <Text>HOME SCREEN</Text>
        </SafeAreaView>
    )
}


