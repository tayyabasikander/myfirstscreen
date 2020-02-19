import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Picker, ScrollView } from 'react-native'
import { theme } from './theme/theme';

import SectionedMultiSelect from 'react-native-sectioned-multi-select';
const data = [
    {
        "name": "Afghanistan",
        "id": 0,
        "cities": [
            { name: "Herat", id: 10 },
            { name: "Kabul", id: 11 },
            { name: "Kandahar", id: 12 },

        ]
    },
    {
        "name": "Albania",
        "id": 1,
        "cities": [
            { name: "Elbasan", id: 13 },
            { name: "Petran", id: 14 },
            { name: "Pogradec", id: 15 },

        ]
    },
    {
        "name": "Pakistan",
        "id": 2,
        "cities": [
            { name: "Lahore", id: 16 },
            { name: "Islamabad", id: 17 },
            { name: "Karachi", id: 19 },

        ]
    }

]

const CategoryScreen = ({ navigation }) => {


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
        cityList();

    }

    const showCity = (value) => {
        setSelectedCity(value)
    }
   const onSelectedItemsChange = (selectedCity) => {
    console.log(selectedCity)
    setSelectedCity( selectedCity );
      };

 

    const [service, setService] = useState('')
    const [Category, setCategory] = useState('')
    const [country, setCountry] = useState('')
    const [selectedCity, setSelectedCity] = useState('')
    const [countryData, setCountryData] = useState(["India", "Pakistan", "USA"])
    // const [cityData, setCityData] = useState(cities)

    // const countryList = () => {
    //     return (data.map((x, i) => {
    //         return (<Picker.Item label={x.country} value={x.country} key={i} />)
    //     }));
    // }

    // const cityList = () => {

    //     console.log(country);

    //     return (data.map((x) => {
    //         if (x.country == country) {
    //             {
    //                 return (x.cities.map((city) => {
    //                     console.log("city: ", city)
    //                     return (<Picker.Item label={city} value={city} />)
    //                 }))
    //             }

    //         }
    //     }
    //     ))


    // }





    return (
        <ScrollView>
            <View>
                <Image style={styles.imageStyle} source={theme.images.bannerImage} />

                <View style={{ marginTop: 10 }}>
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

                    <View style={styles.pickerContainer}>
                        <Picker style={styles.pickerStyle}
                            selectedValue={Category}
                            mode={"dropdown"}
                            onValueChange={showCategory.bind()}>
                            <Picker.Item label="Select Category" value="5"></Picker.Item>
                            <Picker.Item label="Web Development" value="6"></Picker.Item>
                            <Picker.Item label="Mobile Application Development" value="7"></Picker.Item>
                            <Picker.Item label="Back-End Development" value="8"></Picker.Item>
                        </Picker>
                    </View>


                    {/* <View style={styles.pickerContainer}>
                        <Picker style={styles.pickerStyle}
                            selectedValue={country}
                            mode={"dropdown"}
                            onValueChange={showCountry.bind()}>
                            {countryList()}
                        </Picker>
                    </View> */}

                    {/* <View style={styles.pickerContainer}>
                        <Picker style={styles.pickerStyle}
                            selectedValue={selectedCity}
                            mode={"dropdown"}
                            onValueChange={showCity.bind()}>
                            {cityList()}
                        </Picker>
                    </View> */}

                    <SectionedMultiSelect
                        // mode={"dropdown"}
                        items={data}
                        uniqueKey="id"
                        subKey="cities"
                        selectText="Choose select city"
                        showDropDowns={true}
                        readOnlyHeadings={true}
                        onSelectedItemsChange={onSelectedItemsChange}
                        selectedItems={selectedCity}
                    />
                    {/* {cityList()} */}

                </View>

                <TouchableOpacity style={styles.firstButtonStyle}
                    onPress={() => {
                        registerUser()
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
        height: 40
    }
})
export default CategoryScreen;