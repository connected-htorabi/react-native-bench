import React, {useContext} from "react";
import { Button } from "react-native";

import { ExpandableContext } from "./Expandable";

const Header = ({children}) => {
    const {toggle} = useContext(ExpandableContext);

    const func = () => {
        console.log("clicked!");
        toggle();
    }

    return <Button onPress={func} title="hi">{children}</Button>
}

export default Header;