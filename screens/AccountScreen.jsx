import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/users/selectors';
import { PageHeader } from '../components/PageHeader';
const AccountScreen = ({navigation}) => {
    const user = useSelector(selectUser);

    return (
        <View style={styles.container}>
            <PageHeader title="My Account" navigation={navigation} />
            <Image
                source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWYo2yKCLQmnzoC9UZxuXzkjBMZCNtvSt_0A&usqp=CAU',
                }}
                style={styles.image}
            />
            <Text style={styles.heading}>{user.name}</Text>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    <Text style={styles.label}>Email: </Text>
                    {user.email}
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.label}>Credit: </Text> $
                    {user.creditBalance}
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.label}>Address:</Text> {user.address}
                </Text>
                <Text style={styles.friendsHeading}>Friends: </Text>
                {user.friends.map((friend) => (
                    <Text key={friend.id} style={styles.friendsText}>
                        - {friend.name}
                    </Text>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0374a8',
        flex: 1,
        textAlign: 'center',
        alignItems: 'center',
        padding: 40,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 60,
        marginBottom: 10,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
        color: '#fff',
    },
    textContainer: {
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        width: '100%',
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
    },
    friendsHeading: {
        fontSize: 20,
        color: '#0374a8',
        marginBottom: 6,
        fontWeight: 'bold',
    },
    friendsText: {
        fontSize: 18,
        paddingLeft: 20,
        marginBottom: 6,
    },
    label: {
        fontWeight: 'bold',
        color: '#0374a8',
    },
});

export default AccountScreen;
