// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import FirstScreen from './src/FirstScreen';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

// export default function App() {
//   return (
//     <View>
//   <FirstScreen />
//   </View>
//   )
// }

// const styles = StyleSheet.create({

  
// });
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
 import RegisterScreen from './src/RegisterScreen';
import LoginScreen from './src/LoginScreen';
import LandingScreen from './src/LandingScreen';
import Landingscreen from './src/LandingScreen';


const navigator = createStackNavigator({
  Register:  RegisterScreen,
  Login: LoginScreen,   
  Landing:Landingscreen
},
{
  initialRouteName:'Register',
  defaultNavigationOptions:{
    header: null
  }
}
);
export default createAppContainer(navigator);