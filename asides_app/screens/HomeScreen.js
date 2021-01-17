import React from 'react'
import { SafeAreaView, StyleSheet, Text, Button} from 'react-native';
import { getUserToken } from '../services/AuthService';

export default function HomeScreen({route, navigation}) {

    const authToken = getUserToken(); //currently not working 100% via getUserToken - rtrng object instead String?
    console.log("Home screen auth: " + authToken);


    // FUNCTIONALITY
    // Organise a game - OrganiseMatchScreen
    // Show last match data
    // Rate teammates following last match
    // Show next match detail / organise prompt
    // Show group name
    // Show logged in player's name
    // Burger bar to update profile, logout

    return (
        <SafeAreaView>
            <Text>HOME SCREEN</Text>
        </SafeAreaView>
    )
}


