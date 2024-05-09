import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

interface Product {
  id: number;
  name: string;
  price: number;
  Image: string;
}

const Card: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.Image }} style={styles.img} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>Price: ${product.price}</Text>
    </View>
  );
};

const MainPage: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "http://shopping-api-two.vercel.app/products"
      );
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.cardContainer}>
          {data.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  card: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: "#ffffff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  img: {
    width: 72,
    height: 100,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 16,
  },
});

export default MainPage;
