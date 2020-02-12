import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput, Image, Button, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Feather, MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { theme } from './theme/theme';
import api from './api/api'
import ErrorComponent from './components/ErrorComponent';




const RegisterScreen = ({ navigation }) => {

    const registerUser = () => {
        // console.log({username,email,company,password,confirmPassword})
        if (!username || !email || !company || !password || !confirmPassword) {
            alert("please provide all the requiremnets")
        }
        else if (password.length < 5) {
            alert("password should be more than 5 characters")

        }
        else if (password != confirmPassword) {

            alert("password doesn't match")
        }

        else {
           
            registerApi(username,email,company,password)

        }
    }
    const [username, setUsername] = useState('tayyaba')
    const [email, setEmail] = useState('tayyaba@test.com')
    const [company, setCompany] = useState('Zenveus')
    const [password, setPassword] = useState('123456')
    const [confirmPassword, setConfirmPassword] = useState('123456')
    const [apiResponse, setApiResponse] = useState({})
    const [errorMessage,setErrorMessage] = useState('')

    const registerApi = async (username,email,company,password,confirmPassword) => {
        setErrorMessage('')
        console.log(`${email} ${username} ${password} ${company} `)
        
        try {
            const response = await api.post('/signup', {
                
                email: email,
                password: password, 
                userName:username,                
                firstName: `test`,
                lastName: `test`,
                company:company,
                
                
            });
            console.log("Response is", response.data)
            // console.log("Response is", apiResponse)
            setApiResponse(response.data);
            navigation.navigate('Login')
            setErrorMessage('')
        }
        catch (error) {
            console.log(error.response.data.error)
            setErrorMessage(error.response.data.error);
        }
    }

    return (

        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <ScrollView>


                <View style={styles.container}>
                    <Image style={styles.imageStyle} source={require('./images/download.jpg')} />
                    <View style={styles.textInputContainer}>
                        <View style={styles.backgroundStyle}>
                            <Feather name="search" size={25} style={styles.iconStyle} />
                            <TextInput
                                autoCapitalize="none"
                                placeholder="Enter user name"
                                autoCorrect={false}
                                value={username}
                                onChangeText={(x) => setUsername(x)}
                                style={styles.input}
                            ></TextInput>
                        </View>
                        <View style={styles.backgroundStyle}>
                            <MaterialIcons name="email" size={25} style={styles.iconStyle} />
                            <TextInput
                                autoCapitalize="none"
                                placeholder="Enter user email"
                                autoCorrect={false}
                                value={email}
                                onChangeText={(x) => setEmail(x)}
                                style={styles.input}
                            ></TextInput>
                        </View>
                        <View style={styles.backgroundStyle}>
                            <FontAwesome name="building" size={25} style={styles.iconStyle} />
                            <TextInput
                                autoCapitalize="none"
                                placeholder="Enter your company name"
                                autoCorrect={false}
                                value={company}
                                onChangeText={(x) => setCompany(x)}
                                style={styles.input}
                            ></TextInput>
                        </View>
                        <View style={styles.backgroundStyle}>
                            <Ionicons name="md-lock" size={25} style={styles.iconStyle} />
                            <TextInput
                                autoCapitalize="none"
                                placeholder="Enter your password"
                                autoCorrect={false}
                                secureTextEntry={true}
                                value={password}
                                onChangeText={(x) => setPassword(x)}
                                style={styles.input}
                            ></TextInput>
                        </View>
                        <View style={styles.backgroundStyle}>
                            <Ionicons name="md-lock" size={25} style={styles.iconStyle} />
                            <TextInput
                                autoCapitalize="none"
                                placeholder="Re-enter your password"
                                secureTextEntry={true}
                                autoCorrect={false}
                                value={confirmPassword}
                                onChangeText={
                                    (x) => setConfirmPassword(x)
                                }
                                // onChangeText={(x) => { 
                                //      setConfirmPassword(x);
                                //     confirmPassword(); } 
                                // }
                                style={styles.input}
                            ></TextInput>
                        </View>

                    </View>
                  
                          {/* <Text style={{alignSelf:"center", color:'red'}}> {errorMessage} </Text> */}
                         <View><ErrorComponent error={errorMessage} /></View> 
                    <TouchableOpacity style={styles.touchableOpacityStyle}
                        // onPress={() => registerUser()}
                        onPress={() => {
                            registerUser()

                        }}

                    >
                        <Text style={styles.buttonTextStyle}>SIGN UP</Text>
                    </TouchableOpacity>
          

                </View>
            </ScrollView>
        </KeyboardAvoidingView>

    )
}
const styles = StyleSheet.create({
    input: {
        //marginTop: 40,
        fontSize: 18,
        //borderColor:'red',
        // color:'black'
        flex: 1
    },
    backgroundStyle: {
        backgroundColor: 'white',
        height: 45,
        borderRadius: 20,
        marginHorizontal: 40,
        marginVertical: 5,
        flexDirection: "row",
        borderColor: '#d8d8d8',
        borderWidth: 1

    },
    container: {
        // marginTop: 30
    },
    iconStyle: {
        fontSize: 25,
        alignSelf: 'center',
        marginHorizontal: 15,
        color: theme.color.primaryColor

    },
    imageStyle: {
        height: 250,
        width: "100%"
    },
    textInputContainer: {
        marginTop: 30
    },
    // fixToText: {
    //     marginTop: 15,
    //     borderRadius: 10,
    //     alignSelf: "center",
    //     width: "30%"
    // },
    touchableOpacityStyle: {
        backgroundColor: theme.color.primaryColor,
        marginTop: 5,
        borderRadius: 15,
        alignSelf: "center",
        width: "40%",
        height: 40,
    },
    buttonTextStyle: {
        fontSize: 16,
        alignSelf: "center",
        marginTop: 10,
        color: 'white'
    }
})
export default RegisterScreen;