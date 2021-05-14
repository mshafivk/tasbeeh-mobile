import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
  LIST_ITEM_SELECTED,
  UPDATE_DIKR_COUNT
} from "../constants/ActionTypes";
const initialState = {
  tasbeehList: [],
  isFetching: false,
  error: false
};

export default function TasbeehDataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        tasbeehList: [],
        selectedRowID: null,
        isFetching: true
      };
      break;
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        selectedRowID: action.data.selectedRowID,
        tasbeehList: action.data.result
      };
      break;
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        selectedRowID: null,
        error: true
      };
      break;
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        selectedRowID: action.selectedRowID
      };
      break;
    case LIST_ITEM_SELECTED:
      return {
        ...state,
        selectedRowID: action.selectedRowID
      };
      break;
    case UPDATE_DIKR_COUNT:
      let rowID = action.rowID;
      let tasbeehList = state.tasbeehList;
      if (
        typeof rowID !== "undefined" &&
        rowID != null &&
        rowID >= 0 &&
        tasbeehList[rowID] !== undefined
      ) {
        tasbeehList[rowID].currentCount = action.currentCount;
        tasbeehList[rowID].totalCount += action.activeCount;
      }
      return {
        ...state,
        tasbeehList: tasbeehList
      };
    default:
      return state;
  }
}
