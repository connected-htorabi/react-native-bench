import React from 'react';
import { View, StyleSheet } from 'react-native';

import OrderSection from '../components/cart/OrderSection';
import PaymentSection from '../components/cart/PaymentSection';
import NoteSection from '../components/cart/NoteSection';
import SectionSeparator from '../components/cart/SectionSeparator';

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
        <OrderSection items={dummyData} />
        <SectionSeparator />
        <NoteSection />
        <SectionSeparator />
        <PaymentSection
            subtotalValue={10.39}
            taxValue={3.45}
            totalValue={9.99}
        />
    </View>
);

const styles = StyleSheet.create({
    container: { padding: 10 },
});

export default Cart;
