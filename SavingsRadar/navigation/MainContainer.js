import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import BenefitsScreen from "./screens/BenefitsScreen";
import RadarScreen from "./screens/RadarScreen";

//Screen names
const homeName = "Home";
const benefitsName = "Benefits";
const detailsName = "Help";
const settingsName = "Profile";
const radarName = "Savings Radar";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === benefitsName) {
              iconName = focused ? "star" : "star-outline";
            } else if (rn === detailsName) {
              iconName = focused ? "chatbubble" : "chatbubble-outline";
            } else if (rn === radarName) {
              iconName = focused ? "compass" : "compass-outline";
            } else if (rn === settingsName) {
              iconName = focused ? "person-circle" : "person-circle-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#093D59",
          inactiveTintColor: "grey",
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 },
        }}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={benefitsName} component={BenefitsScreen} />
        <Tab.Screen name={detailsName} component={DetailsScreen} />
        <Tab.Screen name={radarName} component={RadarScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
