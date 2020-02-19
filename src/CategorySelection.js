import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Picker, ScrollView } from 'react-native'
import { theme } from './theme/theme';


const CategorySelection = ({ navigation }) => {

    const showService = (value) => {
        setService(value)
    }

    const showCategory = (value) => {

        setCategory(value)
    }

    const [service, setService] = useState('')
    const [Category, setCategory] = useState('')


    return (
        <ScrollView>
        <View>
            <Image style={styles.imageStyle} source={theme.images.bannerImage} />

            <View style={{ marginTop: 10 }}>

               <View style={styles.pickerContainer}>
                    <Picker style={styles.pickerStyle}
                        selectedValue={Category}
                        mode={"dropdown"}
                        onValueChange={showCategory.bind()}>
                        <Picker.Item label="Select Category"  value="5"></Picker.Item>
                        <Picker.Item label="Auditing And accounting" value="6"></Picker.Item>
                        <Picker.Item label="Tax" value="7"></Picker.Item>
                        <Picker.Item label="Legal Services " value="8"></Picker.Item>
                        <Picker.Item label="private " value="9"></Picker.Item>
                        <Picker.Item label="Litigation & Dispute Resolution " value="10"></Picker.Item>
                        <Picker.Item label="Administrative & Government Affairs " value="11"></Picker.Item>
                        <Picker.Item label="Advisory " value="12"></Picker.Item>
                        <Picker.Item label="Corporate Finance " value="13"></Picker.Item>
                        <Picker.Item label="Fiduciary & Estate Planning" value="14"></Picker.Item>
                
                    </Picker>
                </View>
                <View style={styles.pickerContainer}>
                    <Picker style={styles.pickerStyle}
                        selectedValue={service}
                        mode={"dropdown"}
                        onValueChange={showService.bind()}>

                        <Picker.Item label="Select Service" value="1" ></Picker.Item>
                        <Picker.Item label="Web Development" value="2"></Picker.Item>
                        <Picker.Item label="Mobile Application Development" value="3"></Picker.Item>
                        <Picker.Item label="Back-End Development" value="4"></Picker.Item>

                    </Picker>
                </View>

             
            </View>
            <TouchableOpacity style={styles.firstButtonStyle}
                    onPress={() => {
                        // registerUser()
                    }}>
                    <Text style={styles.firstButton}>SUBMIT</Text>
                </TouchableOpacity>
        </View>
        </ScrollView>
    )

}
const styles = StyleSheet.create({
   imageStyle: {
        height: 200,
        width: "100%"
    },
    pickerStyle: {
        width: "98%",
        alignSelf: "center",
        // borderColor: 'black',
        // borderWidth: 1,
        // marginTop:15,
        color: theme.color.primaryColor,

    },
    pickerContainer: {
        marginTop: 5,
        width: "75%",
        alignSelf: "center",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: theme.color.primaryColor,
        height: 40,
        justifyContent:"center"
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
})
export default CategorySelection