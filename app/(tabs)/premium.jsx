import { View, Text, ScrollView, Pressable, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const Premium = () => {
  return (
    <SafeAreaView className="w-100 h-full bg-black px-5">
      <ScrollView>
        <View className="flex-row justify-between mt-5">
          <View>
            <Text className="text-3xl font-bold text-secondary">Aora</Text>
          </View>
          <View className="flex-row flex-1 justify-end">
            <Pressable
              onPress={() => {
                router.push("/(tabs)/coinsp");
              }}
            >
              <Image
                className="w-7 h-7 mr-2"
                source={require("../../assets/icons/coins.png")}
              />
            </Pressable>
            <Pressable
              onPress={() => {
                router.push("/(tabs)/premium"), console.log("clicked");
              }}
            >
              <Image
                className="w-7 h-7"
                source={require("../../assets/icons/shopping-store.png")}
              />
            </Pressable>
          </View>
        </View>
        <Pressable className="mt-20" onPress={()=>{router.push('/(tabs)/coinsp')}}>
          <View className="w-full border border-black-500 bg-gray-800 flex-row items-center p-3 rounded-lg border-gray-500">
            <Image
              source={require("../../assets/icons/d.png")}
              className="w-20 h-20"
            />
            <Text className="text-3xl flex-1 text-white text-right">Buy Coins</Text>
          
           
          </View>
        </Pressable>
        <Pressable className="mt-20" onPress={()=>{router.push('/(tabs)/paid')}}>
          <View className="w-full border border-black-500 bg-gray-800 flex-row items-center p-3 rounded-lg border-gray-500">
            <Image
              source={require("../../assets/icons/cro.png")}
              className="w-20 h-20"
            />
            <Text className="text-3xl flex-1 text-white text-right">Buy Premium</Text>
          </View>
        </Pressable>
        <Pressable className="mt-20" onPress={()=>{router.push('/(tabs)/paid')}}>
          <View className="w-full border border-black-500 bg-gray-800 flex-row items-center p-3 rounded-lg border-gray-500">
            <Image
              source={require("../../assets/icons/30_Days.png")}
              className="w-20 h-20"
            />
            <Text className="text-3xl flex-1 text-white text-right">Buy Monthly</Text>
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Premium;
