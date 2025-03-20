import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const PaymentSuccessScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={28} color="#7D7D7D" />
            </TouchableOpacity>

            <Image source={require('../assets/Group167.png')} style={styles.image} />

            <Text style={styles.successText}>Payment Success, Yayy!</Text>
            <Text style={styles.description}>
                We will send order details and invoice to your contact no. and registered email
            </Text>

            <TouchableOpacity onPress={() => alert('Viewing Details')} style={styles.detailsButton}>
                <Text style={styles.detailsText}>Check Details</Text>
                <Ionicons name="arrow-forward" size={16} color="#4C7BF3" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => alert('Downloading Invoice')} style={styles.invoiceButton}>
                <Text style={styles.invoiceText}>Download Invoice</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', padding: 20 },
    backButton: { position: 'absolute', top: 50, left: 20 },
    image: { width: 200, height: 200, marginBottom: 20 },
    successText: { fontSize: 20, fontWeight: 'bold', color: '#333' },
    description: { fontSize: 14, color: '#666', textAlign: 'center', marginVertical: 10 },
    detailsButton: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
    detailsText: { fontSize: 16, color: '#4C7BF3', marginRight: 5 },
    invoiceButton: { backgroundColor: '#4C7BF3', padding: 15, borderRadius: 10, marginTop: 20, width: '80%', alignItems: 'center' },
    invoiceText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});

export default PaymentSuccessScreen;
