import React, { useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { useRouter } from "expo-router";

type RootStackParamList = {
  Home: undefined;
  NotFound: undefined;
};

type Props = StackScreenProps<RootStackParamList, "NotFound">;

const NotFoundScreen: React.FC<Props> = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/404.png")}
        style={{ width: 300, height: 300 }}
      />
      <Text style={styles.title}>Page Not Found</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push("/")}>
        <Text style={styles.buttonText}>Go Back Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  box: {
    alignItems: "center",
    borderRadius: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0466C8",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#aaa",
    textAlign: "center",
    marginTop: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#0466C8",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default NotFoundScreen;
