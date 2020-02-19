import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Feather, Entypo ,FontAwesome,AntDesign} from '@expo/vector-icons';
import { theme } from './theme/theme';

const SettingScreen = ({navigation}) => {
    return (
        <View>
            <Image style={styles.imageStyle} source={theme.images.bannerImage} />
            <View  style={{marginTop:20}}>
                <View style={styles.backgroundStyle}>
                <TouchableOpacity style={styles.firstButtonStyle}
                    onPress={() => {
                        // sendRequest()
                    }}>
                         <Feather name="info" style={styles.iconStyle} />
                    <Text style={styles.firstButton}>About us</Text>
                </TouchableOpacity>
                

              
                <TouchableOpacity style={styles.firstButtonStyle}
                    onPress={() => {
                        // sendRequest()
                    }}>
                      <Entypo name="share"  style={styles.iconStyle} />
                    <Text style={styles.firstButton}>Share</Text>
                </TouchableOpacity>
          

            
                <TouchableOpacity style={styles.firstButtonStyle}
                    onPress={() => {
                        // sendRequest()
                    }}>
                    <FontAwesome name="phone" style={styles.iconStyle} />
                    <Text style={styles.firstButton}>Contact Us</Text>
                </TouchableOpacity>
           

  
                <TouchableOpacity style={styles.logoutButtonStyle}
                    onPress={() => {
                        navigation.navigate('Landing')
                    }}>
                    <Feather name="log-out" style={styles.logoutIconStyle} />
                    <Text style={styles.logoutText}>LOGOUT</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    imageStyle: {
        height: 230,
        width: "100%"
    },
    firstButtonStyle: {
       
        alignSelf: "center",
        width: "100%",
        height: 44,
        backgroundColor: 'white',
        marginVertical: 2,
        borderColor: '#d8d8d8',
        borderWidth: 1,
        flexDirection:"row"

    },
    firstButton: {
        fontSize: 15,
        // alignSelf: "center",
        marginHorizontal: 10,
        marginVertical:10,
        color: '#3b3d35',
        // marginHorizontal:15
    },
    iconStyle: {
        fontSize: 20,
        alignSelf: 'center',
        marginHorizontal: 10,
        color:'#808080'

    },
    logoutButtonStyle:{
        backgroundColor: theme.color.primaryColor,
        alignSelf: "center",
        width: "100%",
        height: 44,
        marginVertical: 2,
        borderColor: '#d8d8d8',
        borderWidth: 1,
        flexDirection:"row",
       

    },
    logoutIconStyle:{
        fontSize: 20,
        alignSelf: 'center',
        marginHorizontal: 10,
        color:'white'
    },
    logoutText:{
        fontSize: 15,
        marginHorizontal: 10,
        marginVertical:10,
        color: 'white',
    }
  
 
})
export default SettingScreen;