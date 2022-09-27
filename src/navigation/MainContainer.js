import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import { Box } from "native-base";
import CartScreen from "../Screens/CartScreen";

const TabNavigator = createBottomTabNavigator();

function MainContainer() {
  return (
    <TabNavigator.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          let rn = route.name;

          if (rn === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          }

          return <Ionicons name={iconName} size={30} color={"#FFC300"} />;
        },
      })}
    >
      <TabNavigator.Screen
        options={{ headerShown: false, tabBarShowLabel: false }}
        name="Home"
        component={HomeScreen}
      />
      <TabNavigator.Screen
        options={{ headerShown: false, tabBarShowLabel: false }}
        name="Cart"
        component={CartScreen}
      />
    </TabNavigator.Navigator>
  );
}

export default MainContainer;
