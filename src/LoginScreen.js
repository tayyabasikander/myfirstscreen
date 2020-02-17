import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { round } from 'react-native-reanimated';
import { theme } from './theme/theme';
import api from './api/api';
import ErrorComponent from './components/ErrorComponent'

const LoginScreen = ({ navigation }) => {



    const isEmailValid = (email) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return reg.test(email) == 0;
    }

    const registerUser = () => {
        if (!email || !password) {

            setErrorMessage('please provide all the requiremnets')
        }
        else if (isEmailValid(email)) {
            setErrorMessage('Email is not valid')
        }
        else if (password.length < 5) {
            // alert("password should be more than 5 characters")
            setErrorMessage('password should be more than 5 characters')

        }
        else {
            loginApi(email, password)
            // navigation.navigate('Category')
            // console.log(apiResponse)
        }
    }

    const [email, setEmail] = useState('test@test.com')
    const [password, setPassword] = useState('123456')
    const [apiResponse, setApiResponse] = useState({})
    const [errorMessage, setErrorMessage] = useState('')

    const loginApi = async (email, password) => {
        // navigation.navigate('Category')
        setErrorMessage('')
        try {
            const response = await api.post('/login', {
                email: email,
                password: password
            });
            console.log("Response is", response.data)
            // console.log("Response is", apiResponse)
            setApiResponse(response.data);
            setErrorMessage('')
            navigation.navigate('Category')
        }
        catch (error) {
            console.log(error.response.data.error)
            setErrorMessage(error.response.data.error);

        }
    }

    return (

        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <ScrollView>
                {/* IMAGE PORTION */}
                <Image style={styles.imageStyle} source={theme.images.bannerImage} />

                {/* TEXT INPUTS  */}
                <View style={styles.textInputContainer}>
                    <View style={styles.backgroundStyle}>
                        <MaterialCommunityIcons name="email-outline" size={25} style={styles.iconStyle} />
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
                        <Ionicons name="md-unlock" size={25} style={styles.iconStyle} />
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
                </View>

                {/* FORGOT PASSWORD PORTION */}
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate('ForgotPass')}
                >
                    <Text style={styles.textStyle}>Forgot password?</Text>
                </TouchableOpacity>

                {/* Error component */}
                <View><ErrorComponent error={errorMessage} /></View>

                {/* LOGIN AND FACEBOOK BUTTONS */}
                <TouchableOpacity style={styles.firstButtonStyle}
                    onPress={() => {
                        registerUser()
                    }}>
                    <Text style={styles.firstButton}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.secondButtonStyle}
                    onPress={() => {

                    }}>
                    <Entypo name="facebook-with-circle" style={styles.facebookiconstyle} />
                    <Text style={styles.secondButton}>Login Via Facebook</Text>
                </TouchableOpacity>

                {/* SIGN UP PORTION */}
                <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 2 }}>
                    <Text>New to App?</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
                        <Text>Sign Up</Text>
                    </TouchableOpacity>
                </View>

                {/* </View> */}
                {/* </View> */}
            </ScrollView>
        </KeyboardAvoidingView>

    )
}
const styles = StyleSheet.create({
    input: {
        fontSize: 14,
        flex: 1,
        marginLeft: 10
    },
    backgroundStyle: {
        backgroundColor: 'white',
        height: 35,
        borderRadius: 20,
        marginHorizontal: 40,
        marginVertical: 2,
        flexDirection: "row",
        borderColor: '#d8d8d8',
        borderWidth: 1,
        width: "60%",
        alignSelf: "center"

    },
    iconStyle: {
        fontSize: 16,
        alignSelf: 'center',
        marginHorizontal: 15,

    },
    imageStyle: {
        height: 200,
        width: "100%"
    },
    textInputContainer: {
        marginTop: 30
    },
    firstButtonStyle: {
        backgroundColor: theme.color.primaryColor,
        marginTop: 10,
        borderRadius: 15,
        alignSelf: "center",
        width: "50%",
        height: 32,

    },
    firstButton: {
        fontSize: 15,
        alignSelf: "center",
        marginTop: 4,
        color: 'white'
    },
    secondButtonStyle: {
        backgroundColor: '#0c70d0',
        marginTop: 8,
        borderRadius: 15,
        alignSelf: "center",
        width: "50%",
        height: 32,
        flexDirection: "row"

    },
    secondButton: {
        fontSize: 14,
        alignSelf: "center",
        color: 'white',
        marginHorizontal: 10
    },
    facebookiconstyle: {
        fontSize: 20,
        marginTop: 5,
        marginLeft: 10,
        // borderWidth:1,
        color: 'white'
    },
    textStyle: {
        marginLeft: 210,
        color: '#323232',
        fontSize: 13,
    }

})
export default LoginScreen;