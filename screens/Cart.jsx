import React from 'react';
import { View, SafeAreaView, StyleSheet, Pressable, Text } from 'react-native';

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
    // <View style={styles.container}>
    <>
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
        <SectionSeparator />
        <Pressable onPress={() => {}}>
            <Text style={styles.placeOrderText}>Place Order</Text>
        </Pressable>
    </>
    //  </View>
);

const styles = StyleSheet.create({
    container: {
        padding: 10,
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
