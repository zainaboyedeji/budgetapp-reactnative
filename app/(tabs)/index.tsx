import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { useRouter } from "expo-router";

const BudgetScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Budget</Text>
        <View style={styles.budgetInputMoney}>
          <Image
            source={require("@/assets/images/currency.png")}
            style={{ width: 23, height: 23 }}
          />
          <Text style={styles.monthlyBudgetText}>Monthly Budget</Text>
        </View>

        <View style={styles.budgetInputContainer}>
          <TextInput
            style={styles.budgetInput}
            value="₦120,000"
            editable={false}
          />
        </View>

        <View style={styles.tabContainer}>
          <Text style={styles.inactiveTab}>Last Month</Text>
          <Text style={styles.activeTab}>This Month</Text>
          <Image
            source={require("@/assets/images/ellipsis.png")}
            style={{ marginTop: 6 }}
          />
        </View>

        <View style={styles.progressContainer}>
          <AnimatedCircularProgress
            size={120}
            width={10}
            fill={49}
            tintColor="#1E5FBA"
            backgroundColor="#A6C5E7"
          >
            {() => <Text style={styles.text}>49%</Text>}
          </AnimatedCircularProgress>
        </View>

        <View style={styles.progressContainer}>
          <Text style={styles.amountSpent}>Amount spent so far</Text>
          <Text style={styles.amountBottom}>₦50,000/₦120,000</Text>
        </View>

        <Text style={styles.categoryHeader}>Category Breakdown</Text>

        <TouchableOpacity
          style={styles.categoryItem}
          onPress={() => router.push("/+not-found")}
        >
          <Image source={require("@/assets/images/food.png")} />
          <View style={styles.category}>
            <Text style={styles.categoryText}>Food and Drink</Text>
            <Text style={styles.categoryPercentageText}>40%</Text>
          </View>
          <Text style={styles.categoryAmount}>₦20,000/₦42,000</Text>
        </TouchableOpacity>

        <View style={styles.categoryItem}>
          <Image source={require("@/assets/images/savings.png")} />
          <View style={styles.category}>
            <Text style={styles.categoryText}>Savings</Text>
            <Text style={styles.categoryPercentageText}>20%</Text>
          </View>
          <Text style={styles.categoryAmount}>₦10,000/₦24,000</Text>
        </View>

        <View style={styles.categoryItem}>
          <Image source={require("@/assets/images/food.png")} />
          <View style={styles.category}>
            <Text style={styles.categoryText}>Food and Drink</Text>
            <Text style={styles.categoryPercentageText}>40%</Text>
          </View>
          <Text style={styles.categoryAmount}>₦20,000/₦42,000</Text>
        </View>
        <View style={styles.categoryItem}>
          <Image source={require("@/assets/images/savings.png")} />
          <View style={styles.category}>
            <Text style={styles.categoryText}>Savings</Text>
            <Text style={styles.categoryPercentageText}>20%</Text>
          </View>
          <Text style={styles.categoryAmount}>₦10,000/₦24,000</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "white" },
  container: { backgroundColor: "white", padding: 20 },
  header: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  budgetInputMoney: {
    flexDirection: "row",
    marginVertical: 10,
  },
  monthlyBudgetText: {
    color: "#707480",
    fontWeight: "400",
    marginTop: 2,
    marginLeft: 10,
    fontSize: 14,
  },
  budgetInputContainer: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5, // For Android shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4, // For iOS shadow
  },

  budgetInput: { fontSize: 22, fontWeight: "bold" },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },
  inactiveTab: { color: "#707480", fontSize: 16, fontWeight: "bold" },
  activeTab: {
    color: "#0466C8",
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#0466C8",
    alignSelf: "center",
  },
  progressContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1E5FBA",
  },
  percentage: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2F80ED",
    position: "absolute",
    top: 55,
  },
  amountSpent: { fontSize: 14, color: "#707480", marginTop: 10 },
  amountBottom: {
    fontSize: 17,
    color: "#0466C8",
    marginTop: 10,
    marginBottom: 20,
    fontWeight: "bold",
  },

  categoryHeader: { fontSize: 20, fontWeight: "bold", marginVertical: 20 },
  categoryItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    marginVertical: 5,
  },
  category: { flex: 1, marginLeft: 10 },
  categoryText: { fontSize: 16, fontWeight: "500", flex: 1, marginLeft: 10 },
  categoryPercentageText: {
    fontSize: 14,
    fontWeight: "500",
    flex: 1,
    marginLeft: 10,
    color: "#707480",
  },
  categoryAmount: { fontSize: 14, color: "#6D6D6D" },
});

export default BudgetScreen;
