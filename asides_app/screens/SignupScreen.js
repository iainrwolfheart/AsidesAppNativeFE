import React, {useState} from 'react'
import { SafeAreaView, View, TextInput, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function SignupScreen() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitRegistration = () => {
        validateName(name)
        validateEmail(email);
        validatePassword(password);
    }

    const validateName = () => {
        // API call to check !used
        // check character count
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
                <Text style={styles.text}>Name</Text>
                <TextInput 
                style={styles.textbox}
                placeholder="myusernamerox"
                onChangeText={(value) => {
                    setName(value);
                    }
                }
                />
            </View>
            <View style={styles.entryView}>        
                <Text style={styles.text}>Email</Text>
                <TextInput 
                style={styles.textbox}
                placeholder="email@email.com.uk"
                onChangeText={(value) => {
                    setEmail(value);
                    }
                }/>
            </View>
               <View style={styles.entryView}>        
                <Text style={styles.text}>Password</Text>
                <TextInput 
                style={styles.textbox}
                secureTextEntry={true}
                placeholder="53cureP@55w0rd?"
                onChangeText={(value) => {
                    setPassword(value);
                    }
                }/>
            </View>
            <TouchableOpacity style={styles.btn}
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
