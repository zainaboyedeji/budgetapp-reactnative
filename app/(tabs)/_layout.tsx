import { Tabs } from "expo-router";
import React from "react";
import {  Image } from "react-native";
import { HapticTab } from "@/components/HapticTab";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#007AFF", // Active tab text and icon color (blue)
        tabBarInactiveTintColor: "#A0A0A0", // Inactive tab color (gray)
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: () => null, // Remove blur effect
        tabBarStyle: {
          backgroundColor: "#FFFFFF", // Solid white background
          position: "absolute",
          elevation: 0, // Remove shadow (Android)
          shadowOpacity: 0, // Remove shadow (iOS)
          borderTopWidth: 0, // Remove gray border
        },
        tabBarLabelStyle: {
          fontWeight: "bold", // Makes active tab text bold
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Homes",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("@/assets/images/home.png")}
              style={{ width: size, height: size, tintColor: color }} // Dynamic icon color
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="reports"
        options={{
          title: "Reports",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("@/assets/images/reports.png")}
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("@/assets/images/chat.png")}
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="budget"
        options={{
          title: "Budget",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("@/assets/images/budget.png")}
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("@/assets/images/profile.png")}
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tabs>
  );
}
