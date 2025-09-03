import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const REGISTER = () => {
  return (
    <View style={styles.container}>
      {/* Tiêu đề */}
      <Text style={styles.title}>REGISTER</Text>

      <TextInput
        placeholder='Name'
        style={styles.input}
      />

      <TextInput
        placeholder='Phone'
        style={styles.input}
      />

      <TextInput
        placeholder='Email'
        style={styles.input}
      />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Password'
          style={styles.input}
          secureTextEntry={true}
        />
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/159/159604.png' }}
            style={styles.inputIcon}
          />
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder='Birthday'
        style={styles.input}
      />

      <View style={styles.genderContainer}>
        <Text style={styles.genderText}>Gender:</Text>
        <TouchableOpacity>
          <Text style={styles.genderOption}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.genderOption}>Female</Text>
        </TouchableOpacity>
      </View>

      {/* Nút Đăng Ký */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>REGISTER</Text>
      </TouchableOpacity>

      <Text style={styles.text}>When you agree to terms and conditions</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#E0F7FA', // Nền màu xanh nhạt
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#B0BEC5',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#ECEFF1',
    marginBottom: 20,
  },
  inputContainer: {
    position: 'relative',
    width: '100%',
  },
  inputIcon: {
    height: 20,
    width: 20,
    position: 'absolute',
    right: 10,
    top: 10,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    width: '100%',
  },
  genderText: {
    marginRight: 10,
  },
  genderOption: {
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 120,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '500',
  },
});

export default REGISTER;