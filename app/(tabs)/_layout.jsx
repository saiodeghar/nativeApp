import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";

import { icon, icons } from "../../constants";

const TabIcon = ({ icon, name, color, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      ></Image>
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#ffa001",
          tabBarInactiveTintColor: "#cdcde0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="free"
          options={{
            title: "Free",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={require("../../assets/icons/free.png")}
                color={color}
                name="Free"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="paid"
          options={{
            title: "Paid",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={require("../../assets/icons/money.png")}
                color={color}
                name="Paid"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="vip"
          options={{
            title: "VIP",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={require("../../assets/icons/c.png")}
                color={color}
                name="VIP"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="won"
          options={{
            title: "Won",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={require("../../assets/icons/success.png")}
                color={color}
                name="Won"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={require("../../assets/icons/profile.png")}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="coinsp"
          options={{
            href: null,
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="premium"
          options={{
            href: null,
            headerShown: false,
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
