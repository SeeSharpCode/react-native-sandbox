import React, { Component } from 'react';
import { View, Button } from 'react-native';
import Section from './Section';
import Props from './Props';
import Stateful from './Stateful';
import FlexDirection from './FlexDirection';
import JustifyContent from './JustifyContent';

export default class Fundamentals extends Component {
  static navigationOptions = {
    title: 'Fundamentals'
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ padding: 20 }}>
        <Section title="Props">
          <Props foo="Foo" />
        </Section>
        <Section title="State">
          <Stateful />
        </Section>
        <Section title="Flex Direction">
          <FlexDirection />
        </Section>
        <Section title="Justify Content">
          <JustifyContent />
        </Section>
      </View>
    );
  }
}
