import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, ListView } from "react-native";
import { addNavigationHelpers, TabNavigator } from "react-navigation";
import { isSignedIn } from "./auth";
import { createRootNavigator } from "./router";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false
    };
  }
  componentWillMount() {
    isSingedIn()
      .then(res => {
        this.setState({
          signedIn: res
        });
      })
      .catch(err => alert("An error occurred"));
  }
  render() {
    const { signedIn } = this.state;

    const Layout = createRootNavigator(signedIn);
    return <Layout />;
  }
}
