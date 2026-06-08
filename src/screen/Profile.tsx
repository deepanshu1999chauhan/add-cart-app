import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({ navigation }: { navigation: any }) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const data = await AsyncStorage.getItem('user');

      if (data !== null) {
        setUser(JSON.parse(data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('isLoggedIn');

      Alert.alert('Success', 'Logout Successful');

      navigation.replace('login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../images/profileimage.png')}
        style={styles.image}
      />

      <Text style={styles.text}>
        {user?.fullName || 'Your Name'}
      </Text>

      <Text style={styles.text}>
        {user?.email || 'yourname@gmail.com'}
      </Text>

      <View style={styles.row}>
        <Text style={styles.title}>Name :</Text>

        <Text style={styles.value}>
          {user?.fullName || 'React Native'}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.title}>Email :</Text>

        <Text style={styles.value}>
          {user?.email || 'yourname@gmail.com'}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.title}>Mobile :</Text>

        <Text style={styles.value}>
          {user?.phone || '1234567890'}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#96B8FA',
  },

  image: {
    height: 230,
    width: 230,
    resizeMode: 'contain',
    marginTop: 60,
    alignSelf: 'center',
  },

  text: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 5,
  },

  row: {
    flexDirection: 'row',
    marginTop: 30,
    flexWrap: 'wrap',
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
  },

  value: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 10,
  },

  logoutBtn: {
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 40,
    marginTop: 70,
  },

  logoutText: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});