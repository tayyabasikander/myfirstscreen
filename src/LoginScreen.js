import React, { useState } from 'react';
import {  View, Text, StyleSheet, TextInput, Image,  ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import {  Ionicons,MaterialCommunityIcons,Entypo} from '@expo/vector-icons';
import { round } from 'react-native-reanimated';
import {theme} from './theme/theme';

// const registerUser = (navigation) => {
//     // const registerUser = () => {
//     // console.log({username,email,company,password,confirmPassword})
//     if ( !email || !password ) {
//         alert("please provide all the requiremnets")
//     }
//     else if (password.length < 5) {
//         alert("password should be more than 5 characters")

//     }
//     else {
//         navigation.navigate('Register')

//     }
// }



const LoginScreen = ({ navigation }) => {

    const registerUser = () => {
        if ( !email || !password ) {
            alert("please provide all the requiremnets")
        }
        else if (password.length < 5) {
            alert("password should be more than 5 characters")
    
        }
        else {
            navigation.navigate('Landing')
    
        }
    }
    

   
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (

        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <ScrollView>
                 {/* <View style={styles.container}> */}

                    <Image style={styles.imageStyle} source={theme.images.bannerImage} />

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

                    <TouchableOpacity>
                    <Text style={styles.textStyle}>Forget password?</Text> 
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.firstButtonStyle}
                        onPress={() => {
                            registerUser()
                        }}>
                        <Text style={styles.firstButton}>LOGIN</Text>
                    </TouchableOpacity>

                    {/* <View style={styles.loginfacebookstyle}> */}
                    <TouchableOpacity style={styles.secondButtonStyle}
                        onPress={() => {
                            registerUser()
                        }}>
                             <Entypo name="facebook-with-circle" size={25} style={styles.facebookiconstyle}/>
                        <Text style={styles.secondButton}>Login Via Facebook</Text>
                    </TouchableOpacity>

                    <View style={{flexDirection:"row",alignSelf:"center" , marginTop:2}}>
                        <Text>New to App?</Text>
                        <TouchableOpacity>
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
        marginLeft:10
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
        width:"60%",
        alignSelf:"center"

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
        marginTop: 15,
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
    secondButtonStyle:{
        backgroundColor: '#0c70d0',
        marginTop:8,
        borderRadius: 15,
        alignSelf: "center",
        width: "50%",
        height: 32,
        flexDirection:"row"
        
    },
    secondButton:{
        fontSize: 14,
        alignSelf: "center",
        color: 'white',
        marginHorizontal:10
    },
    facebookiconstyle:{
        fontSize:20,
        marginTop:5,
        marginLeft:10,
        // borderWidth:1,
        color:'white'
    },
    textStyle:{
        marginLeft:210,
        color:'#323232',
        fontSize:13,
    }

})
export default LoginScreen;