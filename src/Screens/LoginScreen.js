import {Text, Box, Heading, Input, VStack, Button, Pressable, HStack} from 'native-base'
import React from 'react'
import { Ionicons, AntDesign } from '@expo/vector-icons';
 

function LoginScreen() {
  return (
    <Box flex={1} bgColor = {"white"}>
        <Box 
          w = "full" 
          h = "full" 
          position={"absolute"} 
          px = {5} 
          justifyContent = "center" 
          alignItems={"center"}>
          <Heading fontSize={35} color = {"aqua"}>Login</Heading>
          <VStack space={5} pt = "6">
            
            
            {/*Login Input*/}
            <Input 
            InputRightElement={
              <AntDesign name="user" size={24} color="black" />
            }
            variant = "underlined" placeholder='username'w={"90%"} color = "black" borderColor={"gray"} fontSize= {20}/>
            
            
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
              Войти
            </Button>

            {/*link to sign up*/}
            <HStack>
              <Text fontSize={16}>У вас ещё нет аккаунта?  </Text>
              <Pressable>
                <Text fontSize={16} color={"aqua"}>Зарегистрироваться</Text>
              </Pressable>
            </HStack>
            
          
          </VStack>
        </Box>
        
    </Box>
  )
}


export default LoginScreen;