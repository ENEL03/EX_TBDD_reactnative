import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ForgetPassword = () => {
  return (
    <View style={styles.container}>
      {/* Icon */}
      <Image
        source={{ uri: 'https://img.icons8.com/ios-filled/100/000000/lock.png' }}
        style={styles.icon}
      />

      {/* Title */}
      <Text style={styles.title}>FORGET PASSWORD</Text>

      {/* Description */}
      <Text style={styles.description}>
        Provide your account's email for which you want to reset your password
      </Text>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/email-open.png' }} 
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
        />
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
    padding: 20,
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#B0BEC5',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#ECEFF1',
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    height: 40,
    flex: 1,
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 5,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ForgetPassword;
