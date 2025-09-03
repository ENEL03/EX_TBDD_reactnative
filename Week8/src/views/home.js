import React, {Component,useState,useEffect} from 'react'
import {
  View,SafeAreaView,Text,FlatList,TouchableOpacity,Image,Dimensions,TextInput
} from 'react-native'

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import donut_red from '../images/donut_red.png'
import donut_yellow from '../images/donut_yellow.png'
import donut_green from '../images/green_donut.png'
import tasty_dount from '../images/tasty_donut.png'
const donutsData = [
  { id: 1, name: 'Tasty Donut',description:'Spicy tasty donut family', price: 10.00, image: donut_yellow },
  { id: 2, name: 'Pink Donut',description:'Spicy tasty donut family', price: 20.00, image:tasty_dount },
  { id: 3, name: 'Floating Donut',description:'Spicy tasty donut family', price: 30.00, image: donut_green },
    { id: 4, name: 'Tasty Donut',description:'Spicy tasty donut family', price: 10.00, image: donut_red },
];


export default Home=({navigation})=>{
  
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectProduct = (product) => {
    navigation.navigate('foodDetails', { food: product });
  };
  const FlatListData = ({ item, onSelectProduct }) => {
  const handleSelectProduct = () => {
    onSelectProduct(item);
  };

  return (
    <View style={{ borderWidth: 1, width: 337, height: 115, backgroundColor: '#F4DDDD', borderRadius: 10, borderColor: '#F4DDDD', marginTop: 10, alignItems: 'center', padding: 5, flexDirection: 'row' }}>
      <Image source={item.image} />
      <View>
        <Text style={{ fontSize: 20, fontWeight: 700, padding: 5, fontFamily: 'Roboto' }}>{item.name}</Text>
        <Text style={{ fontSize: 15, fontWeight: 500, padding: 5, fontFamily: 'Roboto' }}>{item.description}</Text>
        <Text style={{ fontSize: 20, fontWeight: 700, padding: 5, fontFamily: 'Roboto' }}>${item.price.toFixed(2)}</Text>
      </View>
      <TouchableOpacity onPress={handleSelectProduct}>
        <Text style={{ width: 44, height: 45, color: '#FFF', fontSize: 30, textAlign: 'center', backgroundColor: '#F1B000', borderRadius: 10, position: 'absolute', right: -58, bottom: -58 }}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

  return(

    <SafeAreaView style={{padding:10}}>
      {/* head*/}
      <View>
      <Text style={{fontSize:16,fontWeight:700,padding:5,fontFamily:'Roboto'}}>Welcome, Jala!</Text>
      <Text style={{fontSize:20,fontWeight:700,padding:5,fontFamily:'Roboto'}}>Choice you Best food</Text>
      <TextInput
      style={{borderWidth:1,backgroundColor:'#C4C4C41A',height:46,borderRadius:3,width:266,padding:10,color:'#C4C4C4', marginTop:10,borderColor:'#C4C4C4'}}
       placeholder="Search food" />
      </View>
      {/* filter*/}
      <View style = {{flexDirection:'row',justifyContent:'space-around', marginTop:10}}>
        <TouchableOpacity 
            style={{borderWidth:1,backgroundColor:'#F1B000',height:35,borderRadius:5,width:101,padding:10,color:'#C4C4C4', marginTop:10,borderColor:'#C4C4C4',alignItems:'center',justifyContent:'center'}}
         >
        <Text style={{fontSize:14,fontWeight:700,padding:5,fontFamily:'Roboto'}}>Donut</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
            style={{borderWidth:1,height:35,borderRadius:5,width:120,padding:10,color:'#C4C4C4', marginTop:10,borderColor:'#C4C4C4',justifyContent:'center'}}
         >
        <Text style={{fontSize:14,fontWeight:600,padding:5,fontFamily:'Roboto'}}>Pink Donut</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            style={{borderWidth:1,height:35,borderRadius:5,width:101,padding:10,color:'#C4C4C4', marginTop:10,borderColor:'#C4C4C4',alignItems:'center',justifyContent:'center'}}
         >
        <Text style={{fontSize:14,fontWeight:600,padding:5,fontFamily:'Roboto'}}>Floating</Text>
        </TouchableOpacity>
      </View> 
     {/* product*/}
   <View>
      <FlatList
          data={donutsData}
          renderItem={({ item, index }) => {
            return <FlatListData item={item} index={index} onSelectProduct={handleSelectProduct} />;
          }}
        />
   </View>
    </SafeAreaView>
  );
}