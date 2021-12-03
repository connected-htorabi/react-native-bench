import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    Pressable,
} from 'react-native';
import useExpanded from '../hooks/useExpanded';

const isNormalInteger = (str) => /^\+?(0|[1-9]\d*)$/.test(str);

const Payee = ({ name, onSendMoney = (amount) => {} }) => {
    const { expanded, toggle } = useExpanded();
    const [amount, setAmount] = useState('');

    const sendMoney = () => {
        onSendMoney(amount);
        toggle();
        setAmount('');
    };
    return (
        <View>
            <View style={styles.firstRow}>
                <Text style={{ fontSize: 21 }}>{name}</Text>
                <Pressable style={styles.addButton} onPress={toggle}>
                    <Text>{expanded ? 'Cancel' : 'Add'}</Text>
                </Pressable>
            </View>
            {expanded && (
                <View>
                    <View style={styles.secondRow}>
                        <TextInput
                            onChangeText={setAmount}
                            placeholder="Amount"
                            value={amount}
                            style={styles.textInput}
                        />
                        <Button
                            color="green"
                            disabled={!isNormalInteger(amount)}
                            onPress={sendMoney}
                            title="Send"
                        />
                    </View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        display: 'flex',
        padding: 10,
    },
    firstRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    secondRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    addButton: {
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 2,
        paddingTop: 5,
        paddingBottom: 5,
        width: 100,
        textAlign: 'center',
    },
});

export default Payee;
