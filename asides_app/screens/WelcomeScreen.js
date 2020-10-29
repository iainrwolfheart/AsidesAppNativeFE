import React from 'react';
import { SafeAreaView, StyleSheet, Text, Button} from 'react-native';

export default function WelcomeScreen({ history }) {
    return (
        <SafeAreaView>
                  <Text >Welcome to Asides!</Text>
                  <Button title="Login" /*onPress={() => history.push("/login") }*//>
                  <Button title="Sign up" /*onPress={() => history.push("/signup") }*//>
                  <Button title="Use LITE" onPress={() => history.push("/liteentry") }/>
        </SafeAreaView>
    )
}
//rnss
// const styles = StyleSheet.create({
    
// })
