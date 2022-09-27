import { HStack, Avatar, Heading } from "native-base";
import { TouchableOpacity } from "react-native";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";

function HomeHeader({ text, navigator }) {
  return (
    <HStack
      display={"flex"}
      justifyContent={"space-between"}
      space={3}
      w="full"
      px={6}
      bgColor="white"
      py={4}
      alignItems="center"
      safeAreaTop
    >
      <TouchableOpacity onPress={() => navigator()}>
        <SimpleLineIcons name="menu" size={37} color="black" />
      </TouchableOpacity>

      <Heading>{text}</Heading>

      <TouchableOpacity onPress={() => alert("I'm Pressed")}>
        <Avatar
          bg="green.500"
          size={55}
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        >
          AJ
        </Avatar>
      </TouchableOpacity>
    </HStack>
  );
}

export default HomeHeader;
