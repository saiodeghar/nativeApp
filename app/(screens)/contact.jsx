import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const Contact = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <TouchableOpacity className="mt-5 px-6" onPress={() => router.push("/profile")}>
          <Image
            source={require("../../assets/icons/left-arrow.png")}
            className="h-6 w-6"
          />
        </TouchableOpacity>
        <View className="w-full px-5 my-6 flex-row justify-center mt-20">
          <Image
            source={require("../../assets/icons/chat.png")}
            className="w-20 h-20"
          />
        </View>
        <View className=" w-full mt-10">
          <Text className="text-white text-center text-3xl">Get In Touch</Text>
          <Text className="text-white text-center text-base mt-5">
            We are here for you! How can we help?{" "}
          </Text>
          <View className="flex items-center mt-10">
            <Image
              source={require("../../assets/icons/phone.png")}
              className="w-10 h-10 align-center"
            />
            <Text className="text-white text-center text-xl font-bold">
              9876543210
            </Text>
            <Image
              source={require("../../assets/icons/mail.png")}
              className="w-10 h-10 mt-5"
            />
            <Text className="text-white text-center text-xl font-bold">
              help@gmail.com
            </Text>
          </View>
          <View className="items-center mt-8 p-10">
            <Image
              source={require("../../assets/images/logo.png")}
              className="w-full"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Contact;
