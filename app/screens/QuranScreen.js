import React, { Component } from "react";
import { Image, StyleSheet, Button, Text, View, ListView } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";

class QuranScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Quran",
    tabBarIcon: ({ tintColor }) => (
      <Icon name="book-open" size={24} style={[{ color: tintColor }]} />
    )
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

export default QuranScreen;
