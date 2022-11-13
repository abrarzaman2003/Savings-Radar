import * as React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import ss from "/Users/aarianahsan/Desktop/College/Other-Coding-Projects/Savings Radar - HackUTD 2022/Savings-Radar/SavingsRadar/assets/CP1.png";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Image source={ss} style={styles.pic} />
    </View>
  );
}
const styles = StyleSheet.create({
  pic: {
    width: "fit-width",
    height: 800,
  },
});
