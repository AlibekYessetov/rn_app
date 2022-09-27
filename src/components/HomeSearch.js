import React from 'react';
import {Box, Input} from 'native-base';
import { AntDesign } from '@expo/vector-icons';

function HomeSearch() {
  return (
    <Box w="full" px = {6} py = {4} bgColor = {"#fff"} alignItems = {'center'} >
        <Input h={55} borderRadius = {10} InputLeftElement={<AntDesign name="search1" size={35} color="gray" /> } pl = {4} variant={"outline"} size={"2xl"} placeholder="Search..." w="100%" />
    </Box>
  )
}

export default HomeSearch;