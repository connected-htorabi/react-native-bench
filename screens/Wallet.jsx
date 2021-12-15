import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useToast } from 'react-native-styled-toast';
import { useSelector } from 'react-redux';

import { useSendCreditsMutation } from '../redux/services/restaurant';
import { selectUser } from '../redux/users/selectors';
import Expandable from '../components/Expandable';
import Header from '../components/Header';
import Body from '../components/Body';
import Icon from '../components/Icon';
import Payee from '../components/Payee';
import WalletHistory from '../components/WalletHistory';

const Wallet = () => {
    const [sendCredits] = useSendCreditsMutation();
    const [isTransferHistoryActive, setIsTransferHistoryActive] =
        useState(true);

    const user = useSelector(selectUser);
    const [isSendMoneyActive, setIsSendMoneyActive] = useState(true);
    const { toast } = useToast();

    const onExpand = () => {
        setIsSendMoneyActive((prev) => setIsSendMoneyActive(!prev));
    };

    const onHistoryExpand = () => {
        setIsTransferHistoryActive((prev) => setIsTransferHistoryActive(!prev));
    };

    const sendMoney = (
        amount,
        recipientId,
        recipientBalance,
        recipientName
    ) => {
        sendCredits({
            senderId: user.id,
            recipientId,
            senderBalance: user.creditBalance,
            recipientBalance,
            amount,
        })
            .unwrap()
            .then(() => {
                toast({
                    message: `$${amount} sent to ${recipientName}`,
                });
            });
    };

    return (
        <View style={styles.container}>
            <Balance balance={user.creditBalance} />
            <Expandable
                shouldExpand={isSendMoneyActive}
                onExpand={onExpand}
                style={styles.expandable}
            >
                <Header style={styles.expandableHeader}>
                    <Text style={styles.expandableHeaderText}>
                        Transfer Money
                    </Text>
                    <Icon style={styles.expandableHeaderIcon} />
                </Header>

                <Body>
                    <View style={styles.expandableBody}>
                        {user.friends.map(({ name, id, creditBalance }) => (
                            <Payee
                                name={name}
                                key={id}
                                onSendMoney={(amount) =>
                                    sendMoney(amount, id, creditBalance, name)
                                }
                            />
                        ))}
                    </View>
                </Body>
            </Expandable>
            <Expandable
                shouldExpand={isTransferHistoryActive}
                onExpand={onHistoryExpand}
                style={styles.expandable}
            >
                <Header style={styles.expandableHeader}>
                    <Text style={styles.expandableHeaderText}>
                        Transfer History
                    </Text>
                    <Icon style={styles.expandableHeaderIcon} />
                </Header>

                <Body>
                    <View style={styles.expandableBody}>
                        {user.friends.map(({ name, id, creditBalance }) => (
                            <WalletHistory
                                name={name}
                                key={id}
                                creditBalance={creditBalance}
                            />
                        ))}
                    </View>
                </Body>
            </Expandable>
        </View>
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
    balanceContainer: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    balanceText: {
        fontSize: 21,
    },
    expandable: {
        marginVertical: 20,
    },
    expandableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        backgroundColor: '#0374a8',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        padding: 12,
    },
    expandableHeaderText: {
        color: 'white',
        fontSize: 21,
    },
    expandableHeaderIcon: {
        color: 'white',
        fontSize: 21,
    },
    expandableBody: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        paddingTop: 20,
        paddingLeft: 15,
        paddingBottom: 5,
        paddingRight: 15,
        borderWidth: 1,
        borderColor: '#0374a8',
    },
});

export default Wallet;
