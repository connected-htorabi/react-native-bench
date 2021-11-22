import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';

import SectionSeparator from '../components/cart/SectionSeparator';
import OrderSection from '../components/cart/order/OrderSection';
import PaymentSection from '../components/cart/payment/PaymentSection';
import NoteSection from '../components/cart/note/NoteSection';
import CardSection from '../components/cart/card/CardSection';

const dummyData = [
    {
        id: 1,
        quantity: 1,
        name: 'Burger',
        description: 'Some Text Goes Here',
        price: 12.34,
    },
    {
        id: 2,
        quantity: 2,
        name: 'Burger',
        description: 'Some Text Goes Here',
        price: 12.34,
    },
    {
        id: 3,
        quantity: 3,
        name: 'Burger',
        description: 'Some Text Goes Here',
        price: 12.34,
    },
    {
        id: 4,
        quantity: 4,
        name: 'Burger',
        description: 'Some Text Goes Here',
        price: 12.34,
    },
    {
        id: 5,
        quantity: 5,
        name: 'Burger',
        description: 'Some Text Goes Here',
        price: 12.34,
    },
];

const Cart = () => (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <OrderSection items={dummyData} />
            <SectionSeparator />
            <NoteSection />
            <SectionSeparator />
            <PaymentSection
                subtotalValue={10.39}
                taxValue={3.45}
                totalValue={9.99}
            />
            <SectionSeparator />
            <CardSection />
        </View>
        <View style={styles.bottomContainer}>
            <Pressable
                onPress={() => alert('placed order')}
                style={{ position: 'absolute', bottom: 0, width: '100%' }}
            >
                <Text style={styles.placeOrderText}>Place Order</Text>
            </Pressable>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    topContainer: {
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    bottomContainer: {
        flex: 1,
    },
    placeOrderText: {
        paddingVertical: 8,
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
        backgroundColor: 'green',
        width: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
});

export default Cart;
