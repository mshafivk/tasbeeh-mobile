/*Basic Configuration For Themes*/
import { StyleSheet } from "react-native";

const colors = {
  white: "#fff",
  underlayColor: "#B2DFDB",
  backgroundGadient1: "#348F50",
  backgroundGadient2: "#56B4D3",
  circularProgress: {
    tintColor: "black"
  }
};
const viewStyle = {};
const fontStyle = {
  english: {
    regular: {
      fontFamily: "Raleway-Regular",
      fontSize: 14,
      color: colors.black
    }
  }
};
const iconStyle = {
  size: 12
};

const theme = {
  colors: colors,
  fontStyle: fontStyle,
  viewStyle: viewStyle,
  iconStyle: iconStyle
};
export default theme;
