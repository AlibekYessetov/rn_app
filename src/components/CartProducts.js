import React, { useEffect, useState } from "react";
import { products } from "../data/data";
import {
  ScrollView,
  Flex,
  Box,
  Heading,
  Text,
  HStack,
  Input,
  Center,
} from "native-base";
import { TouchableOpacity, Image } from "react-native";
import Rating from "./Rating";
import { connect, useDispatch } from "react-redux";
import { Modal, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { removeItemFromCart } from "../redux/CartReducer";

function CheckoutModale({ visible, children }) {
  const [show, setShow] = useState(visible);

  useEffect(() => {
    showHandle();
  }, [visible]);

  const showHandle = () => {
    if (visible) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <Modal transparent visible={show}>
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.3)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box w={360} h={350} bgColor={"white"} rounded={20} p={3}>
          {children}
        </Box>
      </View>
    </Modal>
  );
}

function CartProducts(props) {
  const [visible, setVisible] = useState(false);
  {
    /*checklist*/
  }
  const [firstName, setFirstname] = useState(null);
  const [surname, setSurname] = useState(null);
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState(null);
  const [price, setPrice] = useState(0);

  const getChekList = () => {
    alert(
      "Ваш чек: \n" +
        firstName +
        " " +
        surname +
        " \n Цена товара составляет: " +
        count * price +
        " тг" +
        "\n Ваш заказ: " +
        product +
        "\n Кол-во: " +
        count +
        "\n Спасибо за покупку! \n Сатып алғаныңыз үшін рахмет! " +
        "Продавец: Aлибек Есетов"
    );
    setVisible(false);
    setFirstname(null);
    setSurname(null);
    setCount(1);
    setProduct(null);
    setPrice(null);
  };

  debugger;
  return (
    <ScrollView showsVerticalScrollIndicator flex={1}>
      <Flex flexWrap={"wrap"} flexDirection="row" justifyContent={"center"}>
        {props.items.map((el, index) => {
          return (
            <>
              <CheckoutModale visible={visible}>
                <TouchableOpacity
                  onPress={() => {
                    setVisible(false);
                    setFirstname(null);
                    setSurname(null);
                    setCount(1);
                    setProduct(null);
                    setPrice(null);
                  }}
                >
                  <Box w={"full"} alignItems={"center"} p={2}>
                    <Ionicons
                      name="caret-down-outline"
                      size={24}
                      color="black"
                    />
                  </Box>
                </TouchableOpacity>
                <Text fontWeight={"bold"} fontSize={16} textAlign={"center"}>
                  Заполните анкету
                </Text>
                <Input
                  mx="3"
                  placeholder="Ваше имя"
                  w="90%"
                  my={2}
                  size={"lg"}
                  onChangeText={(text) => setFirstname(text)}
                  value={firstName}
                />
                <Input
                  mx="3"
                  placeholder="Ваша фамилия"
                  w="90%"
                  my={2}
                  size={"lg"}
                  onChangeText={(text) => setSurname(text)}
                  value={surname}
                />
                <Box alignItems={"center"}>
                  <Text fontSize={20}>Кол-во товара</Text>
                </Box>
                <HStack justifyContent={"center"} my={2}>
                  <TouchableOpacity
                    onPress={() => setCount(count - 1)}
                    style={{
                      width: 40,
                      height: 35,
                      backgroundColor: "silver",
                      marginHorizontal: 15,
                      borderRadius: 10,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text color={"white"}>-</Text>
                  </TouchableOpacity>
                  <Text fontSize={24}>{count}</Text>
                  <TouchableOpacity
                    onPress={() => setCount(count + 1)}
                    style={{
                      width: 40,
                      height: 35,
                      backgroundColor: "silver",
                      marginHorizontal: 15,
                      borderRadius: 10,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text color={"white"}>+</Text>
                  </TouchableOpacity>
                </HStack>
                <TouchableOpacity
                  onPress={() => {
                    getChekList();
                  }}
                  style={{
                    width: "100%",
                    padding: 12,
                    backgroundColor: "FFC300",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 15,
                    marginVertical: 5,
                  }}
                >
                  <Text>Checkout</Text>
                </TouchableOpacity>
              </CheckoutModale>
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
                  style={{ resizeMode: "contain", width: "100%", height: 120 }}
                />
                <Box px={4} pt={1}>
                  <Heading>{el.price} тг</Heading>
                  <Text fontSize="16" isTruncated>
                    {el.name}
                  </Text>
                  <Rating value={el.reting} />

                  {/*Add tp cart*/}

                  <TouchableOpacity
                    onPress={() => {
                      setVisible(true);
                      setProduct(el.name);
                      setPrice(el.price);
                    }}
                    style={{
                      height: 27,
                      width: "45%",
                      backgroundColor: "#FFC300",
                      marginTop: 10,
                      borderRadius: 10,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text fontWeight={"bold"} color="white">
                      Checkout
                    </Text>
                  </TouchableOpacity>
                </Box>
              </TouchableOpacity>
            </>
          );
        })}
      </Flex>
    </ScrollView>
  );
}

export default CartProducts;
