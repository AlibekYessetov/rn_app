import React from 'react'
import {HStack, Text} from "native-base"
import {FontAwesome} from "@expo/vector-icons"

function Rating({value}) {
  return (
    <HStack space={0.4} mt = {5} alignItems = "center">
        <FontAwesome
        name={value>=1 ? "star" : value >=0.5 ? "star-half-o" : "star-o"} 
        color = {"#EBF10D"} size = {25}/>

        <FontAwesome
        name={value>=2 ? "star" : value >=1.5 ? "star-half-o" : "star-o"} 
        color = {"#EBF10D"} size = {25}/> 

        <FontAwesome
        name={value>=3 ? "star" : value >=2.5 ? "star-half-o" : "star-o"} 
        color = {"#EBF10D"} size = {25}/> 

        <FontAwesome
        name={value>=4 ? "star" : value >=3.5 ? "star-half-o" : "star-o"} 
        color = {"#EBF10D"} size = {25}/> 

        <FontAwesome
        name={value>=5 ? "star" : value >=4.5 ? "star-half-o" : "star-o"} 
        color = {"#EBF10D"} size = {25}/>
    </HStack>
  )
}

export default Rating;