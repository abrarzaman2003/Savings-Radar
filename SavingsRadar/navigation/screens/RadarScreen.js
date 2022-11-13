import * as React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
//import styles from "../../styles/styles.js";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

//in text onPress={() => navigation.navigate("Home")}

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
      <MapView 
        provider={PROVIDER_GOOGLE}
        style={styles.map} 
        initialRegion={macys}
      >
        <Marker coordinate={macys} pinColor='blue' title={"macys"} description={"its macys lmao"}/>
        <Marker coordinate={walmart} pinColor='red' />
      </MapView>
    </View>
    
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  },
  map: {
    width: Dimensions.get('window').width-75,
    height: Dimensions.get('window').height/2 - 80,
    borderRadius: 16,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  cardContainer: {
    width: 30,
    backgroundColor: "#F2EFEA",
    height: 20,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  
});
