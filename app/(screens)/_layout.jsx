import React from "react";
import {StatusBar} from "expo-status-bar"
import {Stack} from 'expo-router'
const AuthLayout = () => {
  return <>
    <Stack>
      <Stack.Screen name="contact" options={{headerShown:false}}/>
      <Stack.Screen name="tandc" options={{headerShown:false}}/>
      <Stack.Screen name="privacy" options={{headerShown:false}}/>
      <Stack.Screen name="settings" options={{headerShown:false}}/>
    </Stack>
    <StatusBar backgroundColor="#161622" style="light"/>
  </>;
};

export default AuthLayout;
