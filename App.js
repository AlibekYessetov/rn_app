import React from "react";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import MainContainer from "./src/navigation/MainContainer";
import store from "./src/redux/rootReducer";
import { Provider } from "react-redux";
import DrawerNavigator from "./src/navigation/DrawerNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
        <StatusBar style="auto" />
      </NativeBaseProvider>
    </Provider>
  );
}
