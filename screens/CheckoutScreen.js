import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const CheckoutScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={28} color="#000" />
                </TouchableOpacity>
                <View style={styles.headerTitleContainer}>
                    <Text style={styles.title}>Checkout</Text>
                   <MaterialIcons name="payment" size={24} color="#000" style={styles.moneyIcon} />
                </View>
                <View style={styles.summaryContainer}>
                    <Text style={styles.price}>₹ 1,527</Text>
                    <Text style={styles.taxText}>Including GST (18%)</Text>
                </View>
            </View>
            
            {/* Payment Options */}
            <View style={styles.paymentOptions}>
                <TouchableOpacity style={styles.paymentButtonSelected}>
                    <Image source={require('../assets/Creditcardicon.png')} style={styles.paymentIcon} />
                    <Text style={styles.paymentTextSelected}>Credit card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.paymentButton}>
                    <Image source={require('../assets/Appleicon.png')} style={styles.paymentIcon} />
                    <Text style={styles.paymentText}>Apple Pay</Text>
                </TouchableOpacity>
            </View>
            
            {/* Card Details */}
            <View style={styles.cardContainer}>
                <Text style={styles.label}>Card number</Text>
                <View style={styles.cardInputContainer}>
                    <TextInput style={styles.cardInput} placeholder="5261 4141 0151 8472" keyboardType="numeric" />
                    <Image source={require('../assets/MasterCardLogo.png')} style={styles.cardIcon} />
                    <Image source={require('../assets/CardIcon.png')} style={styles.scanIcon} />
                </View>
                
                <Text style={styles.label}>Cardholder name</Text>
                <TextInput style={styles.input} placeholder="Christie Doe" />
                
                <View style={styles.row}>
                    <View style={styles.cardInputSection}>
                        <Text style={styles.label}>Expiry date</Text>
                        <TextInput style={styles.input} placeholder="06 / 2024" keyboardType="numeric" />
                    </View>
                    <View style={styles.cardInputSection}>
                        <View style={styles.cvvContainer}>
                            <Text style={styles.label}>CVV / CVC</Text>
                            <Ionicons name="help-circle-outline" size={18} color="#B1B1B1" />
                        </View>
                        <TextInput style={styles.input} placeholder="915" keyboardType="numeric" />
                    </View>
                </View>
            </View>
            
            {/* Info Text */}
            <Text style={styles.infoText}>We will send you an order details to your email after the successful payment</Text>
            
            {/* Pay Button */}
            <TouchableOpacity style={styles.payButton} onPress={() => navigation.navigate('PaymentSuccessScreen')}>
            <Image source={require('../assets/noun_Lock_1911126.png')} style={styles.lockIcon} />
            <Text style={styles.payButtonText}>Pay for the order</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fff' },
    header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 },
    backButton: { marginRight: 10 },
    headerTitleContainer: { flexDirection: 'row', alignItems: 'center' },
    title: { fontSize: 24, fontWeight: 'bold', color: '#000' },
    moneyIcon: { width: 24, height: 24, marginLeft: 5 },
    summaryContainer: { alignItems: 'flex-end' },
    price: { color: '#25D482', fontSize: 24, fontWeight: 'bold' },
    taxText: { color: '#B1B1B1', fontSize: 14 },
    paymentOptions: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor:'#F8F8FB', borderRadius: 16, padding: 10, marginVertical: 20 },
    paymentButtonSelected: { backgroundColor: '#25D482', borderRadius: 16, flexDirection: 'row', alignItems: 'center', padding: 15, width: '48%' },
    paymentButton: { backgroundColor: '#F8F8FB', borderRadius: 16, flexDirection: 'row', alignItems: 'center', padding: 15, width: '48%' },
    paymentIcon: { width: 25, height: 31, marginRight: 10 },
    paymentTextSelected: { fontSize: 16, color: '#FFFFFF', fontWeight: '600' },
    paymentText: { fontSize: 16, color: '#3A3C3F', fontWeight: '600' },
    cardContainer: { backgroundColor: '#fff', padding: 15, borderRadius: 16, elevation: 5, shadowColor: '#000' },
    label: { fontSize: 14, fontWeight: '600', marginBottom: 5, color: '#000' },
    cardInputContainer: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#ccc', borderRadius: 10, padding: 10, backgroundColor: '#F8F8FB' },
    cardInput: { flex: 1, fontSize: 16 },
    cardIcon: { width: 24, height: 24, marginLeft: 10 },
    scanIcon: { width: 24, height: 24, marginLeft: 10 },
    input: { padding: 15, borderWidth: 1, borderColor: '#ccc', borderRadius: 10, fontSize: 16, backgroundColor: '#F8F8FB' },
    row: { flexDirection: 'row', justifyContent: 'space-between' },
    cardInputSection: { width: '48%' },
    cvvContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    infoText: { color: '#B1B1B1', textAlign: 'center', marginVertical: 15, fontSize: 12 },
    payButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#25D482', padding: 15, borderRadius: 10, marginTop: 20 },
    payButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16, marginLeft: 10 },
});

export default CheckoutScreen;
