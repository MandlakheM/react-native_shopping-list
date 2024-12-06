import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
const AddButton = ({ openBottomSheet }: { openBottomSheet: () => void }) => {
  return (
    <TouchableOpacity style={styles.addButton} onPress={openBottomSheet}>
      <Entypo name="plus" size={24} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addButton: {
    height: 56,
    width: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fe9d0b",
    borderWidth: 1,
    borderColor: "#f49301",
    shadowColor: "#f49301",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    alignSelf: "flex-end",
    margin: 40,
  },
  icon: {
    fontSize: 40,
    color: "white",
  },
});

export default AddButton;
