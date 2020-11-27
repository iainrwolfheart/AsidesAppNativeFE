import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './asides_app/screens/WelcomeScreen';
import LiteEntryScreen from './asides_app/screens/LiteEntryScreen';
import LiteShowTeamsScreen from './asides_app/screens/LiteShowTeamsScreen';
import SignupScreen from './asides_app/screens/SignupScreen';
import LoginScreen from './asides_app/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function App() {
  const Stack = createStackNavigator();
  return (
      <View style={styles.container}>
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Signup" component={SignupScreen} />
              <Stack.Screen name="LiteEntry" component={LiteEntryScreen} />
              <Stack.Screen name="LiteShowTeams" component={LiteShowTeamsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
      </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66CC00',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
