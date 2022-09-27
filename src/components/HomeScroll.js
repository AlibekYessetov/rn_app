import React from "react";
import { Text, Box, Pressable } from "native-base";
import { ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { setModelAC } from "../redux/CartReducer";
import { TouchableOpacity } from "react-native";

function HomeScroll(props) {
  const dispatch = useDispatch();
  const setModel = (name) => {
    dispatch(setModelAC(name));
  };

  const choices = [
    { id: 5, name: null, value: "All Categories" },
    { id: 2, name: "bed", value: "bed" },
    { id: 3, name: "chair", value: "chair" },
    { id: 4, name: "carpet", value: "carpet" },
  ];

  return (
    <Box w={"full"} py={3} px={6}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {choices.map((el) => {
          return (
            <>
              {props.model == el.name ? (
                <TouchableOpacity
                  onPress={() => setModel(el.name)}
                  key={el.id}
                  style={{
                    paddingVertical: 8,
                    paddingHorizontal: 20,
                    backgroundColor: "#FFC300",
                    marginHorizontal: 5,
                    borderRadius: 50,
                  }}
                >
                  <Text color={"435"} bold="500" fontSize={18}>
                    {el.value}
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => setModel(el.name)}
                  key={el.id}
                  style={{
                    paddingVertical: 8,
                    paddingHorizontal: 20,
                    backgroundColor: "#FFC300",
                    marginHorizontal: 5,
                    borderRadius: 50,
                  }}
                >
                  <Text color={"#fff"} bold="500" fontSize={18}>
                    {el.value}
                  </Text>
                </TouchableOpacity>
              )}
            </>
          );
        })}
      </ScrollView>
    </Box>
  );
}

export default HomeScroll;
