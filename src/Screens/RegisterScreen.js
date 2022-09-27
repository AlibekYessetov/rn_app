import React from 'react'
import {Text, Box, Heading, Input, VStack, Button, Pressable, HStack} from 'native-base'
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';

function RegisterScreen() {
  return (
    <Box flex={1} bgColor = {"white"}>
        <Box 
          w = "full" 
          h = "full" 
          position={"absolute"} 
          px = {5} 
          justifyContent = "center" 
          alignItems={"center"}>
          <Heading fontSize={35} color = {"aqua"}>Регистрация</Heading>
          <VStack space={5} pt = "6">
            
            {/*usser name Input*/}
            <Input 
            InputRightElement={
              <AntDesign name="user" size={24} color="black" />
            }
            variant = "underlined" placeholder='username'w={"90%"} color = "black" borderColor={"gray"} fontSize= {20}/>
            
            {/*email Input*/}
            <Input 
            InputRightElement={
              <Entypo name="email" size={24} color="black" />
            }
            variant = "underlined" placeholder='email'w={"90%"} color = "black" borderColor={"gray"} fontSize= {20}/>
            
            
            {/*Password Input*/}
            <Input 
            InputRightElement={
              <AntDesign name="eyeo" size={24} color="black" />
            }
            variant = "underlined" type='password' placeholder='password'w={"90%"} color = "black" borderColor={"gray"} fontSize= {20}/>

            {/*Button*/}
            <Button 
            _pressed={{
              bgColor: '#fff'
            }}
            variant={"subtle"} bgColor = "aqua" my={30} rounded = {10}>
              Sign Up
            </Button>

            {/*link to sign up*/}
            <HStack>
              <Text fontSize={16}>Есть аккаунт?  </Text>
              <Pressable>
                <Text fontSize={16} color={"aqua"}>Вход</Text>
              </Pressable>
            </HStack>
            
          
          </VStack>
        </Box>
        
    </Box>
  )
}

export default RegisterScreen;