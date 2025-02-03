import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { ProgressChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const BudgetScreen = () => {
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
          <ProgressChart
            data={{ data: [0.49] }}
            width={screenWidth - 40}
            height={150}
            strokeWidth={10}
            radius={32}
            chartConfig={{
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              color: () => `#2F80ED`,
            }}
            hideLegend={true}
          />
          <Text style={styles.percentage}>49%</Text>
        </View>

        <View style={styles.progressContainer}>
          <Text style={styles.amountSpent}>Amount spent so far</Text>
          <Text style={styles.amountBottom}>₦50,000/₦120,000</Text>
        </View>

        <Text style={styles.categoryHeader}>Category Breakdown</Text>

        <View style={styles.categoryItem}>
          <Image source={require("@/assets/images/food.png")} />
          <View style={styles.category}>
            <Text style={styles.categoryText}>Food and Drink</Text>
            <Text style={styles.categoryText}>40%</Text>
          </View>
          <Text style={styles.categoryAmount}>₦20,000/₦42,000</Text>
        </View>

        <View style={styles.categoryItem}>
          <Image source={require("@/assets/images/savings.png")} />
          <View style={styles.category}>
            <Text style={styles.categoryText}>Savings</Text>
            <Text style={styles.categoryText}>20%</Text>
          </View>
          <Text style={styles.categoryAmount}>₦10,000/₦24,000</Text>
        </View>

        <View style={styles.categoryItem}>
          <Image source={require("@/assets/images/food.png")} />
          <View style={styles.category}>
            <Text style={styles.categoryText}>Food and Drink</Text>
            <Text style={styles.categoryText}>40%</Text>
          </View>
          <Text style={styles.categoryAmount}>₦20,000/₦42,000</Text>
        </View>
        <View style={styles.categoryItem}>
          <Image source={require("@/assets/images/savings.png")} />
          <View style={styles.category}>
            <Text style={styles.categoryText}>Savings</Text>
            <Text style={styles.categoryText}>20%</Text>
          </View>
          <Text style={styles.categoryAmount}>₦10,000/₦24,000</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "white" },
  container: { flex: 1, backgroundColor: "white", padding: 20 },
  header: { fontSize: 28, fontWeight: "bold", marginBottom: 16 },
  budgetInputMoney: {
    flexDirection: "row",
    marginVertical: 10,
  },
  monthlyBudgetText: {
    color: "#707480",
    fontWeight: "400",
    marginTop: 2,
    marginLeft: 4,
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
    textDecorationLine: "underline",
  },
  progressContainer: { alignItems: "center" },
  percentage: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2F80ED",
    position: "absolute",
    top: 55,
  },
  amountSpent: { fontSize: 14, color: "#707480", marginTop: 10 },
  amountBottom: {
    fontSize: 14,
    color: "#0466C8",
    marginTop: 10,
    fontWeight: "bold",
  },

  categoryHeader: { fontSize: 18, fontWeight: "bold", marginVertical: 30 },
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
  categoryAmount: { fontSize: 14, color: "#6D6D6D" },
});

export default BudgetScreen;
