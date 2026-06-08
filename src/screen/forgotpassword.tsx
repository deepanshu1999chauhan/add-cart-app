import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';

const forgotpassword = () => {
  return (
    <View style={styles.container}>
            <View style={styles.container2}>
                <Text style={styles.text}>Forgot Password</Text>
                <Text style={styles.text2}>
                    Please enter the email address you'd like your password
                    reset information sent to
                </Text>
                <TextInput
                    style={styles.textinput}
                    placeholder='Enter Your Email Id'
                />
                <TouchableOpacity style={styles.touchableOpacity}>
                    <Text style={{ textAlign: 'center', color: '#fff', fontSize: 23, fontWeight: '600' }}>Send</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#96B8FA',
    },
    container2: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 170,
        marginBottom: 260,
        marginHorizontal: 30,
    },
    text: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 30,
    },
    text2: {
        fontSize: 10,
        marginHorizontal: 30,
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 10
    },
    textinput: {
        backgroundColor: '#DCE8FF',
        marginHorizontal: 18,
        height: 36,
        padding: 10,
        marginTop: 3,
        borderRadius: 10,
    },
    touchableOpacity: {
        backgroundColor: '#0D43AA',
        marginHorizontal: 18,
        marginTop: 36,
        padding: 10,
        borderRadius: 10,
    },
});

export default forgotpassword;