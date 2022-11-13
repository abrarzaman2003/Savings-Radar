import { StyleSheet } from "react-native";
//Wrap map view in container
//card container underneath
//figure out how to align the grid

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 100,
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
