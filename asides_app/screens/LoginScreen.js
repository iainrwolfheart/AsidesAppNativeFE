import React, {useState} from 'react'
import { SafeAreaView, View, TextInput, Text, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';

export default function LoginScreen() {

    const [loginData, setloginData] = useState({
        username: "",
        password: ""
    })

    const submitLogin = () => {
        if (!validateUsername(loginData.username)) {
            Alert.alert("Error", "Username error!");
        } else if (!validatePassword(loginData.password)) {
            Alert.alert("Error", "Password error!");
        }
        // else axios call
    }

    const validateUsername = (name) => {
        // API call to check !used
        return name !== "";
    }

    const validatePassword = (password) => {
        let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        return passwordRegex.test(String(password));
    }
        
    return (
        <SafeAreaView>
            <Text>Hi from Login</Text>
            <View style={styles.entryView}>
                <Text>
                    Username/Email
                </Text>
                <TextInput 
                    style={styles.textbox}
                    placeholder="username/email"
                    onChangeText={(value) => {
                        setloginData({...loginData, username: value})
                    }}
                />
            </View>
            <View style={styles.entryView}>
                <Text>
                    Password
                </Text>
                <TextInput 
                    secureTextEntry={true}
                    style={styles.textbox}
                    placeholder="password"
                    onChangeText={(value) => {
                        setloginData({...loginData, password: value})
                    }}
                />
            </View>
            <TouchableOpacity 
                title="submit"
                style={styles.btn}
                onPress={() => submitLogin()}>
                    <Text style={styles.btnText}>Submit</Text>
                </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    entryView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 2,
        backgroundColor: 'white'
    },
    textbox: {
        height: 30,
        borderColor: 'gray',
        backgroundColor: 'white',
        padding: 8,
        margin: 5
    },
    btn: {
        backgroundColor: 'lightgrey',
        padding: 9,
        margin: 5
    },
    btnText: {
        color: 'green',
        fontSize: 18,
        textAlign: "center"
    }
})