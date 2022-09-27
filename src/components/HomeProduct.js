import { ScrollView, Flex, Box, Heading, Text } from "native-base";
import React, { useState } from "react";
import { products } from "../data/data";
import { TouchableOpacity, Image } from "react-native";
import Rating from "./Rating";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/CartReducer";

function HomeProduct(props) {
  const onSendData = (id, image, price, name, reting, count = 1) => {
    props.addItemTC({ id, image, price, name, reting, count });
  };

  return (
    <ScrollView showsVerticalScrollIndicator flex={1}>
      <Flex flexWrap={"wrap"} flexDirection="row" justifyContent={"center"}>
        {products.map((el) => {
          return (
            <>
              {props.model === el.furniture ? (
                <TouchableOpacity
                  key={el._id}
                  style={{
                    width: "80%",
                    backgroundColor: "#F8F7F1",
                    borderRadius: 15,
                    paddingTop: 25,
                    marginVertical: 15,
                    paddingBottom: 25,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    source={{ uri: el.image }}
                    style={{
                      resizeMode: "contain",
                      width: "100%",
                      height: 120,
                    }}
                  />
                  <Box px={4} pt={1}>
                    <Heading>{el.price} тг</Heading>
                    <Text fontSize="16" isTruncated>
                      {el.name}
                    </Text>
                    <Rating value={el.reting} />

                    {/*Add tp cart*/}
                    <TouchableOpacity
                      onPress={() =>
                        onSendData(
                          el._id,
                          el.image,
                          el.price,
                          el.name,
                          el.reting
                        )
                      }
                      style={{
                        height: 27,
                        width: "40%",
                        backgroundColor: "#FFC300",
                        marginTop: 10,
                        borderRadius: 10,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text fontWeight={"bold"} color="white">
                        Add To Cart
                      </Text>
                    </TouchableOpacity>
                  </Box>
                </TouchableOpacity>
              ) : null}
              {props.model === null ? (
                <TouchableOpacity
                  key={el._id}
                  style={{
                    width: "80%",
                    backgroundColor: "#F8F7F1",
                    borderRadius: 15,
                    paddingTop: 25,
                    marginVertical: 15,
                    paddingBottom: 25,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    source={{ uri: el.image }}
                    style={{
                      resizeMode: "contain",
                      width: "100%",
                      height: 120,
                    }}
                  />
                  <Box px={4} pt={1}>
                    <Heading>{el.price} тг</Heading>
                    <Text fontSize="16" isTruncated>
                      {el.name}
                    </Text>
                    <Rating value={el.reting} />

                    {/*Add tp cart*/}
                    <TouchableOpacity
                      onPress={() =>
                        onSendData(
                          el._id,
                          el.image,
                          el.price,
                          el.name,
                          el.reting
                        )
                      }
                      style={{
                        height: 27,
                        width: "40%",
                        backgroundColor: "#FFC300",
                        marginTop: 10,
                        borderRadius: 10,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text fontWeight={"bold"} color="white">
                        Add To Cart
                      </Text>
                    </TouchableOpacity>
                  </Box>
                </TouchableOpacity>
              ) : null}
            </>
          );
        })}
      </Flex>
    </ScrollView>
  );
}

export default HomeProduct;
