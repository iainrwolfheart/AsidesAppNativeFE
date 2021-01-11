import React from 'react';
import { SafeAreaView, StyleSheet, Text, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const setUserToken = async(value) => {
    try {
        await AsyncStorage.setItem("userToken", value);
    } catch (error) {
        console.log('Token Save Error: ' + error.message);
    }
}

export const getUserToken = async() => {
    try {
        const retrievedToken = await AsyncStorage.getItem("userToken");
        if (retrievedToken != null) {
            console.log("getUserToken: " + retrievedToken)
            return retrievedToken;
        } else {
            // Complete once happy path working   
            // Probably redirect to WelcomeScreen w/logged out/error msg?  
        }
    } catch (error) {
        console.dir('Token Retrievel Error: ' + error.message);
    }   
}