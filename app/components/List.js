/*Presentational Component for ListView StateLess*/
import React, { Component } from "react";
import { ListView, View, TouchableHighlight, Text } from "react-native";

import theme from "../styles/Theme";
import styles from "../styles/ListView";
import DefaultText from "./DefaultText";

const List = props => {
  let isLoaded = props.isLoaded;
  let listElement = props.isLoaded
    ? <View style={styles.container}>
        <ListView
          dataSource={props.listDataSource}
          enableEmptySections={true}
          renderRow={(rowData: string, sectionID: number, rowID: number) => (
            <TouchableHighlight
              underlayColor={theme.colors.underlayColor}
              onPress={props.onRowPress.bind(this, rowID)}
              activeOpacity={0.9}
            >
              <View style={styles.rowContainer}>
                <DefaultText style={styles.rowTitle}>
                  {`${rowData.title}`}
                </DefaultText>
                <DefaultText style={styles.badge}>
                  {`${rowData.totalCount}`}
                </DefaultText>
              </View>
            </TouchableHighlight>
          )}
          renderSeparator={(sectionId, rowId) => (
            <View key={rowId} style={styles.separator} />
          )}
        />
      </View>
    : <View style={styles.container}>
        <DefaultText>
          Loading
        </DefaultText>
      </View>;
  return listElement;
};
module.exports = List;
