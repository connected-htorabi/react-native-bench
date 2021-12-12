import React, { useContext } from 'react';
import {
    LayoutAnimation,
    Platform,
    UIManager,
    Pressable,
    StyleSheet,
} from 'react-native';
import { ExpandableContext } from './Expandable';

if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Header = ({ children, title, ...otherProps }) => {
    const { toggle } = useContext(ExpandableContext);

    const func = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        toggle();
    };

    return (
        <Pressable style={styles.default} onPress={func} {...otherProps}>
            {children}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    default: {
        backgroundColor: '#fff',
        width: '100%',
        height: 50,
        padding: 5,
    },
});

export default Header;
