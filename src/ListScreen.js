import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { theme } from './theme/theme';
// import { FlatList } from 'react-native-gesture-handler';

const data = [
    {
        "id": "1",
        "image": 'https://cdn4.iconfinder.com/data/icons/social-icon-4/842/facebook-512.png',
        "companyName": "Zenveus",
        "city": "Karachi",
        "service": "App Development"
    },
    {
        "id": "2",
        "image": 'https://cdn4.iconfinder.com/data/icons/social-icon-4/842/facebook-512.png',
        "companyName": "Zeneks",
        "city": "Karachi",
        "service": "Web Development"
    },
    {
        "id": "3",
        "image": 'https://cdn4.iconfinder.com/data/icons/social-icon-4/842/facebook-512.png',
        "companyName": "Ekstek",
        "city": "Karachi",
        "service": "app development"
    },
    {
        "id": "4",
        "image": 'https://cdn4.iconfinder.com/data/icons/social-icon-4/842/facebook-512.png',
        "companyName": "Zenkoders",
        "city": "Karachi",
        "service": "app development"
    },

]

const ListScreen = () => {


    const renderItem = ({ item }) => {
        console.log(item)
        return (
           
            <View style={styles.FlatListStyle}>
                <View>
                 <Image style={styles.image} source={{uri:item.image}}/>
                 </View>
                 <View>
                <Text style={{fontSize:18}}>
                    {item.companyName}
                </Text>
                <Text style={{fontSize:13}}>
                    {item.city}
                </Text>
                <Text style={{fontSize:13}}>
                    {item.service}
                </Text>
                </View>
            </View>
          
        )
    }
    return (
        <View>
            <Image style={styles.imageStyle} source={theme.images.bannerImage} />
            <View>
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={data}
                    renderItem={(item) =>
                        renderItem(item)
                    }

                />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        height: 250,
        width: "100%"
    },
    FlatListStyle:{
        marginTop:15,
        borderWidth:1,
        borderColor:'lightgrey',
        width:"90%",
        alignSelf:"center",
        padding:7,
        flexDirection:"row"
    },
    image:{
        height:50,
        width:50,
        marginVertical:7,
        marginRight:10
    }
})
export default ListScreen;