import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';

const AddCart = () => {
  const { cartItems, setCartItems } = useContext(UserContext);

  if (!cartItems || cartItems.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No Product in Cart</Text>
      </View>
    );
  }

  const increaseQty = (id: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const deleteItem = (id) => {
    setCartItems(prev =>
      prev.filter(item => item.id !== id)
    );
  };

  const decreaseQty = (id) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Cart</Text>

      <FlatList
        data={cartItems}
        contentContainerStyle= {{paddingBottom: 60}}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>

            <Image
              source={{ uri: item?.images?.[0] }}
              style={styles.image}
            />

            <View style={styles.details}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>Rs. {item.price}</Text>
            </View>
            <View style={styles.qtyContainer}>

              <TouchableOpacity style={styles.qtyBtn} onPress={() => decreaseQty(item.id)}>
                <Text style={styles.qtyText}>-</Text>
              </TouchableOpacity>

              <Text style={styles.qtyNumber}>{item.quantity}</Text>

              <TouchableOpacity style={styles.qtyBtn} onPress={() => increaseQty(item.id)}>
                <Text style={styles.qtyText}>+</Text>
              </TouchableOpacity>

            </View>

            <TouchableOpacity onPress={() => deleteItem(item.id)}>
              <Image source={require('../images/delete.png')} style={styles.image2} />
            </TouchableOpacity>
          </View>

        )}
      />
      <Text style={styles.price2}>Total:  Rs.{totalPrice} </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Proceed to Buy</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddCart;

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
    marginTop: 30,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    elevation: 5,
    marginBottom: 6
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  details: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price2: {
    fontSize: 16,
    color: '#2b6cd4',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 40,
    left: 30
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qtyBtn: {
    backgroundColor: '#a68ede',
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  qtyText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
  qtyNumber: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#6300eece',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    alignSelf: 'flex-end',
    right: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  image2: {
    height: 22,
    width: 22,
    resizeMode: 'contain',
  },
});