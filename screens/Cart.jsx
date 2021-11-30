import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    Pressable,
    Text,
    TouchableOpacity,
} from 'react-native';
import axios from 'axios';

import SectionSeparator from '../components/cart/SectionSeparator';
import OrderSection from '../components/cart/order/OrderSection';
import PaymentSection from '../components/cart/payment/PaymentSection';
import NoteSection from '../components/cart/note/NoteSection';
import CardSection from '../components/cart/card/CardSection';

const Cart = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:9001/cart')
            .then(({ data }) => setItems(data));
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <OrderSection items={items} />
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
                <TouchableOpacity onPress={() => alert('placed order')}>
                    <Text style={styles.placeOrderText}>Place Order</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

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
        justifyContent: 'flex-end',
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
