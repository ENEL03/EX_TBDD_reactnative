import React, {Components}  from 'react'
import {
  Text, View, TouchableOpacity,Image,Dimensions,SafeAreaView,TextInput
} from 'react-native'
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default Page = () => {
  return(
    <SafeAreaView style={{width:'100%',height:'100%'}}> 
     {/*Head*/}
     <View style ={{height:0.08*windowHeight, backgroundColor:'#1BA9FF',flexDirection:'row'}}>
        <TouchableOpacity > 
          <Image source={require('../images/ant-design_arrow-left-outlined.png')}
          style ={{width:24,height:24,padding:20,marginTop:10,marginLeft:15}}
           />
        </TouchableOpacity>
        {/*input*/}
        <Image source={require('../images/whh_magnifier.png')}
        style={{position:'absolute',top:15,left:80}}/>
         <TextInput 
         style={{borderWidth:1,backgroundColor:'#FFFFFF',width:150,height:40,padding:10,marginTop:10,marginLeft:20}}
        />
        
        <Image  source={require('../images/bi_cart-check.png')}
        style={{width:24,height:24,marginTop:15,padding:15,marginLeft:40}}
        />
        <TouchableOpacity >
        <Text style={{marginLeft:30,fontWeight:'bold',marginTop:5,padding:15,color:'#FFFFFF'}}> ...</Text>
         </TouchableOpacity>
      </View>
           {/*Content*/}
        <View style={{flexDirection:'row', marginTop:10}}>
            <View style={{width:0.5*windowWidth, marginRight:10}}>
                <Image source={require('../images/giacchuyen 1.png')} 
                style={{width:155,height:80}}
                />
                <Text style={{marginTop:10}}>Cáp chuyển từ Cổng 
USB sang PS2...</Text>
                <Image source={require('../images/Group 4.png')}
                style={{marginTop:10}} />

                <View style={{flexDirection:'row', marginTop:10}}>
                <Text style={{marginRight:20,fontWeight:'bold'}}>69.900 đ</Text>
                <Text style= {{color:'#969DAA'}}>-39%</Text>
                </View>

            </View>
              <View style={{width:0.5*windowWidth}}>
                <Image source={require('../images/daynguon 1.png')} />
                <Text>Cáp chuyển từ Cổng 
USB sang PS2...</Text>
                <Image source={require('../images/Group 4.png')} />
                <Text>69.900 đ</Text>
                <Text>-39%</Text>
            </View>
        </View>
           {/*Content*/}

          <View style={{flexDirection:'row', marginTop:10}}>
            <View style={{width:0.5*windowWidth, marginRight:10}}>
                <Image source={require('../images/dauchuyendoipsps2 1.png')} 
                style={{width:155,height:80}}
                />
                <Text style={{marginTop:10}}>Cáp chuyển từ Cổng 
USB sang PS2...</Text>
                <Image source={require('../images/Group 4.png')}
                style={{marginTop:10}} />

                <View style={{flexDirection:'row', marginTop:10}}>
                <Text style={{marginRight:20,fontWeight:'bold'}}>69.900 đ</Text>
                <Text style= {{color:'#969DAA'}}>-39%</Text>
                </View>

            </View>
              <View style={{width:0.5*windowWidth}}>
                <Image source={require('../images/dauchuyendoi 1.png')} />
                <Text>Cáp chuyển từ Cổng 
USB sang PS2...</Text>
                <Image source={require('../images/Group 4.png')} />
                <Text>69.900 đ</Text>
                <Text>-39%</Text>
            </View>
               {/*Content*/}
        </View>
          <View style={{flexDirection:'row', marginTop:10}}>
            <View style={{width:0.5*windowWidth, marginRight:10}}>
                <Image source={require('../images/carbusbtops2 1.png')} 
                style={{width:155,height:80}}
                />
                <Text style={{marginTop:10}}>Cáp chuyển từ Cổng 
USB sang PS2...</Text>
                <Image source={require('../images/Group 4.png')}
                style={{marginTop:10}} />

                <View style={{flexDirection:'row', marginTop:10}}>
                <Text style={{marginRight:20,fontWeight:'bold'}}>69.900 đ</Text>
                <Text style= {{color:'#969DAA'}}>-39%</Text>
                </View>

            </View>
              <View style={{width:0.5*windowWidth}}>
                <Image source={require('../images/daucam 1.png')} />
                <Text>Cáp chuyển từ Cổng 
USB sang PS2...</Text>
                <Image source={require('../images/Group 4.png')} />
                <Text>69.900 đ</Text>
                <Text>-39%</Text>
            </View>
        </View>
        

    
        {/*Footer*/}

         <View style ={{height:0.08*windowHeight, backgroundColor:'#1BA9FF',flexDirection:'row',borderWidth:1,marginTop:10,justifyContent:'space-around'}}>
               <Image source ={require('../images/Group 10.png')} 
               style = {{width:23,height:18, marginTop:15}}/>
                  <Image source ={require('../images/Vector.png')} 
               style = {{width:23,height:22, marginTop:15}}/>
                  <Image source ={require('../images/Vector 1.png')} 
               style = {{width:23,height:18, marginTop:15}}/>
               
        </View>
    </SafeAreaView>
   
    );
}