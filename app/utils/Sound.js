import React from "react";
const SoundModule = require("react-native-sound");

export default class Sound {
  constructor(audioPath) {
    var audio = new SoundModule(audioPath, SoundModule.MAIN_BUNDLE, error => {
      if (error) {
        console.error("failed to load the sound", error);
        return;
      }
      this.isPlaying = false;
      // loaded successfully
      console.log(
        "duration in seconds: " +
          audio.getDuration() +
          "number of channels: " +
          audio.getNumberOfChannels()
      );
    });
    this.setAudio(audio);
  }
  setAudio(audio) {
    this.audio = audio;
  }
  play() {
    console.log(" [Sound.js] Play method called");
    if (this.isPlaying) {
      this.stop();
      this.isPlaying = false;
    }
    return new Promise((resolve, reject) => {
      this.isPlaying = true; //Playback started
      this.getAudio().play(success => {
        if (success) {
          console.log(" [Sound.js] audio played successfully");
          resolve(true);
        } else {
          console.error(" [Sound.js] audio playback failed");
          reject("Playback Error");
        }
        // Playback ended status
        this.isPlaying = false;
      });
    });
  }
  getAudio() {
    return this.audio;
  }
  stop() {
    this.getAudio().stop();
  }
  //need to call it
  destroy() {
    this.getAudio().release();
  }
}
