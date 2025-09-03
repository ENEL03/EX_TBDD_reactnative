import React,{Component} from 'react'
import {
  View,SafeAreaView,Text,Dimensions,Image,TextInput,TouchableOpacity,FlatList
} from 'react-native'

import FlatListData from '../data/flatlist'
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


const data = [
  { "name": "To check email" },
  { "name": "UI task web page" },
  { "name": "Learn javascript basic" },
    { "name": " Medical App UI" },
      { "name": "Learn Java" },
];

class Flast extends Component {
  render() {
    return (
      <View style={{flexDirection:'row', padding:15,borderWidth:1,width:335,height:48,borderRadius:10,backgroundColor:'#9095A0', marginTop:20}}>
        <Image source={require('../images/Frame(4).png')}
        style={{position:'absolute', left:10,top:10,}}
         />
        <Text style={{fontSize:16,position:'absolute', left:40,top:10,}}>{this.props.item.name} </Text> 

    '    <Image source={require('../images/a.png')}
          style={{position:'absolute', right:10,top:10}}
     />
    </View>
    );
  }
}
export default Page= ({navigation}) => {
  return(

    <SafeAreaView style={{alignItems:'center'}}>
      {/* head*/}
    <View style={{height:0.1* windowHeight, flexDirection:'row',width:334,alignItems:'center'}}>
        <TouchableOpacity
          onPress={
            ()=>{
              navigation.goBack();
            }
          }
          >
            <Image  source={require('../images/IconButton11.png')}  />
          </TouchableOpacity>
      

         <Image  source={require('../images/Rectangle.png')}
          style ={{borderWidth:1,borderRadius:'50%',backgroundColor:'#D9CBF6',marginLeft:60}}

         />
         <View style={{flexDirection:'column', padding:20}}>
         <Text style={{fontWeight:'bold'}}>Hi Twinkle</Text>
          <Text style={{fontSize:14}}>Have agrate day a head</Text>
          </View>

    </View>

         {/* search*/}
    <View style={{borderWidth:1, width:334,height:44,flexDirection:'row',alignItems:'center',padding:10, marginTop:15}}>
        <Image source={require('../images/Frame(2).png')} 
        style={{marginRight:10}}
        />
        <TextInput placeholder ='Search' />
    </View>

       <View>
      <FlatList
        data={data}
        renderItem={({ item, index }) => {
          return (<Flast item={item} index={index} />);
        }}
        
      />
    </View>

    <TouchableOpacity style ={{width:69,height:69,borderWidth:1,alignItems:'center',justifyContent:'center',borderRadius:'50%', backgroundColor:'#00BDD6', marginTop:0.05*windowHeight}}
    onPress={
      ()=>{
        navigation.navigate('Page2');
      }
    }
    >
        <Text style={{fontSize:32,color:'#FFF'}}>+</Text>
    </TouchableOpacity>
    

    
     </SafeAreaView>
  );
}