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
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Calender from "../../components/Calender";
import { router } from "expo-router";

const CoinsP = () => {
  return (
    <SafeAreaView className="w-100 h-full bg-black">
      <ScrollView>
        <View className="w-full justify-center px-4 my-6">
          <View className="flex-row justify-between">
            <Pressable onPress={() => router.push("/free")}>
              <View>
                <Text className="text-3xl font-bold text-secondary">Aora</Text>
              </View>
            </Pressable>

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
              <Pressable>
                <Image
                  className="w-7 h-7"
                  source={require("../../assets/icons/shopping-store.png")}
                />
              </Pressable>
            </View>
          </View>
          <Pressable className="mt-8">
            <View className="w-full border border-black-500 bg-gray-800 flex-row justify-between p-3 rounded-lg border-gray-500">
              <Image
                source={require("../../assets/icons/telegram.png")}
                className="w-12 h-12"
              />
              <Text className="text-white font-semibold text-sm mt-1">
                Join Our Telegram Channel For {"\n"} Free 2000 Coins Instantly
              </Text>
              <Image
                source={require("../../assets/icons/fred.png")}
                className="w-12 h-12"
              />
            </View>
          </Pressable>
          <Pressable className="mt-8">
            <View className="w-full border border-black-500 bg-gray-800 flex-row justify-between p-1 rounded-lg border-gray-500">
              <Image
                source={require("../../assets/icons/dollar.png")}
                className="w-12 h-12 ml-2"
              />
              <Text className="flex-1 mt-2 ml-2 text-lg text-white font-bold">
                1000 Coins
              </Text>
              <Text className="mt-2 ml-2 text-lg text-white font-bold">
                &#x20b9; 200.00
              </Text>
              <Text></Text>
            </View>
          </Pressable>
          <Pressable className="mt-4">
            <View className="w-full border border-black-500 bg-gray-800 flex-row justify-between p-1 rounded-lg border-gray-500">
              <Image
                source={require("../../assets/icons/dollar.png")}
                className="w-12 h-12 ml-2"
              />
              <Text className="flex-1 mt-2 ml-2 text-lg text-white font-bold">
                5000 Coins
              </Text>
              <Text className="mt-2 ml-2 text-lg text-white font-bold">
                &#x20b9; 450.00
              </Text>
              <Text></Text>
            </View>
          </Pressable>
          <Pressable className="mt-4">
            <View className="w-full border border-black-500 bg-gray-800 flex-row justify-between p-1 rounded-lg border-gray-500">
              <Image
                source={require("../../assets/icons/dollar.png")}
                className="w-12 h-12 ml-2"
              />
              <Text className="flex-1 mt-2 ml-2 text-lg text-white font-bold">
                10000 Coins
              </Text>
              <Text className="mt-2 ml-2 text-lg text-white font-bold">
                &#x20b9; 950.00
              </Text>
              <Text></Text>
            </View>
          </Pressable>
          <Pressable className="mt-4">
            <View className="w-full border border-black-500 bg-gray-800 flex-row justify-between p-1 rounded-lg border-gray-500">
              <Image
                source={require("../../assets/icons/dollar.png")}
                className="w-12 h-12 ml-2"
              />
              <Text className="flex-1 mt-2 ml-2 text-lg text-white font-bold">
                25000 Coins
              </Text>
              <Text className="mt-2 ml-2 text-lg text-white font-bold">
                &#x20b9; 1500.00
              </Text>
              <Text></Text>
            </View>
          </Pressable>
          <Pressable className="mt-4">
            <View className="w-full border border-black-500 bg-gray-800 flex-row justify-between p-1 rounded-lg border-gray-500">
              <Image
                source={require("../../assets/icons/dollar.png")}
                className="w-12 h-12 ml-2"
              />
              <Text className="flex-1 mt-2 ml-2 text-lg text-white font-bold">
                50000 Coins
              </Text>
              <Text className="mt-2 ml-2 text-lg text-white font-bold">
                &#x20b9; 3000.00
              </Text>
              <Text></Text>
            </View>
          </Pressable>
          <Pressable className="mt-4">
            <View className="w-full border border-black-500 bg-gray-800 flex-row justify-between p-1 rounded-lg border-gray-500">
              <Image
                source={require("../../assets/icons/dollar.png")}
                className="w-12 h-12 ml-2"
              />
              <Text className="flex-1 mt-2 ml-2 text-lg text-white font-bold">
                100000 Coins
              </Text>
              <Text className="mt-2 ml-2 text-lg text-white font-bold">
                &#x20b9; 4500.00
              </Text>
              <Text></Text>
            </View>
          </Pressable>
          <Pressable className="mt-4">
            <View className="w-full border border-black-500 bg-gray-800 flex-row justify-between p-1 rounded-lg border-gray-500">
              <Image
                source={require("../../assets/icons/dollar.png")}
                className="w-12 h-12 ml-2"
              />
              <Text className="flex-1 mt-2 ml-2 text-lg text-white font-bold">
                9999999999 Coins
              </Text>
              <Text className="mt-2 ml-2 text-lg text-white font-bold">
                &#x20b9; 7500.00
              </Text>
              <Text></Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CoinsP;
