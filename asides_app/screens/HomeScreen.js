import React from 'react'
import { SafeAreaView, StyleSheet, Text, Button} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserToken } from '../services/AuthService';

export default function HomeScreen({route, navigation}) {

    // const getUserToken = async() => {
    //     try {
    //         const retrievedToken = await AsyncStorage.getItem("userToken");
    //         if (retrievedToken != null) {
    //             console.log("getUserToken: " + retrievedToken)
    //             return retrievedToken;
    //         } else {
    //             // Complete once happy path working   
    //             // Probably redirect to WelcomeScreen w/logged out/error msg?  
    //         }
    //     } catch (error) {
    //         console.dir('Token Retrievel Error: ' + error.message);
    //     }   
    // }
    const authToken = getUserToken(); //currently not working 100% via getUserToken - rtrng object instead String?
    console.log("Home screen auth: " + authToken);

    return (
        <SafeAreaView>
            <Text>HOME SCREEN</Text>
        </SafeAreaView>
    )
}


