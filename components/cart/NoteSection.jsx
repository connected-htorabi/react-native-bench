import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const NoteSection = () => {
    const [text, setText] = useState('');
    return (
        <View style={styles.container}>
            <TextInput
                value={text}
                onChangeText={(v) => setText(v)}
                placeholder="Add a Note (extra napkins, extra sauce...)"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
    },
});

export default NoteSection;
