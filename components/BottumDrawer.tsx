import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  TextInput,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useDispatch } from "react-redux";
import { addItem, updateItem } from "../redux/store";

const BottomDrawer = ({
  openBottomSheet,
  editting,
  editingItem,
  handleEditting,
}: {
  openBottomSheet: () => void;
  editting: boolean;
  editingItem: any;
  handleEditting: () => void;
}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const slide = useRef(new Animated.Value(300)).current;

  const slideUp = () => {
    Animated.timing(slide, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const slideDown = () => {
    Animated.timing(slide, {
      toValue: 300,
      duration: 500,
      useNativeDriver: true,
    }).start(() => openBottomSheet());

    handleEditting();
    setName("");
    setQuantity("");
    setDescription("");
  };

  const handleSubmit = () => {
    if (!name || !quantity || !category) {
      alert("Name, quantity, and category are required!");
      return;
    }

    const itemData = {
      id: editingItem ? editingItem.id : Date.now(),
      name,
      quantity: parseInt(quantity),
      description,
      category,
      purchased: editingItem ? editingItem.purchased : false,
    };

    if (editingItem) {
      dispatch(updateItem(itemData));
    } else {
      dispatch(addItem(itemData));
    }
    openBottomSheet();
  };

  useEffect(() => {
    slideUp();
  }, []);

  useEffect(() => {
    if (editingItem) {
      setName(editingItem.name);
      setQuantity(editingItem.quantity.toString());
      setDescription(editingItem.description);
      setCategory(editingItem.category || "");
    } else {
      setName("");
      setQuantity("");
      setDescription("");
      setCategory("");
    }
  }, [editingItem]);
  return (
    <View style={styles.backdrop}>
      <TouchableOpacity style={styles.backdrop} onPress={slideDown}>
        <Animated.View
          style={[styles.bottomSheet, { transform: [{ translateY: slide }] }]}
        >
          <View style={styles.tab} />
          <Text style={styles.headertext}>
            {editting ? "Edit Item" : "Add New Item"}
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Item Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Quantity"
            keyboardType="numeric"
            value={quantity}
            onChangeText={setQuantity}
          />
          <TextInput
            style={styles.input}
            placeholder="Category"
            value={category}
            onChangeText={setCategory}
          />
          <TextInput
            style={styles.input}
            placeholder="Description (Optional)"
            value={description}
            onChangeText={setDescription}
          />
          <TouchableOpacity style={styles.deleteButton} onPress={handleSubmit}>
            <Text style={styles.deleteText}>
              {editting ? "Edit Item" : "Add New Item"}
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default BottomDrawer;

const styles = StyleSheet.create({
  backdrop: {
    position: "absolute",
    flex: 1,
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    zIndex: 5,
  },
  bottomSheet: {
    position: "absolute",
    width: "100%",
    height: "40%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    zIndex: 5,
  },
  deleteButton: {
    width: "50%",
    height: "10%",
    backgroundColor: "orange",
    justifyContent: "center",
    flexDirection: "row",
    gap: 20,
    borderRadius: 8,
    alignSelf: "center",
    marginTop: 10,
  },
  deleteText: {
    color: "white",
    fontSize: 15,
    alignSelf: "center",
  },
  headertext: {
    fontSize: 20,
    textAlign: "center",
  },
  mapContainer: {
    backgroundColor: "black",
    width: "100%",
    height: "60%",
    marginTop: 10,
  },
  tab: {
    backgroundColor: "gray",
    width: "30%",
    height: 5,
    margin: 10,
    alignSelf: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});
