import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.header}> Profile</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "white" },
  container: { flex: 1, backgroundColor: "white", padding: 20 },
  header: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
});
