import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";

import DefaultText from "../components/DefaultText";
const FacebookLogin = props => {
  return (
    <TouchableOpacity style={{ width: 200 }} onPress={() => props.onPress()}>
      <Icon.Button name="social-facebook" backgroundColor="#3b5998">
        <DefaultText style={styles.textStyle}>
          Login with Facebook
        </DefaultText>
      </Icon.Button>
    </TouchableOpacity>
  );
};
const styles = {
  textStyle: { fontFamily: "Arial", fontSize: 15, color: "white" }
};
export default FacebookLogin;
