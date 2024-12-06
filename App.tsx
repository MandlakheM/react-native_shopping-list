import { StatusBar } from "expo-status-bar";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import Categories from "./components/Categories";
import AddButton from "./components/AddButton";
import ItemContainer from "./components/Item";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import BottomDrawer from "./components/BottumDrawer";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store, loadItems, saveItems } from "./redux/store";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function MainApp() {
  const [bottomSheet, setBottomSheet] = useState<boolean>(false);
  const [editting, setEditting] = useState<boolean>(false);
  const [editingItem, setEditingItem] = useState(null);

  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.shoppingList.items);

  const openBottomSheet = () => {
    setBottomSheet(!bottomSheet);
    setEditting(false);
  };

  const handleEditting = (item) => {
    setEditting(true);
    setEditingItem(item);
    openBottomSheet();
  };

  useEffect(() => {
    loadItems(dispatch);
  }, []);

  useEffect(() => {
    saveItems(items);
  }, [items]);
  return (
    <View style={styles.container}>
      <Header />
      {/* <ScrollView> */}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ItemContainer item={item} handleEditting={handleEditting} />
        )}
      />
      {/* </ScrollView> */}
      {bottomSheet ? (
        <BottomDrawer
          openBottomSheet={openBottomSheet}
          editting={editting}
          editingItem={editingItem}
        />
      ) : (
        <AddButton openBottomSheet={openBottomSheet} />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <MainApp />
      </GestureHandlerRootView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 5,
  },
});
