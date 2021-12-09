import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { useToast } from 'react-native-styled-toast';

import { useDispatch, useSelector } from 'react-redux';
import { sendCredit } from '../redux/thunks/sendCredit';
import { selectUser } from '../redux/users/selectors';
import Expandable from '../components/Expandable';
import Header from '../components/Header';
import Body from '../components/Body';
import Icon from '../components/Icon';
import Payee from '../components/Payee';

const Wallet = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const [isSendMoneyActive, setIsSendMoneyActive] = useState(false);
    const { toast } = useToast();

    const onExpand = () => {
        setIsSendMoneyActive((prev) => setIsSendMoneyActive(!prev));
    };

    const sendMoney = (
        amount,
        recipientId,
        recipientBalance,
        recipientName
    ) => {
        dispatch(
            sendCredit({
                senderId: user.id,
                recipientId,
                senderBalance: user.creditBalance,
                recipientBalance,
                amount,
            })
        );
        toast({
            message: `$${amount} sent to ${recipientName}`,
        });
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.pageHeader}>Wallet</Text>
                <Balance balance={user.creditBalance} />
                <Text style={[styles.sectionHeader, { marginBottom: 20 }]}>
                    Send Money
                </Text>
                <Expandable
                    shouldExpand={isSendMoneyActive}
                    onExpand={onExpand}
                    style={styles.expandable}
                >
                    <Header style={styles.expandableHeader}>
                        <Text style={styles.expandableHeaderText}>Friends</Text>
                        <Icon />
                    </Header>

                    <Body>
                        <View style={styles.expandableBody}>
                            {user.friends.map(
                                ({ name, id, creditBalance }, i) => (
                                    <Payee
                                        name={name}
                                        key={i}
                                        onSendMoney={(amount) =>
                                            sendMoney(
                                                amount,
                                                id,
                                                creditBalance,
                                                name
                                            )
                                        }
                                    />
                                )
                            )}
                        </View>
                    </Body>
                </Expandable>
            </View>
        </SafeAreaView>
    );
};

const Balance = ({ balance }) => (
    <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Balance</Text>
        <Text style={styles.balanceText}>${balance}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        padding: 20,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
    pageHeader: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    sectionHeader: {
        fontSize: 21,
        fontWeight: 'bold',
        marginTop: 25,
        marginBottom: 20,
    },
    balanceContainer: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    balanceText: {
        fontSize: 21,
    },
    pendingTransferContainer: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    pendingTransferAcceptButton: {
        alignItems: 'center',
        borderColor: '#4BAA00',
        borderWidth: 1,
        borderRadius: 2,
        paddingTop: 5,
        paddingBottom: 5,
        width: 100,
    },
    pendingTransferAcceptButtonText: {
        color: '#4BAA00',
    },
    expandable: {
        marginBottom: 20,
    },
    expandableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        padding: 20,
    },
    expandableHeaderText: {
        fontSize: 21,
    },
    expandableBody: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 5,
        paddingTop: 5,
        paddingLeft: 15,
        paddingBottom: 5,
        paddingRight: 15,
    },
});

export default Wallet;
