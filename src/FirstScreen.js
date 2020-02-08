import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather,MaterialIcons,FontAwesome,Ionicons } from '@expo/vector-icons';

const FirstScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.backgroundStyle}>
            <Feather name="search" size={25} style={styles.iconStyle} />
                <TextInput
                    autoCapitalize="none"
                    placeholder="Enter user name"
                    autoCorrect={false}
                    style={styles.input}
                ></TextInput>
            </View>
            <View style={styles.backgroundStyle}>
            <MaterialIcons name="email" size={25} style={styles.iconStyle} />
                <TextInput
                    autoCapitalize="none"
                    placeholder="Enter user email"
                    autoCorrect={false}
                    style={styles.input}
                ></TextInput>
            </View>
            <View style={styles.backgroundStyle}>
            <FontAwesome name="building" size={25} style={styles.iconStyle} />
                <TextInput
                    autoCapitalize="none"
                    placeholder="Enter your company name"
                    autoCorrect={false}
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
                    style={styles.input}
                ></TextInput>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        //marginTop: 40,
        fontSize: 18
    },
    backgroundStyle: {
        backgroundColor: '#d8d8d8',
        height: 40,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 10
    },
    container:{
        marginTop:40
    },
    iconStyle:{
        fontSize: 25,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})
export default FirstScreen;