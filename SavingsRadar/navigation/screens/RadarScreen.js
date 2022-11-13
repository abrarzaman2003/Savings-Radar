import * as React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
//import styles from "../../styles/styles.js";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

//in text onPress={() => navigation.navigate("Home")}

/*
 <View>
          <ScrollView>
        <Text
          onPress={() => navigation.navigate("Home")}
          style={{ fontSize: 26, fontWeight: "bold" }}
        >
          Settings Screen
        </Text>
      </ScrollView>
      </View>

      Test color: #093D59
*/

export default function RadarScreen({ navigation }) {
  const macys = {
    latitude: 32,
    longitude: -96,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const walmart = {
    latitude: 32.001,
    longitude: -96,
    latitudeDelta: 0,
    longitudeDelta: 0,
  };
  const forever21 = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  };
  const homedepot = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  };
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={macys}
        >
          <Marker
            coordinate={macys}
            pinColor="blue"
            title={"macys"}
            description={"its macys lmao"}
          />
          <Marker coordinate={walmart} pinColor="red" />
        </MapView>
      </View>
      <ScrollView>
        <Text style={styles.gridHeader}>Current Promotions</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  gridHeader: {
    fontSize: 24,
    fontFamily: "GillSans-BoldItalic",
    marginTop: 10,
    color: "#093D59",
  },
  cardContainer: {
    backgroundColor: "#fff",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 500,
    alignItems: "center",
    justifyContent: "start",
    shadowColor: "#000",
    shadowOffset: {
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 9,
  },
  container: {
    backgroundColor: "#fff",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    alignItems: "center",
    justifyContent: "start",
  },
  map: {
    width: Dimensions.get("window").width - 75,
    height: Dimensions.get("window").height / 2 - 80,
    borderRadius: 16,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 9,
  },
});
