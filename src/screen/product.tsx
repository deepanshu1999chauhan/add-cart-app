import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';

const product = () => {

  const { selectedProduct } = useContext(UserContext);
  const item = selectedProduct;

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>Product Details</Text>

      <Image
        source={{ uri: item?.images?.[0] }}
        style={{ width: 230, height: 230, marginBottom: 30, alignSelf: 'center' }}
      />

      <View style={styles.input}>
        <Text>Title:  {item.title}</Text>
      </View>

      <View style={styles.input}>
        <Text>Description:  {item.description}</Text>
      </View>

      <View style={styles.input}>
        <Text>Price:  {item.price}</Text>
      </View>

      <View style={styles.input}>
        <Text>Stock:  {item.stock}</Text>
      </View>

      {/* <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add Cart</Text>
      </TouchableOpacity> */}

    </View>
  );
};

export default product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#96B8FA',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 60,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});