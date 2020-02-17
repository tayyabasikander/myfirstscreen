import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import { theme } from './theme/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ErrorComponent from './components/ErrorComponent';


const ForgotPassword = ({ navigation }) => {

    const isEmailValid = (email) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return reg.test(email) == 0;
    }
    const registerUser = () => {
         if (!email) {

            setErrorMessage('please provide email')
        }
        else if (isEmailValid(email)) {
            setErrorMessage("email not valid")
        }
         else if (!email) {

            setErrorMessage('please provide email')
        }
        else {
            //loginApi(email,password)
            navigation.navigate('Landing')
        }
    }

    const [email, setEmail] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    // const [errorMessage,setErrorMessage] = useState('')
    // const registerApi = async (email) => {
    //     setErrorMessage('')
        
    //     try {
    //         const response = await api.post('/signup', {
                
    //             email: email,
                
    //         });
    //         console.log("Response is", response.data)
         
    //         setApiResponse(response.data);
    //         setErrorMessage('')
    //     }
    //     catch (error) {
    //         // console.log(error.response.data.error)
    //         setErrorMessage(error.response.data.error);
    //     }
    // }
    return (
        <View>
            <KeyboardAvoidingView behavior="padding">
                <ScrollView>
                    {/* IMAGE PORTION */}
                    <Image style={styles.imageStyle} source={theme.images.bannerImage} />

                    {/* TEXT INPUT  */}
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
                    </View>
                    <View><ErrorComponent error={errorMessage} /></View> 

                    {/* SUBMIT BUTTON */}
                    <TouchableOpacity style={styles.firstButtonStyle}
                        onPress={() => {
                            registerUser()
                        }}>
                        <Text style={styles.firstButton}>SUBMIT</Text>
                    </TouchableOpacity>

                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}
const styles = StyleSheet.create({
    iconStyle: {
        fontSize: 16,
        alignSelf: 'center',
        marginHorizontal: 15,

    },
    imageStyle: {
        height: 200,
        width: "100%"
    },
    firstButtonStyle: {
        backgroundColor: theme.color.primaryColor,
        marginTop: 10,
        borderRadius: 15,
        alignSelf: "center",
        width: "50%",
        height: 30,

    },
    firstButton: {
        fontSize: 15,
        alignSelf: "center",
        marginTop: 4,
        color: 'white'
    },
    textInputContainer: {
        marginTop: 30
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
    input: {
        fontSize: 14,
        flex: 1,
        marginLeft: 10
    },
})
export default ForgotPassword