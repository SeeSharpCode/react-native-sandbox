import React, { Component } from 'react';
import { View, Picker } from 'react-native';

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      justifyContent: 'center'
    };
  }

  render() {
    return (
      <View>
        <Picker
          selectedValue={this.state.justifyContent}
          onValueChange={value => this.setState({ justifyContent: value })}
        >
          <Picker.Item label="flex-start" value="flex-start" />
          <Picker.Item label="flex-end" value="flex-end" />
          <Picker.Item label="center" value="center" />
          <Picker.Item label="space-around" value="space-around" />
          <Picker.Item label="space-between" value="space-between" />
          <Picker.Item label="space-evenly" value="space-evenly" />
        </Picker>
        <View style={{ flexDirection: 'row', justifyContent: this.state.justifyContent, borderWidth: 1 }}>
          <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
          <View style={{ width: 20, height: 20, backgroundColor: 'skyblue' }} />
          <View style={{ width: 20, height: 20, backgroundColor: 'steelblue' }} />
        </View>
      </View>
    );
  }
}

