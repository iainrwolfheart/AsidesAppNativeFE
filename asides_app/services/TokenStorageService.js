import React, { Component } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const TokenStorageService = {

// Assumes String saved
    async saveUserToken(value) {
        try {
            await AsyncStorage.setItem("userToken", value);
        } catch (error) {
            console.log('Token Save Error: ' + error.message);
        }
    },
// Assumes String returned
    async getUserToken() {
        try {
            const retrievedToken = await AsyncStorage.getItem("userToken");
            if (retrievedToken != null) {
                return retrievedToken;
            } else {
                // Complete once happy path working            
            }
        } catch (error) {
            console.log('Token Retrievel Error: ' + error.message);
        }   
    }
}

export default TokenStorageService
