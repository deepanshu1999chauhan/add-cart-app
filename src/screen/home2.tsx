import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

const HomeScreen = () => {
  const [todos, setTodos] = useState<Product[]>([]);
  type Product = {
  id: number;
  title: string;
  price: number;
};

  const fetchTodos = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setTodos(data.products);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {item.title}
            </Text>
            <Text>₹ {item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;