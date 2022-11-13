import { StyleSheet } from "react-native";
//Wrap map view in container
//card container underneath
//figure out how to align the grid

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 25,
  },
  MapView: {
    width: "fit-width" - 40,
    height: 400,
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
