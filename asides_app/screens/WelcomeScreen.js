import React from 'react';
import { SafeAreaView, StyleSheet, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function WelcomeScreen({ navigation }) {
    return (
        <SafeAreaView>
            <Text >Welcome to Asides!</Text>
            <Button title="Login" /*onPress={() => navigation.navigate("Login")}*//>
            <Button title="Sign up" /*onPress={() => navigation.navigate("Signup")}*//>
            <Button title="Use LITE"onPress={() => navigation.navigate("LiteEntry") }/>
        </SafeAreaView>
    )
}
//rnss
// const styles = StyleSheet.create({
    
// })
