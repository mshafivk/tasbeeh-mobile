import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import theme from "../styles/Theme";
const DefaultText = props => {
  return <Text style={[styles.text, props.style]}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: theme.fontStyle.english.regular
});

module.exports = DefaultText;
