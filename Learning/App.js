/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Picker } from 'react-native';

export default class OneTwoHelp extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        
        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
          <Picker.Item label="Male" value="m" />
          <Picker.Item label="Female" value="f" />
          <Picker.Item label="Unsure" value="u" />
        </Picker>

        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
          <Picker.Item label="Young" value="y" />
          <Picker.Item label="Adult" value="a" />
          <Picker.Item label="Elder" value="o" />
        </Picker>

        <TextInput
          style={{ height: 40 }}
          placeholder="Location"
        />

        <TextInput
          style={{ height: 40 }}
          placeholder="Additional information"
        />
      </View>
    );
  }
}
