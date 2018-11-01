import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Stateful extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: 'Initial State'
    };
  }

  render() {
    return (
      <View style={{ justifyContent: 'flex-end' }}>
        <Text>{this.state.foo}</Text>
        <Button 
          title="Change State"
          style={{ width: 5 }}
          onPress={() => {
            this.setState({ foo: new Date().toString() });
          }}
        /> 
      </View>
    );
  }
}
