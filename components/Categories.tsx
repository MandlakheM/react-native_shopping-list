import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import ItemContainer from "./Item";

const Categories = ({ headerName }: { headerName: string }) => {
  return (
    <View style={styles.catContainer}>
      <View style={styles.fruits}>
        <Text style={styles.headerText}>{headerName}</Text>
        {/* <Text style={styles.noDataText}>NO DATA TO DISPLAY</Text> */}
        <ScrollView>
          <ItemContainer />
          <ItemContainer />
          <ItemContainer />
          <ItemContainer />
          <ItemContainer />
          <ItemContainer />
          <ItemContainer />
          <ItemContainer />
          <ItemContainer />
          <ItemContainer />
          <ItemContainer />

        </ScrollView>
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  catContainer: {
    height: 230,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "orange",
    // backgroundColor: "rgba(255, 255, 255, 0.12)",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    textAlign: "center",
    marginBottom: 10,
    // backgroundColor: "blue",
  },
  fruits: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
  noDataText: {
    color: "gray",
    fontStyle: "italic",
    marginTop: 10,
    textAlign: "center",
  },
});
