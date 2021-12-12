import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WalletHistory = ({ name }) => (
    <View>
        <View style={styles.firstRow}>
            <Text style={{ fontSize: 21 }}>From {name}</Text>
            <Text style={{ fontSize: 21 }}>$20</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    firstRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
});

export default WalletHistory;
