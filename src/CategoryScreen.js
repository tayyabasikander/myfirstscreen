import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Picker } from 'react-native'
import { theme } from './theme/theme';
import { Ionicons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

const CategoryScreen = ({navigation}) => {

    const registerUser = () => {
      navigation.navigate('Landing')
    }

    const showService = (value) => {
        // alert(value)
        setService(value)
    }
    const showCategory = (value) => {
        // alert(value)
        setCategory(value)
    }
    const showCountry = (value) => {
        // alert(value)
        setCountry(value)
    }
    const showCity = (value) => {
        // alert(value)
        setCity(value)
    }
    const [service, setService] = useState('')
    const [Category,setCategory] = useState('')
    const [country,setCountry] = useState('')
    const [City,setCity] = useState('')

    return (
        <View>
            <Image style={styles.imageStyle} source={theme.images.bannerImage} />

            <View>
                <Picker style={styles.pickerStyle}
                    selectedValue={service}
      
                    onValueChange={showService.bind()}>
                    <Picker.Item label="Select Service" value="1" ></Picker.Item>
                    <Picker.Item label="Web Development" value="2"></Picker.Item>
                    <Picker.Item label="Mobile Application Development" value="3"></Picker.Item>
                    <Picker.Item label="Back-End Development" value="4"></Picker.Item>
                </Picker>

                <Picker  style={styles.pickerStyle}
                    selectedValue={Category}

                    onValueChange={showCategory.bind()}>
                    <Picker.Item label="select Category" value="5"></Picker.Item>
                    <Picker.Item label="Web Development" value="6"></Picker.Item>
                    <Picker.Item label="Mobile Application Development" value="7"></Picker.Item>
                    <Picker.Item label="Back-End Development" value="8"></Picker.Item>
                </Picker>
                <Picker  style={styles.pickerStyle}
                    selectedValue={country}

                    onValueChange={showCountry.bind()}>
                    <Picker.Item label="select Country" value="9" ></Picker.Item>
                    <Picker.Item label="Pakistan" value="0"></Picker.Item>
                    <Picker.Item label="India" value="10"></Picker.Item>
                    <Picker.Item label="Iran" value="11"></Picker.Item>
                </Picker>

                <Picker  style={styles.pickerStyle}
                    selectedValue={City}

                    onValueChange={showCity.bind()}>
                    <Picker.Item label="select City" value="12" ></Picker.Item>
                    <Picker.Item label="Karachi" value="13"></Picker.Item>
                    <Picker.Item label="Sukkur" value="14"></Picker.Item>
                    <Picker.Item label="Thatta" value="15"></Picker.Item>
                </Picker>


            </View>
            <TouchableOpacity style={styles.firstButtonStyle}
                onPress={() => {
                    registerUser()
                }}>
                <Text style={styles.firstButton}>SUBMIT</Text>
            </TouchableOpacity>


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
    pickerStyle:{
        width:"80%",
        alignSelf:"center",
        borderColor: 'black',
        borderWidth: 1,
        color:theme.color.primaryColor
    }
})
export default CategoryScreen;