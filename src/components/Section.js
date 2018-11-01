import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Section = props => (
  <View style={styles.containerStyle}>
    <Text style={styles.titleText}>{props.title}</Text>
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: '500'
  },
  containerStyle: {
    borderBottomWidth: 1,
    paddingVertical: 10
  }
});

export default Section;
