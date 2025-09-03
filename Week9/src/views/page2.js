import React,{Components} from 'react'
import {
  View,SafeAreaView,Text,Dimensions,Image,TextInput,TouchableOpacity
} from 'react-native'


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default Page2= ({navigation}) => {
  return(

    <SafeAreaView style={{alignItems:'center'}}>
      {/* head*/}
    <View style={{height:0.1* windowHeight, flexDirection:'row',width:334,alignItems:'center', marginLeft:20}}>

         <Image  source={require('../images/Rectangle.png')}
          style ={{borderWidth:1,borderRadius:'50%',backgroundColor:'#D9CBF6'}}

         />
         <View style={{flexDirection:'column', padding:20}}>
         <Text style={{fontWeight:'bold'}}>Hi Twinkle</Text>
          <Text style={{fontSize:14}}>Have agrate day a head</Text>
          </View>
          <TouchableOpacity
          onPress={
            ()=>{
              navigation.goBack();
            }
          }
          >
            <Image  source={require('../images/IconButton11.png')}  />
          </TouchableOpacity>
      
      
    </View>

    <Text style ={{fontSize:32,fontWeight:'bold',marginTop:25}}>ADD YOUR JOB</Text>

         {/* input*/}
    <View style={{borderWidth:1, width:334,height:44,flexDirection:'row',alignItems:'center',padding:10, marginTop:15}}>
        <Image source={require('../images/b.png')} 
        style={{marginRight:10}}
        />
        <TextInput placeholder ='input your job' />
    </View>
     <TouchableOpacity style={{flexDirection:'row',borderWidth:1,borderColor:'#FFF', backgroundColor:'#00BDD6', width:190,height:44,borderRadius:12, marginTop:0.1* windowHeight, alignItems:'center',justifyContent:'center'}}
     onPress={
       ()=>{
         navigation.popToTop();
       }
     }
     >
          <Text style={{fontSize:16,color:'#FFF'}}>   FINISH -></Text>
         </TouchableOpacity>


         <Image 
         source ={require('../images/Image95.png')}
         style={{width:190,height:170 ,top:49}}
         
         />
   
    

    
     </SafeAreaView>
  );
}