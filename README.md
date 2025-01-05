# Shopping List App 🛒

A simple and intuitive shopping list app built using React Native and Redux. This app allows users to manage their shopping list efficiently, with features like adding, editing, deleting items, and searching for items by name or category.

---

## Features
- **Add Items**: Create new shopping list items with a name, quantity, description, and category.
- **Edit Items**: Update existing items easily.
- **Delete Items**: Remove items from the list.
- **Search Functionality**: Search for items by name or category using the header search bar.
- **Category Color Coding**: Items are color-coded based on their category for easy identification.
- **Persistent Data**: Shopping list data is saved locally for convenience.

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/)
- [Expo CLI](https://expo.dev/) (for running the app)

### Installation
1. Clone this repository:
   ```bash
    git clone https://github.com/MandlakheM/react-native_shopping-list.git
   
   cd react-native_shopping-list

   npm install

   npx expo start

### Project Structure

MainApp.tsx: The main entry point of the application.

Components/:

Header: Displays the app's title and includes a search bar.

BottomDrawer: A slide-up form for adding and editing items.

ItemContainer: Renders individual shopping list items.

AddButton: A floating button to trigger the BottomDrawer.

Redux/:

store.js: Redux store setup and state management logic.
