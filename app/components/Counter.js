import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  View,
  Dimensions
} from "react-native";
import DefaultText from "./DefaultText";
import theme from "../styles/Theme";
import { AppConfig, AUDIO_CONFIG } from "../utils/Config";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const screenWidth = Dimensions.get("window").width;
const counterOptions = {
  size: 180,
  width: 8,
  MAX_COUNT: 33
};

const Counter = props => {
  return (
    <TouchableHighlight
      underlayColor={theme.colors.underlayColor}
      onPress={() => props.onCounterPress()}
      activeOpacity={0.9}
      style={[styles.counterContainer, props.style]}
    >
      <Image
        source={require("../images/counter-background.png")}
        style={styles.counterImage}
      >
        <View>
          <DefaultText style={styles.arabicHeader}>
            {props.dikrText}
          </DefaultText>
        </View>
        <View>
          <AnimatedCircularProgress
            size={counterOptions.size}
            width={counterOptions.width}
            fill={props.fill}
            tintColor={theme.colors.circularProgress.tintColor}
            style={{ flex: 1, width: screenWidth, alignItems: "center" }}
          >
            {fill => (
              <Text style={styles.points}>
                {Math.round(props.MAX_COUNT * props.fill / 100)}
              </Text>
            )}
          </AnimatedCircularProgress>
        </View>
      </Image>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  arabicHeader: {
    fontFamily: "PDMS_Saleem_QuranFont-signed",
    fontSize: 40,
    textAlign: "center",
    color: "white"
  },
  englishHeader: {
    fontFamily: "Raleway-Regular",
    fontWeight: "100",
    textAlign: "center",
    fontSize: 30,
    padding: 5
  },
  points: {
    backgroundColor: "transparent",
    position: "absolute",
    top: 63,
    left: 140,
    width: 90,
    textAlign: "center",
    color: "white",
    fontSize: 43,
    fontFamily: "Raleway-Regular"
  },
  counterContainer: {
    flex: 1,
    alignItems: "center",
    //elevation: 2,
    width: screenWidth
  },
  pointsDelta: {
    color: "#E0F2F1",
    fontSize: 50,
    fontWeight: "100"
  },
  pointsDeltaActive: {
    color: "#E0F2F1"
  },
  counterImage: {
    flex: 1,
    alignSelf: "stretch",
    width: undefined,
    height: undefined
  }
});
export default Counter;
