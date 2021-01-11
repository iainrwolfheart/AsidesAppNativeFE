import React, {useState} from 'react'
import { SafeAreaView, View, TextInput, Text, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { setUserToken } from '../services/AuthService';


export default function SignupScreen({navigation}) {

    const [signupData, setSignUpData] = useState({
        name: "",
        email: "",
        password: ""
    });
    
    const submitRegistration = () => {
        if (!validateName(signupData.name)) {
            Alert.alert("Error", "Name error.")
        } else if (!validateEmail(signupData.email)) {
            Alert.alert("Error", "Email error.");
        } else if (!validatePassword(signupData.password)) {
            Alert.alert("Error", "Password error.");
        } else {
            axios.post(`http://localhost:8080/signup`, signupData).then(
                response => {
                    if(response.status === 200) {
                        setUserToken(response.data);
                        navigation.navigate("Home");
                    }
                    // ELSE?
                }
            ).catch(
                error => {
                    if (error.response) {
                        if (error.response.status === 422) {
                            // UNPROCESSABLE ERROR (EMAIL ALREADY IN USE) 
                            Alert.alert("Error", "Email already in use!");
                            // Clear form?
                        } else {
                            Alert.alert("Error", "Oops, I don't recognise this server response.");
                        }
                    }
                    else if (error.request) {
                        Alert.alert("Error", "Unable to get a server response. Please call again later.");
                    } else {
                        Alert.alert("Error", "Something went wrong, sorreh!");
                    }
                }
            );
        }
    }

    const validateName = (name) => {
        return String(name).length > 2;
        // API call to check !used
    }

    const validateEmail = (email) => {
        let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // API call to check !used, add && to return
        return emailRegex.test(String(email).toLowerCase());
    }
    
    const validatePassword = (password) => {
        let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        return passwordRegex.test(String(password));
    }

    return (
        <SafeAreaView>
            <Text>Signup</Text>
            <View style={styles.entryView}>        
                <Text style={styles.text}>Username</Text>
                <TextInput 
                    style={styles.textbox}
                    placeholder="myusernamerox"
                    maxLength={20}
                    onChangeText={(value) => {
                        setSignUpData({...signupData, name: value})
                    }}
                />
            </View>
            <View style={styles.entryView}>        
                <Text style={styles.text}>Email</Text>
                <TextInput 
                    style={styles.textbox}
                    placeholder="email@email.com.uk"
                    onChangeText={(value) => {
                        setSignUpData({...signupData, email: value})
                    }}
                />
            </View>
            <View style={styles.entryView}>        
                <Text style={styles.text}>Password</Text>
                <TextInput 
                    style={styles.textbox}
                    secureTextEntry={true}
                    placeholder="53cureP@55w0rd?"
                    onChangeText={(value) => {
                        setSignUpData({...signupData, password: value})
                    }}
                />
            </View>
            <TouchableOpacity 
                style={styles.btn}
                onPress={() => submitRegistration()}>
                    <Text style={styles.btnText}>Sign up</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        padding: 10,
    },
    textbox: {
        height: 35,
        borderColor: 'gray',
        backgroundColor: 'white',
        padding: 10,
        fontSize: 16,
        // margin: 5
    },
    entryView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 2,
        backgroundColor: 'white',
    },
    btn: {
        padding: 9,
        backgroundColor: 'lightgrey',
        margin: 5
    },
    btnText: {
        color: 'green',
        fontSize: 18,
        textAlign: 'center'
    }
})
