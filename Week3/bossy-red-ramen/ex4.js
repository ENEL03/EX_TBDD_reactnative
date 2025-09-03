import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const VerificationCode = () => {
  const [code, setCode] = useState('');

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>CODE</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>VERIFICATION</Text>

      {/* Description */}
      <Text style={styles.description}>
        Enter onetime password sent on +849092605798
      </Text>

      {/* OTP Input */}
      <View style={styles.codeContainer}>
        {Array(6).fill(0).map((_, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(text) => {
              const newCode = code.split('');
              newCode[index] = text;
              setCode(newCode.join(''));
            }}
            value={code[index] || ''}
          />
        ))}
      </View>

      {/* Verify Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>VERIFY CODE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA', // Light blue background
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  codeInput: {
    borderWidth: 1,
    borderColor: '#B0BEC5',
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
    width: 40,
    marginHorizontal: 5,
    backgroundColor: '#ECEFF1',
  },
  button: {
    backgroundColor: '#FFD700', // Yellow button
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default VerificationCode;
