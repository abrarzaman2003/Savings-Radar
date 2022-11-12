import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  // const [coords, setCoords] = useState([]);
  const [loaded,setLoaded] = useState(false);
  const [region, setRegion] = useState({
    latitude: 51.5079145,
    longitude: -96.0,
    latitudeDelta: 0.75,
    longitudeDelta: 0.75,
  });
  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      var lat = location["coords"].latitude;
      var lon = location["coords"].longitude;
      //var c = [lat,lon];
      //setCoords(c);
      //console.log("yo");
      var newRegion = {
        latitude: lat,
        longitude: lon,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }
      setRegion(newRegion);
      setLoaded(true);
    })();
  }, [location]);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Text>to start working on your app!</Text>
      {loaded ? <MapView style={styles.map} initialRegion={region}
        //onRegionChangeComplete={(region) => setRegion(region)}
        /> : <Text>"laoding"</Text>}
      <StatusBar style="auto" />
      <Text>{text}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width/2,
    height: Dimensions.get('window').height/2,
  },
});
