import React, { useContext } from "react";
import { Text } from "react-native";
import { ExpandableContext } from "./Expandable";

const Icon = ({ children }) => {
  const { expanded } = useContext(ExpandableContext);

  return expanded ? <Text>-</Text> : <Text>+</Text>;
};

export default Icon;
