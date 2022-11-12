import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>to start working on your app!</Text>
      <MapView style={styles.map} />
      <StatusBar style="auto" />
      
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
