import React, {useContext} from "react";
import { Pressable, StyleSheet } from "react-native";

import { ExpandableContext } from "./Expandable";

const Header = ({children, title, ...otherProps}) => {
    const {toggle} = useContext(ExpandableContext);

    const func = () => {
        toggle();
    }

    return <Pressable style={styles.default} onPress={func} {...otherProps}>{children}</Pressable>
}

const styles = StyleSheet.create({
    default: {
      backgroundColor: "#fff",
      width: "100%",
      height: 50,
      padding: 5,
    }
  });

export default Header;
