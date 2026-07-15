import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native';
import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = ({ navigation }: { navigation: any }) => {

  type Product = {
    id: number;
    title: string;
    price: number;
    stock: number;
    images: string[];
    quantity?: number;
  };

  const {
    todos,
    setUser,
    setSelectedProduct,
    setCartItems,
    cartItems,
  } = useContext(UserContext) as {
    todos: { products: Product[] };
    setUser: any;
    setSelectedProduct: (product: Product) => void;
    cartItems: Product[];
    setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
  };
  const products = todos.products;


  console.log("USER DATA:", products);

  const handleLogout = async () => {
    console.log("Logout Clicked");

    try {
      await AsyncStorage.removeItem('user');
      console.log("AsyncStorage cleared");

      setUser({
        name: "",
        email: "",
        loggedIn: false,
      });

      console.log("Context reset done");

      navigation.replace("login");
      console.log("Navigated to Login Screen");

    } catch (error) {
      console.log("Logout Error:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>

      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          const cartItem = cartItems.find(p => p.id === item.id);

          return (
            <TouchableOpacity
              onPress={() => {
                setSelectedProduct(item);
                navigation.navigate('product');
              }}
              style={styles.card}
            >

              <Image
                source={{ uri: item.images?.[0] }}
                style={styles.image}
              />

              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>Rs.{item.price}</Text>
              <Text style={styles.stock}>Stock: {item.stock}</Text>

              {cartItem ? (
                // Already added → show + -
                <View style={styles.qtyContainer}>

                  <TouchableOpacity
                    style={styles.qtyBtn}
                    onPress={() => {
                      setCartItems(prev =>
                        prev
                          .map(p =>
                            p.id === item.id
                              ? { ...p, quantity: (p.quantity ?? 1) - 1 }
                              : p
                          )
                          .filter(p => (p.quantity ?? 1) > 0)
                      );
                    }}
                  >
                    <Text style={styles.qtyText}>-</Text>
                  </TouchableOpacity>

                  <Text style={styles.qtyNumber}>{cartItem.quantity}</Text>

                  <TouchableOpacity
                    style={styles.qtyBtn}
                    onPress={() => {
                      setCartItems(prev =>
                        prev.map(p =>
                          p.id === item.id
                            ? { ...p, quantity: (p.quantity ?? 1) + 1 }
                            : p
                        )
                      );
                    }}
                  >
                    <Text style={styles.qtyText}>+</Text>
                  </TouchableOpacity>

                </View>
              ) : (
                // Not added → show Add To Cart
                <TouchableOpacity
                  style={styles.plusBtn}
                  onPress={() => {
                    setCartItems(prev => {
                      const exists = prev.find(p => p.id === item.id);

                      if (exists) {
                        return prev;
                      }

                      return [...prev, { ...item, quantity: 1 }];
                    });
                  }}
                >
                  <Text style={styles.plusText}>Add To Cart</Text>
                </TouchableOpacity>
              )}

            </TouchableOpacity>
          );
        }}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#96B8FA',
  },
  card: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    width: '48%',
    margin: '1%',
  },
  logoutBtn: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
    alignSelf: 'flex-end',
    marginBottom: 15,
    marginTop: 20
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  plusBtn: {
    marginTop: 10,
    backgroundColor: '#6200ee',
    borderRadius: 6,
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end', // center under card
  },
  plusText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 6,
  },
  price: {
    fontSize: 14,
    color: 'green',
    fontWeight: 'bold',
  },
  stock: {
    fontSize: 12,
    color: '#333',
    marginBottom: 5,
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  qtyBtn: {
    backgroundColor: '#6200ee',
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  qtyText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  qtyNumber: {
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
});

export default Home;