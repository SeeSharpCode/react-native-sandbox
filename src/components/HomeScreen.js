import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ padding: 20, alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Demos</Text>
        <Button 
          title="Fundamentals" 
          onPress={() => this.props.navigation.navigate('Fundamentals')}
        />
        <Button 
          title="Tic Tac Toe" 
          onPress={() => this.props.navigation.navigate('TicTacToe')}
        />
      </View>
    );
  }
}
