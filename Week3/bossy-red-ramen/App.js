import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';

const LOGIN= () => {
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>LOGIN</Text>
      <View
        style={styles.inputContainer}
      >
      <TextInput placeholder='Email'
        style= {styles.input}>
      </TextInput>
      </View>
      <View
        style={styles.inputContainer}
      >
      <TextInput placeholder='Password'
        style= {styles.input}>
      </TextInput>
        <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/159/159604.png'}}
        style={styles.inputicon}
        />
      </View>

      {/* Verify Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
        <Text style ={styles.text}>
          When you agree to terms and conditions
        </Text>
         <Text style ={styles.text2}>>
          For got your password?
        </Text>
         <Text style ={styles.text}>
          Or login with
        </Text>
        <View style={styles.footerContaienr}> 
          <View>
          <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/733/733547.png'}}
          style={styles.iconFooter}
          />
        </View>
         <Image source={{uri:'https://img.icons8.com/?size=64&id=tPmHPvKVOliP&format=png'}}
          style={styles.iconFooter}
          />
           <Image source={{uri:'https://img.icons8.com/?size=48&id=63785&format=png'}}
          style={styles.iconFooter}
          />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#E0F7FA', // Light blue background
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer:{
    flexDirection:'row',
    alignItems:'center',
    borderWidth:1,
    borderColor:'#BOBEC5',
    borderRadius:5,
    paddingHorizontal:70,
    marginBottom:20,
    backgroundColor:'#ECEFF1'

  },
  input:{
    height:40,
    flex:1,
    paddingRight:10
  },
  inputicon: {
    height: 20, // Thay đổi kích thước biểu tượng
    width: 20,
    position: 'absolute', // Đặt vị trí tuyệt đối
    right: 10, 
    top: 10,
  },
  button: {
    backgroundColor: 'red', // 
    paddingVertical: 10,
    paddingHorizontal: 120,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text:{
    textAlign: 'center',
    marginBottom: 10,
    marginTop:10,
    fontWeight:500
  },
   text2:{
    textAlign: 'center',
    marginBottom: 10,
    marginTop:10,
    fontWeight:500,
    color:'#5D25FA'
  },
  footerContaienr:{
    flex:1,
    flexDirection:'row',
    marginTop:20,
  }
  ,
  iconFooter:{
    width:60,
    height:60,
    padding:40
  }
});

export default LOGIN;
