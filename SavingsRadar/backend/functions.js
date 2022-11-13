import React, { useState, useEffect } from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { config } from '../config';
import axios from 'axios';

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
    coordArr.push({a,b});
  } 
  return coordArr;
}