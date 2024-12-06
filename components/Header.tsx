import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text>shopping list</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "orange",
    width: "100%",
    height: "15%",
    // marginTop: 15,
    alignItems: "center",
    padding: 10,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
});
