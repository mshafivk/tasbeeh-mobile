import * as types from "../constants/ActionTypes";

export function incrementCounter(currentCount, MAX_COUNT) {
  return {
    type: types.INCREMENT
  };
}

export function resetCounter(newDikr) {
  dispatch(updateDikrText(newDikr));
}
//need to update on reset counter
export function setSelectedDikr(selectedDikr) {
  return {
    type: types.UPDATE_DIKR,
    selectedDikr: selectedDikr
  };
}
