import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { selectUserById } from '../redux/users/selectors';

const WalletHistory = ({ senderId, receiverId, amount, userId }) => {
    const receiver = useSelector(selectUserById(receiverId));
    const sender = useSelector(selectUserById(senderId));
    return (
        <View>
            <View style={styles.row}>
                <Text style={styles.rowText}>
                    {senderId === userId
                        ? `To ${receiver?.name}`
                        : `From ${sender?.name}`}
                </Text>
                <Text style={styles.rowText}>${amount}</Text>
            </View>
        </View>
    );
};

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
