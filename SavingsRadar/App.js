import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  const macys = {
    latitude: 32,
    longitude: -96,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const walmart = {
    latitude: 33,
    longitude: -94,
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
        style={styles.map} 
        initialRegion={macys}
      >
        <Marker coordinate={macys} pinColor='blue' title={"macys"} description={"its macys lmao"}/>
        <Marker coordinate={walmart} pinColor='blue' />
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
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/2,
  },
});
