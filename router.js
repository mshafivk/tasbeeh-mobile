import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, ListView } from "react-native";
import {
  addNavigationHelpers,
  TabNavigator,
  StackNavigator
} from "react-navigation";

import HomeScreen from "./app/screens/HomeScreen";
import QuranScreen from "./app/screens/QuranScreen";
import LoginScreen from "./app/screens/LoginScreen";

export const AppDashboard = TabNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Notifications: {
      screen: QuranScreen
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "white",
      showIcon: true,
      showLabel: false,

      style: {
        backgroundColor: "#00695C"
      },
      indicatorStyle: {
        backgroundColor: "white"
      }
    }
  }
);
export const PreAuth = StackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  },
  { headerMode: "none" }
);

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: AppDashboard
        //navigationOptions: {
        //  gesturesEnabled: false
        //}
      },
      SignedOut: {
        screen: PreAuth,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};
