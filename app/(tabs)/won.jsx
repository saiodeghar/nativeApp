import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  Pressable,
  TextInput,
  Image,
} from "react-native";
import React, { useEffect,useRef,useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Calender from "../../components/Calender";

const Won = () => {


  return (
    <SafeAreaView className="w-100 h-full bg-black">
      <ScrollView>
        <View className="w-full justify-center px-4 my-6">
          <View className="flex-row justify-between">
              <Text className="text-3xl font-bold text-secondary">Aora</Text>
          </View> 
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Won;
