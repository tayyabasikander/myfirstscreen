import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView, Image, TouchableOpacity,  } from 'react-native';
import { theme } from './theme/theme';
import { FontAwesome,MaterialCommunityIcos,Fontisto,FontAwesome5Brands } from '@expo/vector-icons';


const RequestScreen=({navigation})=>{
return(
    <View>
         <Image style={styles.imageStyle} source={theme.images.bannerImage} />
         <Text style={styles.textStyle}>Contact directly via</Text>

         <View >
                <TouchableOpacity style={[styles.ButtonStyle ,styles.background1]}
                    onPress={() => {

                     
                    }}>
                    <FontAwesome name="whatsapp" style={styles.iconStyle} />
                    <Text style={styles.moreButtonStyle}>Whatsapp</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.ButtonStyle,styles.background2]}
                    onPress={() => {
                      
                    }}>
                         <FontAwesome name="wechat" style={styles.iconStyle} />
                    {/* <MaterialCommunityIcos name="wechat" style={styles.iconStyle} /> */}
                    <Text style={styles.moreButtonStyle}>WeChat</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.ButtonStyle,styles.background3]}
                    onPress={() => {
                       
                    }}>
                         {/* <Fontisto name="line" type={"Fontisto"} style={styles.iconStyle} /> */}
                      {/* <FontAwesome5Brands name="line" style={styles.iconStyle} /> */}
                      <FontAwesome name="line" style={styles.iconStyle} />

                    <Text style={styles.moreButtonStyle}>Line</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.ButtonStyle,styles.background4]}
                    onPress={() => {
                    
                    }}>
                       {/* <FontAwesome5Brands name="rocketchat" style={styles.iconStyle} /> */}
                    <Text style={styles.moreButtonStyle}>AA Chat</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.ButtonStyle,styles.background5]}
                    onPress={() => {
                      
                    }}>
                     <FontAwesome name="email" style={styles.iconStyle} />
                    <Text style={styles.moreButtonStyle}>Email</Text>
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
        // backgroundColor: theme.color.primaryColor,
        marginTop: 9,
        borderRadius: 30,
        alignSelf: "center",
        width: "60%",
        height: 50,
        // marginHorizontal:10
        // justifyContent:"center",
        flexDirection:'row'
    },
    moreButtonStyle:{
        color:'white',
        fontsize:18,
        alignSelf:"center",
        // justifyContent:"flex-end"
        // justifyContent:"center"
        marginLeft:35
        

    },
    iconStyle: {
        fontSize: 25,
        alignSelf: 'center',
        color:'white',
        // justifyContent:"flex-start"
        marginLeft:20
    },
    background1:{
        backgroundColor:'#009788'
    },
    background2:{
        backgroundColor:'#2ac347'
    },
    background3:{
        backgroundColor:'#099405'
    },
    background4:{
        backgroundColor:'#6f1dfb'
    },
    background5:{
        backgroundColor:'#fe4950'
    },
  
})
export default RequestScreen;