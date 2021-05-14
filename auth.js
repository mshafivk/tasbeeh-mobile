import { AsyncStorage } from "react-native";

export const USER_KEY = "auth-demo-key";

export const onSignIn = () => {
  console.log("ON SIGNIN");
  return new Promise((resolve, reject) => {
    AsyncStorage.setItem(USER_KEY, "true")
      .then(() => {
        resolve();
      })
      .catch(err => reject(err));
  });
};

export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};
