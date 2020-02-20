import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import { theme } from './theme/theme';

const DetailScreen=({navigation})=>{
    const details=navigation.getParam('details')
    
    const SendRequest=()=>{
        navigation.navigate('Request')
    }
    return(
        <View>
                            {/* IMAGE */}
                            
                <Image style={styles.imageStyle} source={theme.images.bannerImage} />
                    <View style={{marginTop:10}}>
                        <View>
                            <Text style={styles.textStyle}> Name of firm</Text>
                            <View style={styles.detailsViewStyle}><Text style={styles.detailsTextStyle}>{details.companyName} </Text></View>
                        </View>
                        <View>
                            <Text style={styles.textStyle}> Country & City</Text>
                            <View style={styles.detailsViewStyle}><Text style={styles.detailsTextStyle}>{details.country}, {details.city} </Text></View>
                        </View>
                        <View>
                            <Text style={styles.textStyle}> Other office location</Text>
                            <View  style={styles.detailsViewStyle}><Text style={styles.detailsTextStyle}>{details.language} </Text></View>
                        </View>
                        <View>
                            <Text style={styles.textStyle}>Service Providing</Text>
                            <View  style={styles.detailsViewStyle}><Text style={styles.detailsTextStyle}>{details.service} </Text></View>
                        </View>
                        <View>
                            <Text style={styles.textStyle}> Language Spoken</Text>
                            <View  style={styles.detailsViewStyle}><Text style={styles.detailsTextStyle}>{details.language} </Text></View>
                        </View>
                        <View>
                            <Text style={styles.textStyle}> Number of Staff</Text>
                            <View  style={styles.detailsViewStyle}><Text style={styles.detailsTextStyle}>{details.service} </Text></View>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.touchableOpacityStyle}
                        onPress={() => {
                            SendRequest()

                        }}

                    >
                        <Text style={styles.buttonTextStyle}>Send Request</Text>
                    </TouchableOpacity>
          

                        
        </View>
    )
}
const styles=StyleSheet.create({
    imageStyle: {
        height: 200,
        width: "100%"
    },
  
    detailsViewStyle:{
        borderWidth:1,
        borderColor:'lightgrey',
        height:33,
        marginHorizontal:10,
        justifyContent:"center",
      marginBottom:10
    },
    detailsTextStyle:{
        marginHorizontal:7,
        fontSize:13
    },
    textStyle:{
        marginHorizontal:7,
        fontSize:15
    },
    touchableOpacityStyle: {
        backgroundColor: theme.color.primaryColor,
        marginTop: 10,
        borderRadius: 15,
        alignSelf: "center",
        width: "55%",
        height: 31,
    },
    buttonTextStyle: {
        fontSize: 16,
        alignSelf: "center",
        marginTop: 5,
        color: 'white'
    },
   
})
export default  DetailScreen;