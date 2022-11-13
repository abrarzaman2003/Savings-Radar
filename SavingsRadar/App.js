import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView from "react-native-maps";
import MainContainer from "./navigation/MainContainer";

/*
    <View style={styles.container}>
      
      <MapView style={styles.map} />
      <StatusBar style="auto" />
      
    </View>
*/

export default function App() {
  return <MainContainer />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width / 2,
    height: Dimensions.get("window").height / 2,
  },
});
