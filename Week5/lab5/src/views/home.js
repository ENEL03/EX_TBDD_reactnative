import React, {Components} from 'react'
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions
} from 'react-native'
import vs_blue from '../images/vs_blue.png'
import star from '../images/star.png'


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default Home = ({route,navigation}) => {
   const { selectedColor, selectedPrice, selectedSupplier, selectedImage } = route.params || {};

  const displayColor = selectedColor || 'Đỏ';
  const displayPrice = selectedPrice || '1.790.000 đ';
  const displaySupplier = selectedSupplier || 'Tiki Trangding';
  const displayImage = selectedImage || require('../images/vs_blue.png'); 
  return (

   <SafeAreaView style={{width:'100%', height:'100%'}} >
     {/* ImageImage */}
        <View style = {{width:'100%',justifyContent:'center',alignItems:'center'}}>
            <Image  source = {displayImage}
             />
        </View>
         {/* Details */}
         <View style={{padding:10,}}> <Text style={{fontSize:16}}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng </Text></View>
          {/* Rewiews */}
          <View style={{flexDirection:'row'}}>
            <Image source={require('../images/star.png')} />
              <Image source={require('../images/star.png')} />
                <Image source={require('../images/star.png')} />
                  <Image source={require('../images/star.png')} />
                    <Image source={require('../images/star.png')} />
              <Text style={{marginLeft:20,fontSize:16}}>(Xem 828 đánh giá)</Text>
          </View>
               {/* Price */}
          <View style={{flexDirection:'row', marginTop: 10}}>
            <Text style= {{fontSize:18,fontWeight:'bold', marginRight:40}}>1.790.000 đ</Text>
             <Text style= {{fontSize:18,  textDecorationLine:'line-through'}}>1.790.000 đ</Text>
          </View>
            {/* why */}
            <View style={{flexDirection:'row', marginTop:10}} >
            <Text style={{fontWeight:12,color:'#FA0000', marginRight:30}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
            <Text style={{borderWidth:1,borderRadius:'50%',width:20,height:20,textAlign:'center'}}>?</Text>
            </View>
             {/* choose color */}
              <View style={{alignItems:'center',marginTop:20}}>
                <TouchableOpacity style={{borderRadius:10,borderWidth:1,width:300,height:50,justifyContent:'center'}}
                onPress= {()=>{
                   navigation.navigate('chooseColor',{
                     color:'red',
                     supplier:'Tiki Trangding',
                     price:'1.790.000 đ'
                   });
                }}
                >
                    <Text style={{textAlign:'center'}}>4 MÀU-CHỌN MÀU      ></Text>
                </TouchableOpacity>
              </View>
                {/* Buy */}
               <View style={{alignItems:'center',marginTop:20}}>
                <TouchableOpacity style={{borderRadius:10,borderWidth:1,width:300,height:50,justifyContent:'center',backgroundColor:'#EE0A0A'}}>
                    <Text style={{textAlign:'center',color:'white'}}>CHỌN MUA</Text>
                </TouchableOpacity>
              </View>

   </SafeAreaView>
  );

}