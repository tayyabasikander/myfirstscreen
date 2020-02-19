import React, { useState } from 'react';
import {View, Text,StyleSheet,TextInput,ScrollView,KeyboardAvoidingView} from 'react-native';
import { theme } from './theme/theme';

const HelpScreen = () => {
    const isEmailValid = (email) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return reg.test(email) == 0;
    }
    const registerUser=()=>{
         if(isEmailValid(email)){
            setErrorMessage("email not valid")
        }
    }
    

const [request,setRequest]= useState('');
const [info,setInfo]= useState('');
const [email,setEmail]= useState('');
const [name,setName]= useState('');
const [companyName,setCompanyName]= useState('');

    return(
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <ScrollView>
        <View>
             <Image style={styles.imageStyle} source={theme.images.bannerImage} />

             
             <View style={styles.textInputContainer}>
                        <View style={styles.backgroundStyle}>
                            <TextInput
                                autoCapitalize="none"
                                placeholder="My request"
                                autoCorrect={false}
                                value={request}
                                onChangeText={(x) => setRequest(x)}
                                style={styles.input}
                            ></TextInput>
                        </View>
                        <View style={styles.backgroundStyle}>
                            <TextInput
                                autoCapitalize="none"
                                placeholder="Description and information"
                                autoCorrect={false}
                                multiline={true}
                                numberOfLines={5}
                                value={info}
                                onChangeText={(x) => setInfo(x)}
                                style={styles.input}
                            ></TextInput>
                        </View>
                        <View style={styles.backgroundStyle}>
                            <TextInput
                                autoCapitalize="none"
                                placeholder="Email Address"
                                autoCorrect={false}
                                value={email}
                                onChangeText={(x) => setEmail(x)}
                                style={styles.input}
                            ></TextInput>
                        </View>
                        <View style={styles.backgroundStyle}>
                            <TextInput
                                autoCapitalize="none"
                                placeholder="Name"
                                autoCorrect={false}
                                secureTextEntry={true}
                                value={name}
                                onChangeText={(x) => setName(x)}
                                style={styles.input}
                            ></TextInput>
                        </View>
                        <View style={styles.backgroundStyle}>
                            <TextInput
                                autoCapitalize="none"
                                placeholder="Company Name"
                                secureTextEntry={true}
                                autoCorrect={false}
                                value={companyName}
                                onChangeText={
                                    (x) => setCompanyName(x)
                                }
                                style={styles.input}
                            ></TextInput>
                        </View>

                    </View>
                    <TouchableOpacity style={styles.firstButtonStyle}
                    onPress={() => {
                        registerUser()
                    }}>
                    <Text style={styles.firstButton}>LOGIN</Text>
                </TouchableOpacity>
        </View>
        </ScrollView>
        </KeyboardAvoidingView>
    )
}
const styles=StyleSheet.create({
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
     textInputContainer: {
        marginTop: 30
    },
    imageStyle: {
        height: 250,
        width: "100%"
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
})
export default HelpScreen;