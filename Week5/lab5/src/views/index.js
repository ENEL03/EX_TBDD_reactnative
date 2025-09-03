import React, {Components} from 'react'
import {
  View,
  Text,
  SafeAreaView,
  
} from 'react-native'
import Home from './home'
import ChooseColor from './chooseColor'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default RootComponent = () => {
  return (
    
   <SafeAreaView>

      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="chooseColor" component={ChooseColor} />
      </Stack.Navigator>
    </NavigationContainer>
      
   </SafeAreaView>
  );

}