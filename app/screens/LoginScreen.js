import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, ListView } from "react-native";
import FacebookLogin from "../components/FacebookLogin";
import FBSDK, { LoginManager, AccessToken } from "react-native-fbsdk";

import { onSignIn } from "../../auth";
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.initUser = this.initUser.bind(this);
    this._facebookAuth = this._facebookAuth.bind(this);
  }
  _facebookAuth() {
    LoginManager.logInWithReadPermissions(["public_profile"]).then(
      result => {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            const { accessToken } = data;
            this.initUser(accessToken);
          });
        }
      },
      error => {
        alert("Login fail with error: " + error);
      }
    );
  }
  initUser(accessToken) {
    const navigation = this.props.navigation;
    onSignIn().then(() => navigation.navigate("SignedIn"));
    fetch(
      "https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=" +
        accessToken
    )
      .then(response => response.json())
      .then(json => {
        let user = {};
        // Some user object has been set up somewhere, build that user here
        user.name = json.name;
        user.id = json.id;
        user.user_friends = json.friends;
        user.email = json.email;
        user.username = json.name;
        user.loading = false;
        user.loggedIn = true;
        //  user.avatar = setAvatar(json.id);
        console.log(user);
      })
      .catch(error => {
        console.log(error);
        alert("ERROR GETTING DATA FROM FACEBOOK");
        //reject("ERROR GETTING DATA FROM FACEBOOK");
      });
  }
  render() {
    return (
      <View
        style={{
          backgroundColor: "#4DB6AC",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <FacebookLogin onPress={this._facebookAuth} />
      </View>
    );
  }
}
export default LoginScreen;
