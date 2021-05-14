import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Dimensions
} from "react-native";
import DefaultText from "../components/DefaultText";
import theme from "../styles/Theme";
import { AppConfig, AUDIO_CONFIG } from "../utils/Config";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import Sound from "../utils/Sound";

import Counter from "../components/Counter";

const TAP_SOUND_PATH = AUDIO_CONFIG.AUDIOS.TAP;

const TapSound = new Sound(TAP_SOUND_PATH);

class TasbeehCounter extends React.Component {
  constructor(props) {
    super(props);
    this.handleCounterPress = this.handleCounterPress.bind(this);
  }
  handleCounterPress() {
    TapSound.play();
    this.props.onCounterPress();
  }
  render() {
    return (
      <Counter
        {...this.props}
        onCounterPress={this.handleCounterPress}
        style={this.props.style}
      />
    );
  }
}

export default TasbeehCounter;
