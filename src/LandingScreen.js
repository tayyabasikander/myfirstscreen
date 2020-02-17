import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { theme } from './theme/theme';

const Landingscreen = ({ navigation }) => {
    return (
        <View>
            {/* IMAGE PORTION */}
            <Image style={styles.imageStyle} source={theme.images.bannerImage} />

            {/*LOGIN AND REGISTER  BUTTONS PORTION */}
            <View style={styles.ButtonContainer}>
                <TouchableOpacity style={styles.firstButtonStyle}
                    onPress={() => {
                        navigation.navigate('Login')
                    }}>
                    <Text style={styles.firstButton}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.secondButtonStyle}
                    onPress={() => {
                        navigation.navigate('Register')
                    }}>
                    <Text style={styles.secondButton}>REGISTER</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity>
                <Text style={{ alignSelf: "center", marginTop: 5, color: theme.color.primaryColor }}>
                    NEED ASSISTANCE?
                </Text>
            </TouchableOpacity>

            {/* MORE BUTTONS */}
            <View>
                <TouchableOpacity style={styles.ButtonStyle}
                    onPress={() => {
                        navigation.navigate('Category')
                    }}>
                    <Text style={styles.moreButtonStyle}>Auditing And Accounting</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ButtonStyle}
                    onPress={() => {
                    }}>
                    <Text style={styles.moreButtonStyle}>Tax</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ButtonStyle}
                    onPress={() => {
                    }}>
                    <Text style={styles.moreButtonStyle}>Legal Services</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ButtonStyle}
                    onPress={() => {
                    }}>
                    <Text style={styles.moreButtonStyle}>Private</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ButtonStyle}
                    onPress={() => {
                    }}>
                    <Text style={styles.moreButtonStyle}>Advisory</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ButtonStyle}
                    onPress={() => {
                    }}>
                    <Text style={styles.moreButtonStyle}>Fiduciary & Estate Planning</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width: "100%"
    },

    firstButtonStyle: {
        backgroundColor: theme.color.primaryColor,
        marginTop: 15,
        borderRadius: 15,
        // alignSelf: "center",
        width: "40%",
        height: 35,
        marginHorizontal: 10

    },
    firstButton: {
        fontSize: 15,
        alignSelf: "center",
        marginTop: 7,
        color: 'white'
    },
    ButtonContainer: {
        flexDirection: "row",
        marginHorizontal: 15,
        alignSelf: "center"
    },
    secondButtonStyle: {
        backgroundColor: 'white',
        marginTop: 15,
        borderRadius: 15,
        width: "40%",
        height: 35,
        marginHorizontal: 10

    },
    secondButton: {
        fontSize: 15,
        alignSelf: "center",
        color: theme.color.primaryColor,
        marginHorizontal: 10,
        marginTop: 7
    },
    ButtonStyle: {
        backgroundColor: theme.color.primaryColor,
        marginTop: 9,
        borderRadius: 8,
        alignSelf: "center",
        width: "60%",
        height: 50,
        // marginHorizontal:10
    },
    moreButtonStyle: {
        height: 40,
        color: 'white',
        marginTop: 15,
        alignSelf: "center"
    }
})
export default Landingscreen;