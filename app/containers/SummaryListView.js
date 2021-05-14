import React, { Component } from "react";
import {
  StyleSheet,
  ListView,
  View,
  TouchableHighlight,
  Text
} from "react-native";
import { AppConfig } from "../utils/Config";
import List from "../components/List";
import DefaultText from "../components/DefaultText";

import theme from "../styles/Theme";
import styles from "../styles/ListView";
class SummaryListView extends React.Component {
  constructor(props) {
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => {
        if (r1.totalCount && r2.totalCount && r1.totalCount !== r2.totalCount) {
          return true;
        }
        return r1 !== r2;
      }
    });
    super(props);
    this.state = {
      listDataSource: ds.cloneWithRows(props.tasbeehDataSource),
      listLoaded: props.listLoaded
    };
  }
  componentWillReceiveProps(nextProps) {
    //Workaround for listDatasource update issue
    let newDS = [];
    newDS = nextProps.tasbeehDataSource;
    let tempArray = [];
    for (let i = 0; i < newDS.length; i++) {
      let newOBJ = Object.assign({}, newDS[i]);
      tempArray.push(newOBJ);
    }
    this.setState({
      listLoaded: nextProps.listLoaded,
      listDataSource: this.state.listDataSource.cloneWithRows(tempArray)
    });
  }
  _pressRow(rowID: number) {
    this.props.onListItemChanged(rowID);
  }
  render() {
    let element = (
      <List
        onRowPress={this._pressRow.bind(this)}
        listDataSource={this.state.listDataSource}
        isLoaded={this.state.listLoaded}
      />
    );
    return element;
  }
}

export default SummaryListView;
