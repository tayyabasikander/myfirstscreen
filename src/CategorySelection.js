import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Picker, ScrollView } from 'react-native'
import { theme } from './theme/theme';

const data=[
    {
        "Category":"Auditing & Accounting",
        "services":[
            "Legal & Statutory Audits",
            "Assurance",
            "Special Purpose Audits",
            "Internal Audit",
            "IFRS",
            "US GAAP",
            "Forensic Accounting, Due Diligence Audit& Legal Support",
            "Regulatory & Compliance Services",
            "Preparing Accounts & Management Information Systems",
            "Payroll Administration",
            "Management Audit",
            "External Audit",
            "XBRL",
            "Others"
            
        ]
    },
    {
        "Category": "Tax",
        "services": [
           " International & Local Corporate Tax",
            "Personal Tax Consulting & Planning",
            "VAT & Indirect Taxes",
            "Transfer Pricing",
            "Expat Tax Services",
            "Tax Disputes",
            "Taxation Compliance and Consulting",
            "XBRL",
            "Others"
            

        ]
    },
]

const CategorySelection = ({ navigation }) => {

    const registerUser = () => {
        navigation.navigate('Landing')
    }


    const CategoryList = () => {
        return data.map((x, i) => {
            return (<Picker.Item label={x.Category} key={x} value={x.Category} />)
        });
    }

   
    const showCategory = (value) => {

        setCategory(value)
        let serviceListTemp = [];
        data.map(x => {
            if (x.Category == value) {
                ServiceList = [...x.services];
            }
        })
        setServiceList(serviceListTemp)
    }
    
    const showService = (value) => {
        setService(value)
    }

    const [Category, setCategory] = useState('')
    const [service, setService] = useState('')
    // const [selectedService, setSelectedService] = useState('')
    const [ServiceList, setServiceList] = useState(data.find(x => x.Category === Category).services)


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
                             {CategoryList()}
                       
                
                    </Picker>
                </View>
                <View style={styles.pickerContainer}>
                    <Picker style={styles.pickerStyle}
                        selectedValue={service}
                        mode={"dropdown"}
                        onValueChange={showService.bind()}>

                       
                         {ServiceList.map((service) => <Picker.Item label={service} value={sercvice} key={service} />)}

                    </Picker>
                </View>

             
            </View>
            <TouchableOpacity style={styles.firstButtonStyle}
                    onPress={() => {
                        registerUser()
                    }
                    }
                    >
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
export default CategorySelection;