import { StyleSheet } from "react-native";
const listViewStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  rowContainer: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  separator: {
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    borderStyle: "dotted"
  },
  rowTitle: {
    flex: 1
  }
});
module.exports = listViewStyle;
