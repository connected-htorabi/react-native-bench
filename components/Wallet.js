import React, { useState } from "react";
import Expandable from "./Expandable";
import Header from "./Header";
import Body from "./Body";
import Icon from "./Icon";
import Payee from "./Payee";
import { StyleSheet, View, Text, Pressable } from "react-native";

const info = [
  { header: "Individuals", names: ["Henry", "Bob", "Sally"] },
  { header: "Groups", name: "Second Note" },
];

const names = ["Henry", "Bob", "Sally"];

const balance = 20;
const pendingBalance = 10;

const Wallet = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onExpand = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 36, fontWeight: "bold", marginBottom: 10 }}>
        Wallet
      </Text>
      <Balance balance={balance} />
      <Pending pendingBalance={pendingBalance} />
      <Text
        style={{
          fontSize: 21,
          fontWeight: "bold",
          marginBottom: 20,
          marginTop: 25,
        }}
      >
        Send Money
      </Text>
      {info.map((item, index) => (
        <Expandable
          shouldExpand={index === activeIndex}
          onExpand={() => onExpand(index)}
          key={index}
          style={{ marginBottom: 20 }}
        >
          <Header
            dataIndex={index}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid #000",
              borderRadius: 5,
              padding: 20,
            }}
          >
            <Text style={{ fontSize: 21 }}>{item.header}</Text>
            <Icon />
          </Header>

          <Body>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                border: "1px solid #000",
                borderRadius: 5,
                paddingTop: 5,
                paddingLeft: 15,
                paddingBottom: 5,
                paddingRight: 15,
              }}
            >
              {names.map((obj, index) => (
                <Payee name={obj} dataIndex={index} />
              ))}
            </View>
          </Body>
        </Expandable>
      ))}
    </View>
  );
};

const Balance = ({ balance }) => {
  return (
    <View
      style={{
        marginTop: 10,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text style={{ fontSize: 21 }}>Balance</Text>
      <Text style={{ fontSize: 21 }}>${balance}</Text>
    </View>
  );
};

const Pending = ({ pendingBalance }) => {
  return (
    <View>
      <Text style={{ fontSize: 21, fontWeight: "bold", marginTop: 20 }}>
        Pending
      </Text>
      <View
        style={{
          marginTop: 10,
          marginBottom: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 16 }}>${pendingBalance} from Henry</Text>
        <Pressable
          style={{
            border: "1px solid #4BAA00",
            borderRadius: 2,
            paddingTop: 5,
            paddingBottom: 5,
            width: 100,
            textAlign: "center",
          }}
        >
          <Text style={{ color: "#4BAA00" }}>Accept</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
});

export default Wallet;
