import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({ navigation }: { navigation: any }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const userData = {
        fullName,
        email,
        phone,
        password,
      };

      await AsyncStorage.setItem('user', JSON.stringify(userData));

      const savedData = await AsyncStorage.getItem('user');
      console.log('Saved Data =>', savedData);

      Alert.alert('Success', 'Signup Successful');
      navigation.replace('MainApp')
    } catch (error) {
      console.log('Signup Error =>', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up</Text>

      <Text style={styles.text2}>Full Name</Text>
      <TextInput
        style={styles.texinput}
        placeholder="Enter Your Full Name"
        value={fullName}
        onChangeText={setFullName}
      />

      <Text style={styles.text2}>Email Id</Text>
      <TextInput
        style={styles.texinput}
        placeholder="Enter Your Email Id"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.text2}>Phone Number</Text>
      <TextInput
        style={styles.texinput}
        placeholder="Enter Your Phone Number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <Text style={styles.text2}>Password</Text>
      <TextInput
        style={styles.texinput}
        placeholder="Enter Your Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.touchable2} onPress={handleSignup}>
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.container4}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('login')} style={{ flex: 1 }}>
          <Text style={styles.signupText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#96B8FA',
  },

  text: {
    fontSize: 36,
    textAlign: 'center',
    marginTop: 100,
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#fff',
  },

  text2: {
    fontSize: 20,
    marginLeft: 43,
    fontWeight: '500',
    marginTop: 10
  },

  texinput: {
    backgroundColor: '#DCE8FF',
    marginHorizontal: 40,
    height: 50,
    padding: 18,
    marginTop: 6,
    borderRadius: 10,
  },

  touchable2: {
    backgroundColor: '#0D43AA',
    marginHorizontal: 40,
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
  },

  btnText: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '600',
    color: '#fff',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },

  text3: {
    fontSize: 16,
  },

  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  container4: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 76,
  },

  signupText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});