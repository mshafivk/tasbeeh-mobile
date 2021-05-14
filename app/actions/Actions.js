import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
  LIST_ITEM_SELECTED,
  UPDATE_DIKR_COUNT
} from "../constants/ActionTypes";
import { API_HOST, API_FORMATS } from "../utils/Config";
import FetchApi from "../utils/FetchApi";

//const API_CONFIG = config.API_CONFIG;

const apiOptions = {
  url: API_HOST + "getTasbeehList",
  responseFormat: API_FORMATS.JSON
};
export function getTasbeehData() {
  return {
    type: FETCHING_DATA
  };
}

export function getTasbeehDataSuccess(data) {
  return {
    type: FETCHING_DATA_SUCCESS,
    data
  };
}

export function getTasbeehDataFailure(error) {
  return {
    type: FETCHING_DATA_FAILURE,
    error
  };
}
export function fetchTasbeehDataFromAPI() {
  return dispatch => {
    dispatch(getTasbeehData());
    FetchApi.get(apiOptions)
      .then(responseData => {
        let formattedData = responseData.tasbeehList;
        //Need to update later to fetch actual total count from Service
        for (let i = 0; i < formattedData.length; i++) {
          formattedData[i].totalCount = 0;
          formattedData[i].currentCount = 0;
        }
        let result = {
          result: formattedData.slice(),
          selectedRowID: 0
        };
        dispatch(getTasbeehDataSuccess(result));
      })
      .catch(err => {
        console.log("error", err);
        dispatch(getTasbeehDataFailure(err));
      });
  };
}

export function updateSelection(selectedRowID) {
  return {
    type: LIST_ITEM_SELECTED,
    selectedRowID
  };
}

export function updateListItemCounts(rowID, activeCount, currentCount) {
  return {
    type: UPDATE_DIKR_COUNT,
    activeCount: activeCount,
    currentCount: currentCount,
    rowID: rowID
  };
}
