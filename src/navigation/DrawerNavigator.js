import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../Screens/HomeScreen";
import CartScreen from "../Screens/CartScreen";
import MainContainer from "./MainContainer";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={MainContainer} />
      <Drawer.Screen name="Card" component={CartScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
