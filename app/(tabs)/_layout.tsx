import { Tabs } from "expo-router";
import React from "react";
import { HapticTab } from "@/components/HapticTab";
import Icon from "react-native-vector-icons/MaterialIcons";

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
        { name: "index", title: "Home", icon: "home" },
        { name: "reports", title: "Reports", icon: "insert-chart" },
        { name: "chat", title: "Chat", icon: "chat" },
        { name: "budget", title: "Budget", icon: "attach-money" },
        { name: "profile", title: "Profile", icon: "person" },
      ].map(({ name, title, icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title,
            tabBarIcon: ({ color, size = 28 }) => (
              <Icon name={icon} size={size} color={color} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
