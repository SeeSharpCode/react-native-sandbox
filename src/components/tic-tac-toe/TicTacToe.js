import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Square from './Square';

export default class TicTacToe extends Component {
  // eslint-disable-next-line
  static navigationOptions = {
    title: 'Tic Tac Toe'
  };

  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: 'X',
      squares: Array(9).fill(null),
      winner: ''
    };
  }

  /* eslint-disable */
  winningLines = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
  ];
  /* eslint-enable */

  onSquarePress(square) {
    const { squares, currentPlayer } = this.state;
    const newSquares = squares.slice();
    newSquares[square] = currentPlayer;

    if (this.checkForWinner(newSquares)) {
      this.setState({
        currentPlayer: '',
        winner: currentPlayer
      });
    }

    this.setState({ 
      squares: newSquares,
      currentPlayer: currentPlayer === 'X' ? 'O' : 'X'
    });
  }

  checkForWinner(squares) {
    return this.winningLines.find(line => line.every(i => squares[i] === squares[0]));
  }

  render() {
    const { row, gameBoard } = styles;
    const { squares } = this.state;
    return (
      <View style={gameBoard}>
        <Text>Winner: {this.state.winner}</Text>
        <View style={row}>
          <Square value={squares[0]} onPress={this.onSquarePress.bind(this, 0)} />
          <Square value={squares[1]} onPress={this.onSquarePress.bind(this, 1)} />
          <Square value={squares[2]} onPress={this.onSquarePress.bind(this, 2)} />
        </View>
        <View style={row}>
          <Square value={squares[3]} onPress={this.onSquarePress.bind(this, 3)} />
          <Square value={squares[4]} onPress={this.onSquarePress.bind(this, 4)} />
          <Square value={squares[5]} onPress={this.onSquarePress.bind(this, 5)} />
        </View>
        <View style={row}>
          <Square value={squares[6]} onPress={this.onSquarePress.bind(this, 6)} />
          <Square value={squares[7]} onPress={this.onSquarePress.bind(this, 7)} />
          <Square value={squares[8]} onPress={this.onSquarePress.bind(this, 8)} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gameBoard: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  row: {
    flexDirection: 'row'
  }
});
