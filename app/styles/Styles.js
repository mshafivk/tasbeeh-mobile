import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

  /*Not used now*/
  points: {
    backgroundColor: "transparent",
    position: "absolute",
    top: 72,
    left: 56,
    width: 90,
    textAlign: "center",
    color: "#E8F5E9",
    fontSize: 50,
    fontWeight: "100"
  },
  counterContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#66BB6A",
    padding: 5
  },
  pointsDelta: {
    color: "#1565C0",
    fontSize: 50,
    fontWeight: "100"
  },
  pointsDeltaActive: {
    color: "#fff"
  }
});
module.exports = styles;
