import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Picker, ScrollView } from 'react-native'
import { theme } from './theme/theme';

const data = [
    {
        "Category": "Auditing & Accounting",
        "services": [
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
            "International & Local Corporate Tax",
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
    {
        "Category": "Legal  Services",
        "services": [
            "Corporate",
            "Agribusiness",
            "Antitrust, Competition and Trade",
            "Bank Finance and Regulation",
            "Business Crimes, Fraud and Compliance",
            "Capital Markets and Regulations",
            "Company Law",
            "Construction and Infrastructure",
            "Corporate Governance",
            "Corporate Organizations and Securities",
            "Cross Border Transactions",
            "E-commerce and Technology",
            "Employee Benefits and Pensions",
            "Energy and Natural Resources",
            "General Corporate",
            "Health Care Industries",
            "Immigration",
            "Insolvency, Bankruptcy and Restructuring",
            "Insurance and Reinsurance",
            "Intellectual Property",
            "Joint Ventures",
            "Labour and Employment",
            "Life Sciences",
            "Media, Entertainment and Sports",
            "Mergers and Acquisitions",
            "Private Equity",
            "Product Liability",
            "Project Finance",
            "Real Estate & Property Purchase",
            "Tax",
            "Telecommunications"
        ]

    },
    {
        "Category": "Private",
        "services": [
            "Art and Antiques",
            "Business Crimes, Fraud and Compliance",
            "Charitable and Non Profit Organizations",
            "Cross Border Transactions",
            "Employee Benefits and Pensions",
            "Estate Planning and Administration",
            "Family Law",
            "Family Office Services",
            "Immigration, Residence and Nationality",
            "Labour and Employment",
            "Pre- and Postnuptial Agreements",
            "Private Equity",
            "Private Investment Companies and Funds",
            "Real Estate & Property Purchase",
            "Structuring of Wealth Management",
            "Tax Planning and Litigation",
            "Trusts and Estate Litigation",
            "Wills and Testaments"

        ]
    },
    {
        "Category": "Litigation & Dispute Resolution",
        "services": [
            "Alternative Dispute Resolution",
            "Arbitration",
            "Commercial Litigation",
            "International Dispute Resolution",
            "Mediation",
            "Supreme Courts and Appellate"
        ]
    },
    {
        "Category": "Administrative & Government Affairs",
        "services": [
            "Agribusiness and Subsidies",
            "Antitrust, Competition and Trade",
            "Bank Finance and Regulation",
            "Capital Markets and Regulations",
            "Construction and Infrastructure",
            "E Commerce and Technology",
            "Energy and Natural Resources",
            "Environmental",
            "Government Affairs and Private Procurement",
            "Health Care Industries",
            "Insurance and Reinsurance",
            "Life Sciences",
            "Telecommunications"
        ]
    },
    {
        "Category": "Advisory",
        "services": [
            "Business Consulting Services",
            "Business Management Systems",
            "Business Strategy",
            "Succession Planning",
            "IT Consulting and Business Solutions",
            "Corporate Restructuring & Insolvency",
            "Feasibility Studies",
            "Risk Management Services",
            "Logistics",
            "Feasibility Studies",
            "HR Related Services",
            "XBRL"
        ]
    },
    {
        "Category": "Corporate Finance",
        "services": [
            "Mergers & Acquisitions",
            "Business Valuations",
            "Financial Due Diligence",
            "Transaction Services",
            "Private Equity",
            "Early Stage & Alternative Finance",
            "IPO Consulting"
        ]
    },
    {
        "Category":"Fiduciary & Estate Planning",
        "services": [
            "Family Office Services",
            "Wealth Management",
            "Establishing & Administrating Trusts",
            "Financial Planning",
            "Philanthropy Consulting",
            "Other (please specify)"
        ]
    }
]

const CategorySelection = ({ navigation }) => {

    const registerUser = () => {
        navigation.navigate('Login')
    }


    // const CategoryList = () => {
    //     return data.map((x, i) => {
    //         return (<Picker.Item label={x.Category} key={x} value={x.Category} />)
    //     });
    // }


    // const showCategory = (value) => {

    //     setCategory(value)
    //     let serviceListTemp = [];
    //     data.map(x => {
    //         if (x.Category == value) {
    //             ServiceList = [...x.services];
    //         }
    //     })
    //     setServiceList(serviceListTemp)
    // }

    // const showService = (value) => {
    //     setService(value)
    // }

    const [Category, setCategory] = useState('Tax')
    const [ServiceList, setServiceList] = useState(data.find(x => x.Category === Category).services);
    const [SelectedService, setSelectedService] = useState('')

    const showCategory = (value) => {
        setCategory(value)
        let serviceListTemp = [];
        data.map(x => {
            if (x.Category == value) {
                serviceListTemp = [...x.servives];
            }
        })
        setServiceList(serviceListTemp)
    }


    const showService = (value) => {
        setSelectedService(value)
    }

    const CategoryList = () => {
        return data.map((x, i) => {
            return (<Picker.Item label={x.Category} key={x} value={x.Category} />)
        });
    }
    // const [Category, setCategory] = useState('')
    // const [service, setService] = useState('')
    // // const [selectedService, setSelectedService] = useState('')
    // const [ServiceList, setServiceList] = useState(data.find(x => x.Category === Category).services)


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
                            selectedValue={SelectedService}
                            mode={"dropdown"}
                            onValueChange={showService.bind()}>

                            {ServiceList.map((x) => <Picker.Item label={x} value={x} key={x} />)}
                            {/* {ServiceList.map((service) => <Picker.Item label={service} value={sercvice} key={service} />)} */}

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
        justifyContent: "center"
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