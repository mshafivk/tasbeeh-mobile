import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import configureStore from "./app/utils/configureStore";
const store = configureStore();

import App from "./app";

const TasbeehMobile = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
AppRegistry.registerComponent("tasbeehMobile", () => TasbeehMobile);
