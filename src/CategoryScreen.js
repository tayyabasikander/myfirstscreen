import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Picker, ScrollView, ClippingRectangle } from 'react-native'
import { theme } from './theme/theme';

const data = [
    {
        "country": "Afghanistan",
        "cities": [
            "Herat",
            "Kabul",
            "Kandahar",

        ]
    },
    {
        "country": "Albania",
        "cities": [
            "Elbasan",
            "Petran",
            "Pogradec",

        ]
    },
    {
        "country": "Pakistan",
        "cities": [
            "Lahore",
            "Islamabad",
            "Karachi",

        ]
    }

]

const CategoryScreen = ({ navigation }) => {
    const [service, setService] = useState('')
    const [Category, setCategory] = useState('')
    const [country, setCountry] = useState('Pakistan')
    const [selectedCity, setSelectedCity] = useState('')
    const [cityList, setCityList] = useState(data.find(x => x.country === country).cities);
    


    const registerUser = () => {
        navigation.navigate('Landing')
    }

    const showService = (value) => {
        setService(value)
    }

    const showCategory = (value) => {

        setCategory(value)
    }

    const showCountry = (value) => {
        setCountry(value)
        let cityListTemp = [];
        data.map(x => {
            if (x.country == value) {
                cityListTemp = [...x.cities];
            }
        })
        setCityList(cityListTemp)
    }

    const showCity = (value) => {
        setSelectedCity(value)
    }


    const countryList = () => {
        return data.map((x, i) => {
            return (<Picker.Item label={x.country} key={x} value={x.country} />)
        });
    }





    return (
        <ScrollView>
            <View>
                <Image style={styles.imageStyle} source={theme.images.bannerImage} />

                <View style={{ marginTop: 10 }}>
                    <View style={styles.pickerContainer}>
                        <Picker style={styles.pickerStyle}
                            selectedValue={service}
                            // mode={"dropdown"}
                            onValueChange={showService.bind()}>

                            <Picker.Item label="Select Service" value="1" ></Picker.Item>
                            <Picker.Item label="Web Development" value="2"></Picker.Item>
                            <Picker.Item label="Mobile Application Development" value="3"></Picker.Item>
                            <Picker.Item label="Back-End Development" value="4"></Picker.Item>

                        </Picker>
                    </View>

                    <View style={styles.pickerContainer}>
                        <Picker style={styles.pickerStyle}
                            selectedValue={Category}
                            // mode={"dropdown"}
                            onValueChange={showCategory.bind()}>
                            <Picker.Item label="Select Category" value="5"></Picker.Item>
                            <Picker.Item label="Web Development" value="6"></Picker.Item>
                            <Picker.Item label="Mobile Application Development" value="7"></Picker.Item>
                            <Picker.Item label="Back-End Development" value="8"></Picker.Item>
                        </Picker>
                    </View>


                    <View style={styles.pickerContainer}>
                        <Picker style={styles.pickerStyle}
                            selectedValue={country}
                            // mode={"dropdown"}
                            onValueChange={showCountry.bind()}>
                            {countryList()}
                        </Picker>
                    </View>


                    <View style={styles.pickerContainer}>
                        <Picker style={styles.pickerStyle}
                            selectedValue={selectedCity}
                            // mode={"dropdown"}
                            onValueChange={showCity.bind()}>
                            {cityList.map((city) => <Picker.Item label={city} value={city} key={city} />)}
                        </Picker>
                    </View>
                </View>

                <TouchableOpacity style={styles.firstButtonStyle}
                    onPress={() => {
                        registerUser()
                    }}>
                    <Text style={styles.firstButton}>SEARCH</Text>
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
    firstButtonStyle: {
        backgroundColor: theme.color.primaryColor,
        marginTop: 15,
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
    pickerStyle: {
        width: "95%",
        // alignSelf: "center",
        color: theme.color.primaryColor,

    },
    pickerContainer: {
        marginTop: 9,
        width: "85%",
        alignSelf: "center",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: theme.color.primaryColor,
        height: 40,
        justifyContent: "center"
    }
})
export default CategoryScreen;