import React, {Component} from 'react';
import {View, Text} from 'react-native';
import BmiTableScreen from './src';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <BmiTableScreen />;
  }
}
