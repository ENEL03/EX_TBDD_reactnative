import React,{Component} from 'react'
import {
  View,SafeAreaView,Text,Dimensions,Image,TextInput,TouchableOpacity
} from 'react-native'


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default Home= ({navigation}) => {
  return(

    <SafeAreaView>
      
    <View style={{alignItems:'center', marginTop:20}}> 
        <Image  source= {require('../images/Image95.png')}
        style ={{width:271,height:271}}
        />

        <Text style={{fontSize:24,fontWeight:'bold', color:'#8353E2',marginTop:15}}>MANAGE YOUR TASK </Text>


        {/*Input */}
          <View style={{flexDirection:'row', borderWidth:1,borderRadius:10, padding:10, marginTop:0.1* windowHeight}}>
            <Image source={require('../images/Frame.png')}
            style= {{marginRight:5}}
            />
            <TextInput placeholder='Enter your name'
             style= {{color:'#BCC1CA'}}
            />
          </View>
          <TouchableOpacity style={{flexDirection:'row',borderWidth:1, backgroundColor:'#00BDD6', width:190,height:44,borderRadius:12, marginTop:80, alignItems:'center',justifyContent:'center', borderColor:'#FFF'}}
          onPress={
            ()=>{
              navigation.navigate('Page');
            }
          }
          >
          <Text style={{fontSize:16,color:'#FFF'}}>   GET STARTED -></Text>
         </TouchableOpacity>

    </View>

    
     </SafeAreaView>
  );
}