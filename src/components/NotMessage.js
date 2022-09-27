import React from "react";
import { Box, Heading } from "native-base";

const Message = ({text}) =>{
    return <Box w={"full"} py = {10} flex = {1} justifyContent = {'center'} alignItems = "center" >
        <Heading color={"gray.400"}>{text}</Heading>
    </Box>
}

export default Message