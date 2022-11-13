import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../../styles/styles.js";

//in text onPress={() => navigation.navigate("Home")}

export default function RadarScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>Radar Screen</Text>
    </View>
  );
}
