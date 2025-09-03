import React,{Component} from 'react'
import {
  View,SafeAreaView,Text,
} from 'react-native'
import RootComponent from './src/views/index'
import store from './src/views/store'
import { Provider } from 'react-redux';
export default function App() {
  return(

    <Provider store={store}> 

    <RootComponent />
    </Provider>
  );
}