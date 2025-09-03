
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

function App() {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 141800;
  const totalPrice = pricePerItem * quantity;

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>

      {/* Product Container */}
      <View style={styles.productContainer}>
        {/* Product Details */}
        <View style={styles.productDetails}>
          <Image
            source={{ uri: 'https://salt.tikicdn.com/cache/750x750/ts/product/7a/5e/62/8a692ce25c7ed5778c5e2e72576a15cc.jpg.webp' }}
            style={styles.productImage}
          />
          <View style={styles.productInfo}>
            <Text style={styles.productTitle}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={styles.productSubText}>Cung cấp bởi Tiki Trading</Text>
            <Text style={styles.productPrice}>
              {pricePerItem.toLocaleString()} đ
              <Text style={styles.originalPrice}> 44.100 đ</Text>
            </Text>
            <TouchableOpacity>
              <Text style={styles.saveForLater}>Mua sau</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Quantity Controller */}
        <View style={styles.quantityController}>
          <TouchableOpacity style={styles.quantityButton} onPress={decreaseQuantity}>
            <Text style={styles.quantityText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityValue}>{quantity}</Text>
          <TouchableOpacity style={styles.quantityButton} onPress={increaseQuantity}>
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Discount Code Section */}
        <View style={styles.discountSection}>
          <TouchableOpacity style={styles.discountButton}>
            <Text style={styles.discountText}>Mã giảm giá</Text>
          </TouchableOpacity>
          <Button title="Áp dụng" onPress={() => {}} />
        </View>

        {/* Price Summary */}
        <View style={styles.priceSummary}>
          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Tạm tính</Text>
            <Text style={styles.priceValue}>{totalPrice.toLocaleString()} đ</Text>
          </View>
          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Thành tiền</Text>
            <Text style={styles.totalValue}>{totalPrice.toLocaleString()} đ</Text>
          </View>
        </View>

        {/* Checkout Button */}
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>TIẾN HÀNH ĐẶT HÀNG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Stylesheet
const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#f5f5f5',
    height:120
  },
  productContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  productDetails: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  productImage: {
    width: 80,
    height: 100,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productSubText: {
    color: '#666',
    marginTop: 4,
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    color: '#d32f2f',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#999',
    fontSize: 12,
  },
  saveForLater: {
    color: '#007bff',
    marginTop: 5,
  },
  quantityController: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  quantityButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityValue: {
    fontSize: 18,
    paddingHorizontal: 10,
  },
  discountSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  discountButton: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  discountText: {
    color: '#555',
  },
  priceSummary: {
    marginBottom: 20,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  priceLabel: {
    fontSize: 14,
  },
  priceValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  totalValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#d32f2f',
  },
  checkoutButton: {
    backgroundColor: '#ff4d4f',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
