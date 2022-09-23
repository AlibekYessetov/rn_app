import React from "react";
import {StyleSheet, Text, View} from 'react-native';
import {StatusBar} from 'expo-status-bar'
import LoginScreen from "./src/Screens/LoginScreen";
import {NativeBaseProvider, Box} from 'native-base'


export default function App() {
  return (
    <NativeBaseProvider>
        <LoginScreen/>
        <StatusBar style="auto"/>
    </NativeBaseProvider>    
  );
}


