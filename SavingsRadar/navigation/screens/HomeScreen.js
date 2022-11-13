import * as React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import ss from "../../assets/CP1.png";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Image source={ss} style={styles.pic} />
    </View>
  );
}
const styles = StyleSheet.create({
  pic: {
    resizeMode: 'contain',
    width: '100%',
    height: 800,
  },
});
