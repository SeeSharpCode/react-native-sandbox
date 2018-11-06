import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';

const Square = props => (
  <TouchableWithoutFeedback onPress={props.onPress}>
    <View style={styles.square}>
      <Text style={styles.squareText}>{props.value}</Text>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  square: {
    borderWidth: 1,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  squareText: {
    fontSize: 22,
    fontWeight: 'bold'
  }
});

export default Square;
