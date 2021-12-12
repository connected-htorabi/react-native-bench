import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WalletHistory = ({ name, creditBalance }) => (
    <View>
        <View style={styles.row}>
            <Text style={styles.rowText}>
                {creditBalance < 30 ? 'From' : 'To'} {name}
            </Text>
            <Text style={styles.rowText}>${creditBalance}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    rowText: {
        fontSize: 21,
    },
});

export default WalletHistory;
