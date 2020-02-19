import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView, Image, TouchableOpacity, iew } from 'react-native';
import { theme } from './theme/theme';
import ErrorComponent from './components/ErrorComponent';
import Modal, { ModalContent, ModalTitle } from 'react-native-modals';

const HelpScreen = () => {

    const isEmailValid = (email) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return reg.test(email) == 0;
    }

    const sendRequest = () => {
        setErrorMessage('')
        if (!request || !info || !email || !name || !companyName) {
            setErrorMessage("please provide all the requiremnets")
        }

        else if (isEmailValid(email)) {
            setErrorMessage("email not valid")
        }

        else {
            setIsAllert(true)
        }
    }

    const [request, setRequest] = useState('thht');
    const [info, setInfo] = useState('hth');
    const [email, setEmail] = useState('tayyaba.sikadner@gmail.com');
    const [name, setName] = useState('efef');
    const [companyName, setCompanyName] = useState('fee');
    const [errorMessage, setErrorMessage] = useState('');
    const [isAllert, setIsAllert] = useState(false);

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <ScrollView>
                {
                    isAllert &&
                    <Modal visible={true}
                        style={styles.viewStyle}
                    >
                        <View >
                            <ModalContent>
                                <Text style={{ color: 'red', alignSelf: "center" }}>Alert</Text>
                                <Text style={{ alignSelf: "center",  marginHorizontal: 20 }}>
                                    Your request has been sent to admin successfully!
                        </Text>

                                <TouchableOpacity
                                    style={styles.firstButtonStyle}
                                    onPress={() => {
                                        // setIsAllert(false)
                                        alert("HI")
                                    }}
                                >
                                    <Text style={styles.firstButton}>OK</Text>
                                </TouchableOpacity>
                            </ModalContent>
                        </View>
                    </Modal>
                }

                <View>
                    <Image style={styles.imageStyle} source={theme.images.bannerImage} />

                    {/* TEXT INPUTS */}
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
                        {/* TEXT AREA */}
                        <View style={styles.textAreaStyle}>
                            <TextInput
                                autoCapitalize="none"
                                placeholder="Description and information"
                                autoCorrect={false}
                                multiline={true}
                                numberOfLines={10}
                                textAlignVertical={"top"}
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
                                value={name}
                                onChangeText={(x) => setName(x)}
                                style={styles.input}
                            ></TextInput>
                        </View>
                        <View style={styles.backgroundStyle}>
                            <TextInput
                                autoCapitalize="none"
                                placeholder="Company Name"
                                autoCorrect={false}
                                value={companyName}
                                onChangeText={
                                    (x) => setCompanyName(x)
                                }
                                style={styles.input}
                            ></TextInput>
                        </View>

                    </View>

                    {/* ERROR MESSAGE */}
                    <View><ErrorComponent error={errorMessage} /></View>

                    {/* button */}
                    <TouchableOpacity style={styles.firstButtonStyle}
                        onPress={() => {
                            sendRequest()
                        }}>
                        <Text style={styles.firstButton}>SEND</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    input: {
        //marginTop: 40,
        fontSize: 16,
        //borderColor:'red',
        // color:'black'
        flex: 1,
        marginHorizontal: 15,

    },
    backgroundStyle: {
        backgroundColor: 'white',
        width:"82%",
        height: 35,
        borderRadius: 7,
        marginHorizontal: 40,
        marginVertical: 5,
        borderColor: '#d8d8d8',
        borderWidth: 1

    },
    textInputContainer: {
        marginTop: 10
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
        height: 32,

    },
    firstButton: {
        fontSize: 15,
        alignSelf: "center",
        marginTop: 4,
        color: 'white'
    },
    textAreaStyle: {
        backgroundColor: 'white',
        borderRadius: 7,
        marginHorizontal: 40,
        marginVertical: 5,
        borderColor: '#d8d8d8',
        borderWidth: 1,
        paddingTop: 7,
        width:"82%",

    },
    viewStyle: {
        position: 'absolute',
        width: '70%',
        height: 150,
        backgroundColor: 'white',
        alignSelf: "center",
        justifyContent: "center",
        zIndex: 1,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'lightgray',
        top: "45%"
    },

})
export default HelpScreen;