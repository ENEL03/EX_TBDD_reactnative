import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      {/* Biểu tượng mắt */}
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/128/159/159604.png' }} // Biểu tượng mắt
        style={styles.eyeIcon}
      />

      {/* Nhập Tên Người Dùng */}
      <View style={styles.inputContainer}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/149/149071.png' }} // Biểu tượng người dùng
          style={styles.inputIcon}
        />
        <TextInput
          placeholder='Please input user name'
          style={styles.input}
        />
      </View>

      {/* Nhập Mật Khẩu */}
      <View style={styles.inputContainer}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/149/149595.png' }} // Biểu tượng khóa
          style={styles.inputIcon}
        />
        <TextInput
          placeholder='Please input password'
          style={styles.input}
          secureTextEntry
        />
      </View>

      {/* Nút Đăng Nhập */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      {/* Liên Kết Đăng Ký và Quên Mật Khẩu */}
      <View style={styles.linkContainer}>
        <TouchableOpacity>
          <Text style={styles.linkText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      {/* Phương Thức Đăng Nhập Khác */}
      <Text style={styles.otherMethodsText}>Other Login Methods</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/1077/1077035.png' }} // Biểu tượng cho phương thức đăng nhập
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/733/733547.png' }} // Biểu tượng cho phương thức đăng nhập
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/733/733558.png' }} // Biểu tượng cho phương thức đăng nhập
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA', // Nền nhạt
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#B0BEC5',
    marginBottom: 20,
    width: '100%',
  },
  input: {
    height: 40,
    flex: 1,
    paddingHorizontal: 10,
    color: '#000', // Màu chữ
  },
  inputIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  eyeIcon: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff', // Màu nút
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  linkText: {
    color: '#007bff',
    fontSize: 14,
  },
  otherMethodsText: {
    marginVertical: 20,
    fontSize: 16,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  socialButton: {
    padding: 10,
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
});

export default Login;