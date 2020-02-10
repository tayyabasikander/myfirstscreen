import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import { theme } from './theme/theme';

const Landingscreen = () => {
 return(
     <View>
         {/* <Text>wdihwidh</Text> */}
          <Image style={styles.imageStyle} source={theme.images.bannerImage} />
     </View>
 )
}
const styles=StyleSheet.create({
    imageStyle: {
        height: 200,
        width: "100%"
    },
})
export default Landingscreen;