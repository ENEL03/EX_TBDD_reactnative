import React, {Component,useState,useEffect} from 'react'
import {
  View,SafeAreaView,Text
} from 'react-native'
import Home from './home'
import FoodDetails from './FoodDetails'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default RootComponent=()=>{
  return(

    <View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FoodDetails" component={FoodDetails} />
      </Stack.Navigator>
    </NavigationContainer>
    <Home />
    </View>
  );
}