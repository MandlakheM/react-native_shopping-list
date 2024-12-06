import { configureStore, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  items: [],
};

const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    updateItem: (state, action) => {
      const { id, name, quantity, description } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.name = name;
        item.quantity = quantity;
        item.description = description;
      }
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    togglePurchased: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.purchased = !item.purchased;
      }
    },
  },
});

export const { addItem, updateItem, deleteItem, togglePurchased, setItems } =
  shoppingListSlice.actions;

export const store = configureStore({
  reducer: {
    shoppingList: shoppingListSlice.reducer,
  },
});

export const loadItems = async (dispatch) => {
  try {
    const items = await AsyncStorage.getItem("shoppingList");
    if (items) {
      dispatch(setItems(JSON.parse(items)));
    }
  } catch (error) {
    console.error("Failed to load items:", error);
  }
};

export const saveItems = async (items) => {
  try {
    await AsyncStorage.setItem("shoppingList", JSON.stringify(items));
  } catch (error) {
    console.error("Failed to save items:", error);
  }
};
