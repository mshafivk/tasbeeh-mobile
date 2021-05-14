import { createStore, applyMiddleware } from "redux";
import app from "../reducers";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
let middlewares = [thunk];

if (__DEV__ === true) {
  middlewares.push(createLogger({}));
}
export default function configureStore() {
  let store = createStore(app, applyMiddleware(...middlewares));
  return store;
}
