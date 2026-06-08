import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 const handleLogin = async () => {
  try {
    const data = await AsyncStorage.getItem('user');

    console.log('Stored Data =>', data);

    if (!data) {
      Alert.alert('Error', 'No user found');
      return;
    }

    const user = JSON.parse(data);

    if (
      email.trim().toLowerCase() === user.email.toLowerCase() &&
      password === user.password
    ) {
      Alert.alert('Success', 'Login Successful');

      navigation.replace('MainApp');
    } else {
      Alert.alert('Error', 'Invalid Email or Password');
    }
  } catch (error) {
    console.log('Login Error =>', error);
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Log In</Text>

      <TextInput
        style={styles.texinput}
        placeholder="Enter Your Email Id"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.texinput}
        placeholder="Enter Your Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate('forgotpassword')}>
        <Text style={{ fontSize: 18, textAlign: 'right' }}>
          Forgot Password
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.touchable2} onPress={handleLogin}>
        <Text style={styles.btnText}>Log In</Text>
      </TouchableOpacity>

      <View style={styles.container4}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('signup')} style={{ flex: 1 }}>
          <Text style={styles.signupText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#96B8FA',
  },

  text: {
    fontSize: 33,
    textAlign: 'center',
    marginTop: 100,
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#fff',
  },

  texinput: {
    backgroundColor: '#DCE8FF',
    marginHorizontal: 40,
    height: 50,
    padding: 18,
    marginTop: 30,
    borderRadius: 10,
  },

  touchable: {
    marginTop: 6,
    marginLeft: 120,
    marginRight: 43,
  },

  text3: {
    fontSize: 16,
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