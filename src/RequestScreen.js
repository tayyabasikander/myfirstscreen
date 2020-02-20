import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView, Image, TouchableOpacity,  } from 'react-native';
import { theme } from './theme/theme';


const RequestScreen=({navigation})=>{
return(
    <View>
         <Image style={styles.imageStyle} source={theme.images.bannerImage} />
         <Text style={styles.textStyle}>Contact directly via</Text>

         <View>
                <TouchableOpacity style={styles.ButtonStyle}
                    onPress={() => {
                     
                    }}>
                    <Text style={styles.moreButtonStyle}>Whatsapp</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ButtonStyle}
                    onPress={() => {
                      
                    }}>
                    <Text style={styles.moreButtonStyle}>WeChat</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ButtonStyle}
                    onPress={() => {
                       
                    }}>
                    <Text style={styles.moreButtonStyle}>Line</Text>
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
const styles=StyleSheet.create({
    imageStyle: {
        height: 250,
        width: "100%"
    },
    textStyle:{
        color: theme.color.primaryColor,
        fontSize:16,
        alignSelf:"center",
        marginTop:5
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
export default RequestScreen;