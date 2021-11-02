import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import useExpanded from "../hooks/useExpanded";

const isNormalInteger = (str) => {
  return /^\+?(0|[1-9]\d*)$/.test(str);
};

const Payee = ({ name, onSendMoney = () => {} }) => {
  const { expanded, toggle } = useExpanded();
  const [amount, setAmount] = useState("");

  const sendMoney = () => {
    onSendMoney(amount);
    toggle();
    setAmount("");
  };

  return (
    <View>
      <View style={styles.firstRow}>
        <Text>{name}</Text>
        <Button title={expanded ? "Cancel" : "Add"} onPress={toggle} />
      </View>
      {expanded && (
        <View>
          <Text>Test</Text>
          <View style={styles.secondRow}>
            <TextInput
              onChangeText={setAmount}
              placeholder="Amount"
              value={amount}
              style={styles.textInput}
            ></TextInput>
            <Button
              color="green"
              disabled={!isNormalInteger(amount)}
              onPress={sendMoney}
              title="Send"
            ></Button>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    display: "flex",
    padding: 10,
  },
  firstRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  secondRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Payee;
