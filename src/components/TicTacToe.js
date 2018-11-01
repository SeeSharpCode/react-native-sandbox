import React, { Component } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';

export default class TicTacToe extends Component {
  static navigationOptions = {
    title: 'Tic Tac Toe'
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderRow() {
    return (
      <View style={styles.row}>
        <TouchableWithoutFeedback>
          <View style={styles.square} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.square} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.square} />
        </TouchableWithoutFeedback>
      </View>
    );
  }

  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        {this.renderRow()}
        {this.renderRow()}
        {this.renderRow()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  square: {
    height: 50,
    width: 50,
    borderWidth: 1,
  }
});
