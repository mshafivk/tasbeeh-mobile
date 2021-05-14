import * as ACTION_TYPES from "../constants/ActionTypes";
import { AppConfig } from "../utils/Config";
const initialState = {
  currentCount: 0,
  dikrText: AppConfig.DEFAULT_DIKR,
  error: false,
  MAX_COUNT: 33,
  fill: 0,
  activeCount: 0 //Will help to update the totalCount in the list -
  //(listItemTotalCount = listItemTotalCount+activeCount)
};

export default function CounterReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      //i have a doubt whether this is an antipattern
      //reducer is supposed to be pure funtion so resetting currentCount should be a different action - need to refactor
      let currentCount = state.currentCount + 1 > 33
        ? 0
        : state.currentCount + 1;
      return {
        ...state,
        activeCount: state.activeCount + 1,
        currentCount: currentCount,
        fill: currentCount / state.MAX_COUNT * 100 //fill is in percentage
      };
    case ACTION_TYPES.UPDATE_DIKR:
      return {
        ...state,
        activeCount: 0,
        dikrText: action.selectedDikr.arabicTitle,
        currentCount: action.selectedDikr.currentCount,
        fill: action.selectedDikr.currentCount / state.MAX_COUNT * 100
      };
    default:
      return state;
  }
}
