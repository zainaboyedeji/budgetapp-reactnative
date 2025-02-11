import { Tabs } from "expo-router";
import React from "react";
import { Image } from "react-native";
import { HapticTab } from "@/components/HapticTab";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "#A0A0A0",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: () => null,
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          position: "absolute",
          elevation: 0,
          shadowOpacity: 0,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontWeight: "bold",
        },
      }}
    >
      {[
        { name: "index", title: "Homes", icon: require("@/assets/images/home.png") },
        { name: "reports", title: "Reports", icon: require("@/assets/images/reports.png") },
        { name: "chat", title: "Chat", icon: require("@/assets/images/chat.png") },
        { name: "budget", title: "Budget", icon: require("@/assets/images/budget.png") },
        { name: "profile", title: "Profile", icon: require("@/assets/images/profile.png") },
      ].map(({ name, title, icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title,
            tabBarIcon: ({ color }) => (
              <Image
                source={icon}
                style={{ width: 28, height: 28, tintColor: color }}
                resizeMode="contain"
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
