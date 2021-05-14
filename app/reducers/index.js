import { combineReducers } from "redux";
import TasbeehReducer from "./TasbeehDataReducer";
import CounterReducer from "./CounterReducer";
const rootReducer = combineReducers({
  TasbeehReducer,
  CounterReducer
});

export default rootReducer;
