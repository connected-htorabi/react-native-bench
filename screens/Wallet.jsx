import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Pressable,
    Button,
} from 'react-native';
import Expandable from '../components/Expandable';
import Header from '../components/Header';
import Body from '../components/Body';
import Icon from '../components/Icon';
import Payee from '../components/Payee';

const info = { header: 'Individuals', names: ['Henry', 'Bob', 'Sally'] };

const names = ['Henry', 'Bob', 'Sally'];

const balance = 20;
const pendingBalance = 10;

const Wallet = ({ navigation }) => {
    const [isActive, setIsActive] = useState(false);

    const onExpand = () => {
        setIsActive((prev) => setIsActive(!prev));
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text
                    style={{
                        fontSize: 36,
                        fontWeight: 'bold',
                        marginBottom: 10,
                    }}
                >
                    Wallet
                </Text>
                <Balance balance={balance} />
                <Pending pendingBalance={pendingBalance} />
                <Text
                    style={{
                        fontSize: 21,
                        fontWeight: 'bold',
                        marginBottom: 20,
                        marginTop: 25,
                    }}
                >
                    Send Money
                </Text>
                <Expandable
                    shouldExpand={isActive}
                    onExpand={onExpand}
                    style={{ marginBottom: 20 }}
                >
                    <Header
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderRadius: 5,
                            padding: 20,
                        }}
                    >
                        <Text style={{ fontSize: 21 }}>{info.header}</Text>
                        <Icon />
                    </Header>

                    <Body>
                        <View
                            style={{
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                borderWidth: 1,
                                borderRadius: 5,
                                paddingTop: 5,
                                paddingLeft: 15,
                                paddingBottom: 5,
                                paddingRight: 15,
                            }}
                        >
                            {info.names.map((obj, i) => (
                                <Payee name={obj} key={i} />
                            ))}
                        </View>
                    </Body>
                </Expandable>
            </View>
        </SafeAreaView>
    );
};

const Balance = ({ balance }) => (
    <View
        style={{
            marginTop: 10,
            marginBottom: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}
    >
        <Text style={{ fontSize: 21 }}>Balance</Text>
    </View>
);

const Pending = ({ pendingBalance }) => (
    <View>
        <Text style={{ fontSize: 21, fontWeight: 'bold', marginTop: 20 }}>
            Pending
        </Text>
        <View
            style={{
                marginTop: 10,
                marginBottom: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}
        >
            <Pressable
                style={{
                    borderColor: '#4BAA00',
                    borderWidth: 1,
                    borderRadius: 2,
                    paddingTop: 5,
                    paddingBottom: 5,
                    width: 100,
                    textAlign: 'center',
                }}
            >
                <Text style={{ color: '#4BAA00' }}>Accept</Text>
            </Pressable>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        padding: 20,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
});

export default Wallet;
