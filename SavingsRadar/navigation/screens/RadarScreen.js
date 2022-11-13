import React, { useState, useEffect, useRef } from "react";
import {
  Image,
  Platform,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Button,
  TouchableOpacity,
} from "react-native";
//import styles from "../../styles/styles.js";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { getResults } from "../../backend/functions.js";
import * as Location from "expo-location";
import Notifs from "../../backend/notifications.js";
import jj from "../../assets/Jimmy_Johns_logo.svg.png";
import hd from "../../assets/HomeDepot.png";
import mc from "../../assets/Macys-Emblem.png";
import wm from "../../assets/Walmart_logo_transparent_png.png";
import f2 from "../../assets/Forever-21-logo.png";
import ad from "../../assets/Adidas_Logo.svg.png";

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
  const [show, setShow] = useState(false);
  const a = async () => {
    const arr = await getResults("macys", 32.98, -96.75);
    setCoordArr(arr);
    console.log(coordArr);
    const mArr = await mapMarkers("Macy's", coordArr, "red");
    setMarkerArray(mArr);
    setLoaded(true);
    //console.log(mArr);


  }

  //a();
  useEffect(() => {
    a();
  }, [loaded]);
  const click = () => {
    console.log("hi");
    const b = !show;
    setShow(b);
  };
  // getResults("macys", 32.98, -96.75);
  //.then((r)=>console.log(r));
  const [coordArr2, setCoordArr2] = useState([]);
  const [markerArray2, setMarkerArray2] = useState([]);
  const [loaded2, setLoaded2] = useState(false);
  const [show2, setShow2] = useState(false);
  const a2 = async () => {
    const arr = await getResults("walmart", 32.98, -96.75);
    setCoordArr2(arr);
    //console.log(coordArr2)
    const mArr = await mapMarkers("Walmart",coordArr2, 'blue');
    setMarkerArray2(mArr);
    setLoaded2(true);
    //console.log(mArr);


  }
  
  //a();
  useEffect(() => {
    a2();
  }, [loaded2]);
  const click2 = () => {
    console.log("hi");
    const b = !show2;
    setShow2(b);
  };
  const [coordArr3, setCoordArr3] = useState([]);
  const [markerArray3, setMarkerArray3] = useState([]);
  const [loaded3, setLoaded3] = useState(false);
  const [show3, setShow3] = useState(false);
  const a3 = async () => {
    const arr = await getResults("jimmy_johns", 32.98, -96.75);
    setCoordArr3(arr);
    //console.log(coordArr3)
    const mArr = await mapMarkers("Jimmy Johns",coordArr3,'green');
    setMarkerArray3(mArr);
    setLoaded3(true);
    //console.log(mArr);


  }
  //a();
  useEffect(() => {
    a3();
  }, [loaded3]);
  const click3 = () => {
    console.log("hi");
    const b = !show3;
    setShow3(b);
  };
  const [coordArr4, setCoordArr4] = useState([]);
  const [markerArray4, setMarkerArray4] = useState([]);
  const [loaded4, setLoaded4] = useState(false);
  const [show4, setShow4] = useState(false);
  const a4 = async () => {
    const arr = await getResults("home_depot", 32.98, -96.75);
    setCoordArr4(arr);
    //console.log(coordArr4)
    const mArr = await mapMarkers("Home Depot",coordArr4,'orange');
    setMarkerArray4(mArr);
    setLoaded4(true);
    //console.log(mArr);

  }
  //a();
  useEffect(() => {
    a4();
  }, [loaded4]);
  const click4 = () => {
    console.log("hi");
    const b = !show4;
    setShow4(b);
  };
  // getResults("macys", 32.98, -96.75);
  //.then((r)=>console.log(r));
  mapMarkers = (name,cA, color) => {
    //console.log(cA);
    return cA.map((report) => <Marker

      coordinate={{ latitude: report.a.lat, longitude: report.a.lng }}
      title={name}
      description={report.b}
      pinColor={color}
    >
    </Marker >)
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={macys}
        >
          {show ? markerArray : ""}
          {show2 ? markerArray2 : ""}
          {show3 ? markerArray3 : ""}
          {show4 ? markerArray4 : ""}
        </MapView>
      </View>
      <ScrollView>
        <Text style={styles.gridHeader}>Current Promotions</Text>

        <View style={styles.app}>
          <Row>
            <Col numRows={2}>
              <TouchableOpacity onPress={click3}>
                <Image source={jj} style={styles.pic} />
                <Text style={styles.text}>3% back</Text>
              </TouchableOpacity>
            </Col>
            <Col numRows={2}>
              <TouchableOpacity onPress={click2}>
                <Image source={wm} style={styles.pic} />
                <Text style={styles.text}>5% back</Text>
              </TouchableOpacity>
            </Col>
          </Row>
          <Row>
            <Col numRows={2}>
              <TouchableOpacity onPress={click}>
                <Image source={mc} style={styles.pic} />
                <Text style={styles.text}>12% back</Text>
              </TouchableOpacity>
            </Col>
            <Col numRows={2}>
              <TouchableOpacity onPress={click4}>
                <Image source={hd} style={styles.pic} />
                <Text style={styles.text}>4% back</Text>
              </TouchableOpacity>
            </Col>
          </Row>
          <Row>
            <Col numRows={2}>
              <Image source={f2} style={styles.pic} />
              <Text style={styles.text}>9% back</Text>
            </Col>
            <Col numRows={2}>
              <Image source={ad} style={styles.pic} />
              <Text style={styles.text}>7% back</Text>
            </Col>
          </Row>
        </View>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 2, // the number of columns you want to devide the screen into
    marginHorizontal: "auto",
    width: 400,
    height: 800,
  },
  row: {
    height: 200,
    flexDirection: "row",
  },
  pic: {
    marginHorizontal: 25,
    height: 100,
    width: 100,
    resizeMode: "contain",
  },
  text: {
    textAlign: "center",
  },
  "2col": {
    backgroundColor: "white",
    borderColor: "#fff",
    borderWidth: 5,
    flex: 2,
    borderRadius: 16,
    marginTop: 22,
    height: "90%",
    padding: 20,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 9,
  },
  gridHeader: {
    fontSize: 24,
    fontFamily: "GillSans-BoldItalic",
    marginTop: 10,
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
const Col = ({ numRows, children }) => {
  return <View style={styles[`${numRows}col`]}>{children}</View>;
};

const Row = ({ children }) => <View style={styles.row}>{children}</View>;
