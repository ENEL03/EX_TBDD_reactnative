import React,{Components} from 'react'
import {
  View,SafeAreaView,Text,
} from 'react-native'
import RootComponent from './src/views/index'
export default function App() {
  return(

    <SafeAreaView> 

    <RootComponent />
    </SafeAreaView>
  );
}