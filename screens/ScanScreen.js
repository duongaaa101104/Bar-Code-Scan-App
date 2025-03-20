import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const ScanScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={28} color="blue" />
        </TouchableOpacity>
      </View>

      {/* Background Image */}
      <Image
        source={require('../assets/img1.png')}
        style={styles.juiceImage}
      />

      {/* Scan Border */}
      <View style={styles.scanBorder}>
        <View style={styles.cornerTopLeft} />
        <View style={styles.cornerTopRight} />
        <View style={styles.cornerBottomLeft} />
        <View style={styles.cornerBottomRight} />
      </View>

      {/* Product Info */}
      <View style={styles.productInfo}>
        <Image
          source={require('../assets/img1.png')}
          style={styles.productImage}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>Lauren's</Text>
          <Text style={styles.productType}>Orange Juice</Text>
        </View>
      <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate('CartScreen', {
            cartItems: [
            {
            id: 1,
            name: "Lauren's",
            price: 149,
            quantity: 2,
            image: require('../assets/img1.png'),
            }
            ]
            })}
>
  <Ionicons name="add" size={24} color="white" />
</TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F4EF',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40, // Khoảng cách từ trên cùng
    left: 16, // Khoảng cách từ bên trái
    zIndex: 10, // Đảm bảo luôn hiển thị trên ảnh
},


juiceImage: {
  width: '100%', // Full chiều rộng màn hình
  height: '100%', // Full chiều cao màn hình
  resizeMode: 'cover', // Phủ kín ảnh mà không bị méo
  position: 'absolute', // Đặt vị trí tuyệt đối
  top: 0,
  left: 0,
},

  // Khung quét mã
  scanBorder: {
    position: 'absolute',
    top: height * 0.18,
    left: width * 0.1,
    width: width * 0.8,
    height: height * 0.45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cornerTopLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderColor: '#FFF',
    borderRadius: 10,
  },
  cornerTopRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 40,
    height: 40,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderColor: '#FFF',
    borderRadius: 10,
  },
  cornerBottomLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 40,
    height: 40,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderColor: '#FFF',
    borderRadius: 10,
  },
  cornerBottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 40,
    height: 40,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderColor: '#FFF',
    borderRadius: 10,
  },

  // Thông tin sản phẩm
  productInfo: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 12,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  productType: {
    fontSize: 14,
    color: '#666',
  },
  addButton: {
    width: 40,
    height: 40,
    backgroundColor: '#7B8E6D',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ScanScreen;
