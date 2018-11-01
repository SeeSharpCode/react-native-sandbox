import React, { Component } from 'react';
import { View, Switch, Text } from 'react-native';

export default class FlexDirection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flexDirection: 'row'
    };
  }

  render() {
    const { flexDirection } = this.state;
    return (
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
          <Text>Column  </Text>
          <Switch 
            value={flexDirection === 'row'}
            onValueChange={value => {
              this.setState({ flexDirection: value ? 'row' : 'column' });
            }} 
          />
          <Text>  Row</Text>
        </View>
        <View style={{ flexDirection, marginTop: 5 }}>
          <View style={{ width: 20, height: 20, backgroundColor: 'powderblue' }} />
          <View style={{ width: 20, height: 20, backgroundColor: 'skyblue' }} />
          <View style={{ width: 20, height: 20, backgroundColor: 'steelblue' }} />
        </View>
      </View>
    );
  }
}
