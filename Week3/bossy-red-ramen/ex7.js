import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      {/* Tiêu đề */}
      <Text style={styles.title}>LOGIN</Text>

      {/* Nhập Email */}
      <View style={styles.inputContainer}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/149/149071.png' }} // Icon cho Name
          style={styles.inputIcon}
        />
        <TextInput
          placeholder='Name'
          style={styles.input}
        />
      </View>

      {/* Nhập Mật Khẩu */}
      <View style={styles.inputContainer}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3064/3064155.png' }} // Icon cho Password
          style={styles.inputIcon}
        />
        <TextInput
          placeholder='Password'
          style={styles.input}
          secureTextEntry
        />
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/159/159604.png' }} // Icon cho hiển thị mật khẩu
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Nút Đăng Nhập */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      {/* Liên Kết Tạo Tài Khoản */}
      <TouchableOpacity>
        <Text style={styles.createAccountText}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFEB3B', // Nền vàng
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#B0BEC5',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  input: {
    height: 40,
    flex: 1,
    paddingHorizontal: 10,
  },
  inputIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
  button: {
    backgroundColor: '#000000', // Nút màu đen
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  createAccountText: {
    marginTop: 20,
    color: '#5D25FA',
  },
});

export default Login;