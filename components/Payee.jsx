import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import useExpanded from '../hooks/useExpanded';

const isNormalInteger = (str) => /^\+?(0|[1-9]\d*)$/.test(str);

const Payee = ({ name, onSendMoney = (amount) => {} }) => {
    const { expanded, toggle } = useExpanded();
    const [amount, setAmount] = useState('');

    const sendMoney = () => {
        onSendMoney(Number(amount));
        toggle();
        setAmount('');
    };
    return (
        <View>
            <View style={styles.firstRow}>
                <Text style={{ fontSize: 21 }}>{name}</Text>
                <TouchableOpacity
                    style={addButtonStyle(expanded)}
                    onPress={toggle}
                >
                    <Text style={styles.addButtonText}>
                        {expanded ? 'Cancel' : 'Add'}
                    </Text>
                </TouchableOpacity>
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
                        <TouchableOpacity
                            color="green"
                            disabled={!isNormalInteger(amount)}
                            onPress={sendMoney}
                            style={[
                                styles.sendButton,
                                isNormalInteger(amount)
                                    ? styles.sendButtonActive
                                    : styles.sendButtonDisabled,
                            ]}
                        >
                            <Text
                                style={
                                    isNormalInteger(amount)
                                        ? styles.sendButtonTextActive
                                        : styles.sendButtonTextDisabled
                                }
                            >
                                Send
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
};

const addButtonStyle = (expanded) => ({
    backgroundColor: expanded ? '#ad2f2f' : '#0374a8',
    alignItems: 'center',
    borderRadius: 2,
    paddingTop: 5,
    paddingBottom: 5,
    width: 100,
    textAlign: 'center',
});
const styles = StyleSheet.create({
    textInput: {
        height: 30,
        width: 70,
        display: 'flex',
        padding: 6,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        marginRight: 12,
        flexGrow: 0,
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
        marginBottom: 10,
    },
    addButtonText: {
        color: 'white',
    },
    sendButton: {
        borderWidth: 1,
        padding: 6,
        borderRadius: 4,
    },
    sendButtonActive: {
        borderColor: 'green',
        backgroundColor: 'green',
    },
    sendButtonDisabled: {
        borderColor: '#e3e2de',
        backgroundColor: '#e3e2de',
    },
    sendButtonTextActive: {
        color: 'white',
    },
    sendButtonTextDisabled: {
        color: 'gray',
    },
});

export default Payee;
