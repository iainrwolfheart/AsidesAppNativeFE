import React, {useState} from 'react'
import { SafeAreaView, View, TextInput, Text, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { setUserToken } from '../services/AuthService';


export default function LoginScreen({navigation}) {

    const [loginData, setloginData] = useState({
        username: "",
        password: ""
    })

    const submitLogin = () => {
        if (!validateUsername(loginData.username)) {
            Alert.alert("Error", "Username validation error!");
        } else if (!validatePassword(loginData.password)) {
            Alert.alert("Error", "Password validation error!");
        } else {
            axios.post(`http://localhost:8080/login`, loginData).then(
                response => {
                    if(response.status === 200) {
                        setUserToken(response.data);
                        navigation.navigate("Home");
                    }
                    // ELSE?
                }
            ).catch(
                error => {
                    console.log("Login catch block: " + error.response.status)
                    if (error.response.status === 404) {
                        // NOT FOUND ERROR
                        Alert.alert("Error", "Username DB error!");
                        // Clear form?
                    } else if (error.response.status === 401) {
                        // UNAUTHORISED ERROR
                        Alert.alert("Error", "Password DB error!");
                        // clear password field only?
                    }
                    // ELSE?
                }
            );
        }
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