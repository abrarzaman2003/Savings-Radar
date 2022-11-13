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
