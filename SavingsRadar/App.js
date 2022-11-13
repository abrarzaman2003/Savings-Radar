import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, Button } from 'react-native';

import { config } from './config';

import axios from 'axios';

// returns a 2d array of arrays which contains arrays of coords, address
export async function getResults(companyName,currentLat,currentLong){
  var coordArr =[];
  console.log("hi1");
  const response = await axios({
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=${companyName}&location=${currentLat}%2C${currentLong}&radius=15000&key=${config.APIKEY}`,
  });
  const x = await response.data.results;
  for (var i =0; i<x.length; i++){
    const b = await x[i].vicinity;
    const a = await x[i].geometry.location;
    console.log(a);
    console.log("\n\n\n");
    coordArr.push([a,b]);
  } 
  return coordArr;
}
function caller() {
  getResults("macys", 32.98, -96.75).then((r)=>console.log(r));
}

export default function App() {
  
  return (
    <View style={styles.container}>
      <Button
        onPress={caller}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      
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
