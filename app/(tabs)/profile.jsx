import { View, Text, ScrollView, Image, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect,router } from "expo-router";

const Profile = () => {
  return (
    <SafeAreaView className="w-100 h-full bg-black border-2">
      <ScrollView>
        <View className="w-full justify-center px-4 my-6">
          <TouchableOpacity onPress={()=>router.push('/free')}>
          <Image
            source={require("../../assets/icons/left-arrow.png")}
            className="h-6 w-6"
          />
          </TouchableOpacity>
          <Text className="text-xl  text-white text-center mt-5 font-bold">Profile</Text>

          <View className="flex-row justify-center mt-5">
            {/* <View className="w-20 h-20 bg-secondary rounded-full">

            </View> */}
            <Image
              source={require("../../assets/icons/profile 2.png")}
              className="w-20 h-20"
            />
          </View>
          <View className="justify-center mb-5">
            <Text className="text-lg  text-gray-500 text-center font-bold mt-2">
              Robi
            </Text>
            <Text className="text-lg  text-gray-500 font-bold  text-center">
              9876543210
            </Text>
            <Text className="text-lg  text-gray-500 text-center font-bold">
              robiuser@gmail.com
            </Text>
            <Text className="text-lg  text-secondary text-center font-bold mt-3">
              Coins :- 5420
            </Text>
          </View>
          <TouchableOpacity className="border-2 border-black-200 w-80  h-14 mt   bg-black-100 rounded-2xl focus:border-secondary m-3 ml-8"
          onPress={()=>{router.push('(screens)/privacy')}}>
            <View className="mt-3 flex-row">
              <Image
                source={require("../../assets/icons/padlock.png")}
                className="w-7 h-7 ml-5 "
              />
              <Text className="text-lg text-white ml-3 font-semibold">Privacy Policy</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="border-2 border-black-200 w-80  h-14   bg-black-100 rounded-2xl focus:border-secondary  m-2 ml-8 " 
          onPress={()=>{router.push('(screens)/tandc')}}>
            <View className="mt-3 flex-row">
              <Image
                source={require("../../assets/icons/terms-and-conditions.png")}
                className="w-7 h-7 ml-5 "
              />
              <Text className="text-lg text-white ml-3 font-semibold">Terms and Conditions</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="border-2 border-black-200 w-80  h-14   bg-black-100 rounded-2xl focus:border-secondary  m-2 ml-8 "
          onPress={()=>{router.push('(screens)/contact')}}
          
          >
            <View className="mt-3 flex-row">
              <Image
                source={require("../../assets/icons/phone.png")}
                className="w-7 h-7 ml-5 "
              />
              <Text className="text-lg text-white ml-3 font-semibold">Contact</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="border-2 border-black-200 w-80  h-14   bg-black-100 rounded-2xl focus:border-secondary  m-2 ml-8 "
          onPress={()=>{router.push('(screens)/settings')}}>
            <View className="mt-3 flex-row">
              <Image
                source={require("../../assets/icons/setting.png")}
                className="w-7 h-7 ml-5 "
              />
              <Text className="text-lg text-white ml-3 font-semibold">Settings</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="border-2 border-black-200 w-80  h-14   bg-black-100 rounded-2xl focus:border-secondary  m-2 ml-8 " onPress={()=>router.push('/sign_in')}>
            <View className="mt-3 flex-row">
              <Image
                source={require("../../assets/icons/logout.png")}
                className="w-7 h-7 ml-5 "
              />
              <Text className="text-lg text-white ml-3 font-semibold">Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
