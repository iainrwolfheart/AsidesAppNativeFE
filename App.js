import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';
import WelcomeScreen from './asides_app/screens/WelcomeScreen';
import LiteEntryScreen from './asides_app/screens/LiteEntryScreen';

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Switch>
          <Route exact path="/" component={WelcomeScreen} />
          {/* <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/signup" component={SignupScreen} /> */}
          <Route exact path="/liteentry" component={LiteEntryScreen} />

        </Switch>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66CC00',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
