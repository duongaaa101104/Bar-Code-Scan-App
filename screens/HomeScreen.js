import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation(); // Thêm useNavigation để điều hướng

  const insights = [
    {
      id: '1',
      title: 'Scan new',
      value: 'Scanned 483',
      icon: <Ionicons name="scan-outline" size={48} color="#7C3AED" />,
      onPress: () => navigation.navigate('Scan') // Thêm hành động khi bấm nút
    },
    {
      id: '2',
      title: 'Counterfeits',
      value: 'Counterfeited 32',
      icon: <MaterialIcons name="error-outline" size={48} color="#F87171" />
    },
    {
      id: '3',
      title: 'Success',
      value: 'Checkouts 8',
      icon: <FontAwesome5 name="check-circle" size={48} color="#34D399" />
    },
    {
      id: '4',
      title: 'Directory',
      value: 'History 26',
      icon: <Feather name="calendar" size={48} color="#60A5FA" />
    }
  ];
  const exploreItems = [
    require('../assets/Rectangle31.png'),
    require('../assets/Rectangle32.png'),
    require('../assets/Rectangle33.png'),
  ];
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.name}>Christie Doe</Text>
        </View>
        <Image source={require('../assets/MaskGroup.png')} style={styles.avatar} />
      </View>

      {/* Your Insights */}
      <Text style={styles.sectionTitle}>Your Insights</Text>
      <View style={styles.insightsContainer}>
        {insights.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={styles.card}
            onPress={item.onPress} // Gắn sự kiện khi bấm nút
          >
            {item.icon}
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardValue}>{item.value}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Explore More */}
      <View style={styles.exploreContainer}>
        <Text style={styles.sectionTitle}>Explore More</Text>
        <FlatList
          data={exploreItems}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Image source={item} style={styles.exploreImage} />
          )}
        />
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Ionicons name="home" size={28} color="#60A5FA" />
        <Ionicons name="notifications-outline" size={28} color="#9CA3AF" />
        <Ionicons name="scan-outline" size={28} color="#9CA3AF" />
        <Ionicons name="time-outline" size={28} color="#9CA3AF" />
        <Ionicons name="cart-outline" size={28} color="#9CA3AF" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 16,
    color: '#6B7280',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  insightsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 8,
  },
  cardValue: {
    fontSize: 12,
    color: '#6B7280',
  },
   exploreContainer: {
    marginTop: 20,
  },
  exploreImage: {
    width: 120,
    height: 100,
    borderRadius: 12,
    marginRight: 10,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  }
});

export default HomeScreen;
