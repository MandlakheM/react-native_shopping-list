import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { useDispatch } from "react-redux";
import { deleteItem, togglePurchased } from "../redux/store";
import { Swipeable } from "react-native-gesture-handler";
import EvilIcons from '@expo/vector-icons/EvilIcons';
const ItemContainer = ({ item, handleEditting }: { item: any; handleEditting: () => any }) => {
  const dispatch = useDispatch();

  const renderRightActions = (progress: Animated.AnimatedInterpolation) => {
    const scale = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0.8, 1],
      extrapolate: "clamp",
    });

    return (
      <TouchableOpacity
        onPress={() => dispatch(deleteItem(item.id))}
        style={styles.deleteButton}
      >
        <Animated.Text style={[styles.deleteText, { transform: [{ scale }] }]}>
          Delete
        </Animated.Text>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.item}>
        <TouchableOpacity
          onPress={() => dispatch(togglePurchased(item.id))}
          style={styles.checkbox}
        >
          {item.purchased && <Text style={styles.checkmark}>✓</Text>}
        </TouchableOpacity>
        <View style={styles.details}>
          <Text
            style={[
              styles.name,
              item.purchased && { textDecorationLine: "line-through" },
            ]}
          >
            {item.name}
          </Text>
          <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
          {item.description && (
            <Text style={styles.description}>{item.description}</Text>
          )}
        </View>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => handleEditting(item)}
        >
            <EvilIcons name="pencil" size={40} color="orange" />
          {/* <Text style={styles.editText}>Edit</Text> */}
        </TouchableOpacity>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    alignItems: "center",
    backgroundColor: "white",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checkmark: {
    fontSize: 18,
    color: "green",
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  quantity: {
    fontSize: 14,
    color: "#555",
  },
  description: {
    fontSize: 14,
    color: "#888",
  },
  editButton: {
    paddingHorizontal: 10,
  },
  editText: {
    color: "#007BFF",
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
  },
  deleteText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ItemContainer;

git init
git add .
git commit -m "enabled redux, crud operations for user to munipulate their shopping items, UI still needs to be redone"
git branch -M main
git remote add origin https://github.com/MandlakheM/react-native_shopping-list.git
git push -u origin main