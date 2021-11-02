import React, { useContext } from "react";
import { Text } from "react-native";
import { ExpandableContext } from "./Expandable";

const Icon = ({ children }) => {
  const { expanded } = useContext(ExpandableContext);

  return expanded ? (
    <Text style={{ fontSize: 21, fontWeight: "bold" }}>-</Text>
  ) : (
    <Text style={{ fontSize: 21, fontWeight: "bold" }}>+</Text>
  );
};

export default Icon;
