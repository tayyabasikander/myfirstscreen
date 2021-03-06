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
import ForgotPassword from './src/ForgotPassword'
import CategoryScreen from './src/CategoryScreen'
import ListScreen from './src/ListScreen';
import HelpScreen from './src/HelpScreen';
import SettingScreen from './src/SettingScreen';
import CategorySelection from './src/CategorySelection';
import DetailScreen from './src/DetailScreen';
import RequestScreen from './src/RequestScreen';



const navigator = createStackNavigator({
  Register:  RegisterScreen,
  Login: LoginScreen,   
  Landing:Landingscreen,
  ForgotPass:ForgotPassword,
  Category:CategoryScreen,
  List:ListScreen,
  Help:HelpScreen,
  Settings:SettingScreen,
  CategorySelect:CategorySelection,
  Detail:DetailScreen,
  Request:RequestScreen
}, 
{
  initialRouteName:'Landing',
  defaultNavigationOptions:{
    header: null
  }
}
);
export default createAppContainer(navigator);