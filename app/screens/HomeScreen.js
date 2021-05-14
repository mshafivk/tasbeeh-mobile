import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, ListView } from "react-native";

import _ from "lodash";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/SimpleLineIcons";

import TasbeehCounter from "../containers/TasbeehCounter";
import SummaryListView from "../containers/SummaryListView";
import theme from "../styles/Theme";
import styles from "../styles/Styles";
import { AppConfig } from "../utils/Config";

const { appContainer } = styles;
import { connect } from "react-redux";
import {
  fetchTasbeehDataFromAPI,
  updateSelection,
  updateListItemCounts
} from "../actions/Actions";

import { incrementCounter, setSelectedDikr } from "../actions/CounterActions";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.onListItemChanged = this.onListItemChanged.bind(this);
    this.updateListItemTotal = this.updateListItemTotal.bind(this);
    this.onCounterPress = this.onCounterPress.bind(this);
  }
  static navigationOptions = {
    tabBarLabel: "Home",

    tabBarIcon: ({ tintColor }) => (
      <Icon name="clock" size={24} style={[{ color: tintColor }]} />
    )
  };
  componentDidMount() {
    //call fetch request
    this.props.getTasbeehList();
  }
  onListItemChanged(rowID) {
    if (rowID === this.props.tasbeehProps.selectedRowID) {
      return;
    }
    let selectedDikr = Object.assign(
      {},
      this.props.tasbeehProps.tasbeehList[rowID]
    );
    //updates the total Count of current Dikr before making new selection
    this.updateListItemTotal();
    this.props.updateSelection(rowID);
    this.props.setSelectedDikr(selectedDikr);
  }
  updateListItemTotal() {
    let selectedRowID = this.props.tasbeehProps.selectedRowID;
    let activeCount = this.props.counterData.activeCount;
    let currentCount = this.props.counterData.currentCount;
    this.props.updateListItemCounts(selectedRowID, activeCount, currentCount);
  }
  onCounterPress() {
    this.props.incrementCounter();
  }
  render() {
    const { tasbeehList, isFetching } = this.props.tasbeehProps;
    //console.log(tasbeehData);
    return (
      <View style={[appContainer]}>
        <TasbeehCounter
          {...this.props.counterData}
          onCounterPress={this.onCounterPress}
          style={{ backgroundColor: "#E0F2F1" }}
        />
        <SummaryListView
          selectedId={this.props.selectedItemID}
          onListItemChanged={this.onListItemChanged}
          tasbeehDataSource={tasbeehList}
          listLoaded={!isFetching}
        />
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    tasbeehProps: state.TasbeehReducer,
    counterData: state.CounterReducer
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getTasbeehList: () => dispatch(fetchTasbeehDataFromAPI()),
    updateSelection: newSelection => dispatch(updateSelection(newSelection)),
    incrementCounter: currentCount => dispatch(incrementCounter(currentCount)),
    setSelectedDikr: selectedDikr => dispatch(setSelectedDikr(selectedDikr)),
    updateListItemCounts: (rowID, activeCount, currentCount) =>
      dispatch(updateListItemCounts(rowID, activeCount, currentCount))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
