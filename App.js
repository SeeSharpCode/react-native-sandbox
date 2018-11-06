import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/components/HomeScreen';
import Fundamentals from './src/components/Fundamentals';
import TicTacToe from './src/components/tic-tac-toe/TicTacToe';

const RootStack = createStackNavigator({
  HomeScreen,
  Fundamentals,
  TicTacToe
});

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
