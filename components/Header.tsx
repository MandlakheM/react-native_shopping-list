import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Shopping List</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by name or category"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
    </View>
  );
};

export default Header;


const styles = StyleSheet.create({
  header: {
    backgroundColor: "orange",
    width: "100%",
    height: "15%",
    alignItems: "center",
    paddingTop: 25,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 10,
  },
  searchInput: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 5,
  },
});

