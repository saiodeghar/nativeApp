import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const Privacy = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <TouchableOpacity
          className="mt-5 px-6"
          onPress={() => router.push("/profile")}
        >
          <Image
            source={require("../../assets/icons/left-arrow.png")}
            className="h-6 w-6"
          />
        </TouchableOpacity>
        <View className="items-center mt-8 p-5">
          <Image
            source={require("../../assets/images/logo.png")}
            className="w-full"
          />
        </View>
        <View className="flex-1 justify-center items-center py-10 px-5">
          <Text className="text-justify text-gray-50">
            <Text className="font-bold mb-1">Privacy Policy {"\n"}</Text>{"\n"}
            Our privacy policy ensures the protection and confidentiality of
            your personal information across our global services. We collect and
            use data solely for enhancing user experience, improving our
            services, and ensuring security. Your information may be shared with
            trusted third parties for operational purposes or legal compliance.
            We strictly adhere to global data protection regulations, providing
            you with control over your data through opt-out options and access
            rights. We prioritize data security through encryption, access
            controls, and regular audits. By using our services, you agree to
            our privacy policy and any updates thereof. Your trust and privacy
            are paramount to us.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Privacy;
