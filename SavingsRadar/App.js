import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView from "react-native-maps";
import MainContainer from "./navigation/MainContainer";
import Notifs from "./backend/notifications";

export default function App() {
  return ( <MainContainer /> );
}
