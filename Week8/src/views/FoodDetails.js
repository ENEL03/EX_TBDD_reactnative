import React from 'react';
import { View, Text, Image, Button } from 'react-native';

const FoodDetails = ({ route }) => {
  const { food } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Image source={food.image} style={{ width: '100%', height: 200, borderRadius: 10 }} />
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 10 }}>{food.name}</Text>
      <Text style={{ fontSize: 18, marginVertical: 5 }}>{food.description}</Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 5 }}>Price: ${food.price.toFixed(2)}</Text>
      <Text style={{ fontSize: 16, marginVertical: 10 }}>
        Restaurants info: Order a Large Pizza that is the equivalent of a medium-sized from other places.
      </Text>
      <Button title="Add to cart" onPress={() => {}} />
    </View>
  );
};

export default FoodDetails;