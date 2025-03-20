import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        // Chuyển sang HomeScreen sau 10 giây
        const timer = setTimeout(() => {
            navigation.replace('Home');
        }, 1000);

        return () => clearTimeout(timer); // Xóa timeout khi component bị hủy
    }, []);

    return (
        <View style={styles.container}>
            <Image source={require('../assets/store-icon.png')} style={styles.logo} />
            <Text style={styles.title}>Welcome to MyApp!</Text>
            <Text style={styles.description}>
                Experience the best app for your daily needs. Let's get started!
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FCE4EC',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        color: '#666',
        marginTop: 10,
        paddingHorizontal: 20,
    },
});

export default SplashScreen;
