import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const TandC = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="items-center mt-8 p-5">
          <Image
            source={require("../../assets/images/logo.png")}
            className="w-full"
          />
        </View>
        <View className="flex-1 justify-center items-center py-10 px-5">
          <Text className="text-justify text-gray-50">
            <Text className="font-bold mb-1">
              Terms and Conditions {"\n"}
              {"\n"}
            </Text>
            Please read these Terms and Conditions carefully before using the
            Aora mobile application operated by SSTech. Your access to and use
            of the Service is conditioned on your acceptance of and compliance
            with these Terms. These Terms apply to all visitors, users, and
            others who access or use the Service. By accessing or using the
            Service you agree to be bound by these Terms. If you disagree with
            any part of the terms then you may not access the Service.{"\n"}
          </Text>
          <Text className="text-justify text-gray-50">
            <Text className="font-bold mb-1">
              Account Registration{"\n"}
              {"\n"}
            </Text>
            To access the features of the Service, you may be required to
            register for an account. When registering for an account, you agree
            to provide accurate, current, and complete information about
            yourself as prompted by the registration form. You are responsible
            for keeping your password secure and for any activities or actions
            under your password. You agree not to disclose your password to any
            third party.
          </Text>
          <Text className="text-justify text-gray-50">
            <Text className="font-bold mb-1">
              Limitation of Liability{"\n"}
              {"\n"}
            </Text>
            In no event shall SSTech, nor its directors, employees, partners,
            agents, suppliers, or affiliates, be liable for any indirect,
            incidental, special, consequential, or punitive damages, including
            without limitation, loss of profits, data, use, goodwill, or other
            intangible losses, resulting from (i) your access to or use of or
            inability to access or use the Service; (ii) any conduct or content
            of any third party on the Service; (iii) any content obtained from
            the Service; and (iv) unauthorized access, use, or alteration of
            your transmissions or content, whether based on warranty, contract,
            tort (including negligence), or any other legal theory, whether or
            not we have been informed of the possibility of such damage, and
            even if a remedy set forth herein is found to have failed of its
            essential purpose.{"\n"}
          </Text>
          <Text className="text-justify text-gray-50">
            <Text className="font-bold mb-1">
              Disclaimer for Losses and Responsible Gambling{"\n"}
              {"\n"}
            </Text>
            Our Service provides betting tips and live game updates for
            informational purposes only. We do not guarantee the accuracy,
            completeness, or reliability of any betting tips or live game
            updates provided through the Service. You acknowledge and agree that
            any reliance on betting tips or live game updates is at your own
            risk. We are not responsible for any losses incurred as a result of
            using the information provided by the Service. You understand and
            acknowledge that gambling involves risk, and you should only gamble
            with money that you can afford to lose. You agree that we shall not
            be liable for any direct, indirect, incidental, special, or
            consequential damages arising out of or in any way connected with
            your use of the betting tips or live game updates provided through
            the Service.{"\n"}
          </Text>
          <Text className="text-justify text-gray-50">
            <Text className="font-bold mb-1">
              Age Restriction{"\n"}
              {"\n"}
            </Text>
            The Service is intended for use by individuals aged 18 and older. By
            accessing or using the Service, you affirm that you are at least 18
            years of age or older. We do not knowingly collect or solicit
            personal information from anyone under the age of 18. If we become
            aware that a person under 18 has provided us with personal
            information, we will delete such information from our files
            immediately.{"\n"}
          </Text>
          <Text className="text-justify text-gray-50">
            <Text className="font-bold mb-1">
              Responsible Gambling
              {"\n"}
              {"\n"}
            </Text>
            The Service is intended for use by individuals aged 18 and older. By
            accessing or using the Service, you affirm that you are at least 18
            years of age or older. We do not knowingly collect or solicit
            personal information from anyone under the age of 18. If we become
            aware that a person under 18 has provided us with personal
            information, we will delete such information from our files
            immediately.{"\n"}
          </Text>
          <Text className="text-justify text-gray-50">
            <Text className="font-bold mb-1">
              Termination
              {"\n"}
              {"\n"}
            </Text>
            Termination We may terminate or suspend your account and bar access
            to the Service immediately, without prior notice or liability, under
            our sole discretion, for any reason whatsoever and without
            limitation, including but not limited to a breach of the Terms..
            {"\n"}
          </Text>
          <Text className="text-justify text-gray-50">
            <Text className="font-bold mb-1">
              Changes
              {"\n"}
              {"\n"}
            </Text>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material, we will try to
            provide at least 30 days' notice prior to any new terms taking
            effect. What constitutes a material change will be determined at our
            sole discretion. By continuing to access or use our Service after
            those revisions become effective, you agree to be bound by the
            revised terms. If you do not agree to the new terms, please stop
            using the Service.
            {"\n"}
          </Text>
          <Text className="text-justify  text-gray-50 text-2xl">
            If you have any questions about these Terms and Conditions, please contact us at help@gmail.com.
          </Text>
       
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TandC;
