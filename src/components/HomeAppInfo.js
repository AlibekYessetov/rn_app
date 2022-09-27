import { VStack, Text, Heading } from 'native-base';

function HomeAppInfo() {
  return (
    <VStack space={3} bgColor = "#fff" w = "full" px = {6} py = {4} alignItems = {"flex-start"}>
        <Heading size={"xl"}>Choose Your Best Furniture</Heading>
        <Text color={"gray.500"} fontSize={16}>high quality furniture</Text>
    </VStack>
  )
}

export default HomeAppInfo;