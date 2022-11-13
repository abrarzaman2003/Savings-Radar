import React, { useState, useEffect, useRef } from "react";
import {
  Platform,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
//import styles from "../../styles/styles.js";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { getResults } from "../../backend/functions.js";
import * as Location from "expo-location";

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
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const macys = {
    latitude: 32.98,
    longitude: -96.75,
    latitudeDelta: 0.25,
    longitudeDelta: 0.25,
  };
  const [coordArr, setCoordArr] = useState([]);
  const [markerArray, setMarkerArray] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const a = async () => {
    const arr = await getResults("macys", 32.98, -96.75);
    setCoordArr(arr);
    console.log(coordArr);
    const mArr = await mapMarkers("macys", coordArr, "red");
    setMarkerArray(mArr);
    setLoaded(true);
    console.log(mArr);
  };
  //a();
  useEffect(() => {
    a();
  }, [loaded]);
  // getResults("macys", 32.98, -96.75);
  //.then((r)=>console.log(r));
  const [coordArr2, setCoordArr2] = useState([]);
  const [markerArray2, setMarkerArray2] = useState([]);
  const [loaded2, setLoaded2] = useState(false);
  const a2 = async () => {
    const arr = await getResults("walmart", 32.98, -96.75);
    setCoordArr2(arr);
    console.log(coordArr2);
    const mArr = await mapMarkers("walmart", coordArr2, "blue");
    setMarkerArray2(mArr);
    setLoaded2(true);
    console.log(mArr);
  };
  //a();
  useEffect(() => {
    a2();
  }, [loaded2]);
  const [coordArr3, setCoordArr3] = useState([]);
  const [markerArray3, setMarkerArray3] = useState([]);
  const [loaded3, setLoaded3] = useState(false);
  const a3 = async () => {
    const arr = await getResults("jimmy_johns", 32.98, -96.75);
    setCoordArr3(arr);
    console.log(coordArr3);
    const mArr = await mapMarkers("jimmy johns", coordArr3, "green");
    setMarkerArray3(mArr);
    setLoaded3(true);
    console.log(mArr);
  };
  //a();
  useEffect(() => {
    a3();
  }, [loaded3]);
  const [coordArr4, setCoordArr4] = useState([]);
  const [markerArray4, setMarkerArray4] = useState([]);
  const [loaded4, setLoaded4] = useState(false);
  const a4 = async () => {
    const arr = await getResults("home_depot", 32.98, -96.75);
    setCoordArr4(arr);
    console.log(coordArr4);
    const mArr = await mapMarkers("home depot", coordArr4, "orange");
    setMarkerArray4(mArr);
    setLoaded4(true);
    console.log(mArr);
  };
  //a();
  useEffect(() => {
    a4();
  }, [loaded4]);
  // getResults("macys", 32.98, -96.75);
  //.then((r)=>console.log(r));
  mapMarkers = (name, cA, color) => {
    console.log(cA);
    return cA.map((report) => (
      <Marker
        coordinate={{ latitude: report.a.lat, longitude: report.a.lng }}
        title={name}
        description={report.b}
        pinColor={color}
      ></Marker>
    ));
  };
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={macys}
        >
          {loaded ? markerArray : ""}
          {loaded2 ? markerArray2 : ""}
          {loaded3 ? markerArray3 : ""}
          {loaded4 ? markerArray4 : ""}
        </MapView>
      </View>
      <ScrollView>
        <Text style={styles.gridHeader}>Current Promotions</Text>

        <View style={styles.app}>
          <View style={styles.item}>
            <Text>Current</Text>
          </View>
          <View style={styles.item}>
            <Text>Current</Text>
          </View>
        </View>
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 2, // the number of columns you want to divide the screen into
    marginHorizontal: "auto",
    width: 400,
    backgroundColor: "beige",
  },
  item: {
    flex: 3,
    maxWidth: "50%", // 100% devided by the number of rows you want
    alignItems: "center",

    // my visual styles; not important for the grid
    padding: 10,
    backgroundColor: "rgba(249, 180, 45, 0.25)",
    borderWidth: 1.5,
    borderColor: "#000",
  },
  gridHeader: {
    fontSize: 24,
    fontFamily: "GillSans-BoldItalic",
    marginTop: 10,
    marginBottom: 30,
    color: "#093D59",
  },

  cardContainer: {
    backgroundColor: "#093D59",
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
    width: Dimensions.get("window").width - 40,
    height: Dimensions.get("window").height / 2 - 80,
    borderRadius: 16,
    marginTop: 22,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 9,
  },
});
