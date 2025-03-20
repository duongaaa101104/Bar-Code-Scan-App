import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const cartItems = [
  {
    id: '1',
    name: "Lauren's",
    type: 'Orange Juice',
    price: 149,
    image: require('../assets/img1.png'),
    quantity: 2,
  },
  {
    id: '2',
    name: "Baskin's",
    type: 'Skimmed Milk',
    price: 129,
    image: require('../assets/Rectangle31.png'),
    quantity: 2,
  },
  {
    id: '3',
    name: "Marley's",
    type: 'Aloe Vera Lotion',
    price: 1249,
    image: require('../assets/Rectangle33.png'),
    quantity: 2,
  }
];

const CartScreen = () => {
  const navigation = useNavigation();

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={28} color="#F28B5A" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>
        Your Cart <Text style={styles.emoji}>👍</Text>
      </Text>

      {/* Cart Items */}
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemType}>{item.type}</Text>
              <Text style={styles.itemPrice}>₹ {item.price}</Text>
            </View>
            {/* Quantity Controls */}
            <View style={styles.quantityControl}>
              <TouchableOpacity style={styles.quantityButton}>
                <Ionicons name="remove" size={20} color="#F28B5A" />
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <TouchableOpacity style={styles.quantityButton}>
                <Ionicons name="add" size={20} color="#F28B5A" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Total */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalPrice}>₹ {getTotal()}</Text>
      </View>

      {/* Checkout Button */}
<TouchableOpacity 
      style={styles.checkoutButton} 
      onPress={() => navigation.navigate('CheckoutScreen')}
    >
      <Text style={styles.checkoutButtonText}>Proceed to checkout</Text>
    </TouchableOpacity>
  );


      {/* Bottom Tab */}
      <View style={styles.bottomTab}>
        <Ionicons name="home-outline" size={24} color="#ccc" />
        <Ionicons name="notifications-outline" size={24} color="#ccc" />
        <Ionicons name="file-tray-outline" size={24} color="#ccc" />
        <Ionicons name="time-outline" size={24} color="#ccc" />
        <Ionicons name="cart" size={24} color="#F28B5A" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F4EF',
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  backButton: {
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  emoji: {
    fontSize: 22,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  itemType: {
    fontSize: 12,
    color: '#666',
  },
  itemPrice: {
    fontSize: 14,
    color: '#F28B5A',
    marginTop: 4,
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#FFECE2',
    padding: 6,
    borderRadius: 8,
  },
  quantity: {
    marginHorizontal: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    color: '#F28B5A',
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#F28B5A',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  checkoutButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomTab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFF',
  },
});

export default CartScreen;
