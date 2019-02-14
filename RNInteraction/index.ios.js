/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NativeModules,
  NativeEventEmitter
} from 'react-native';

// MapView-对应->./MapView.js-对应->RNTMap-对应->RNTMapManager iOS类名
import MapView from './MapView.js';

export default class RNInteraction extends Component {
  render() {
  return (
    // 页面 全屏展示Map
    <MapView style={{ flex: 1 }} />
    // <MapView zoomEnabled={false} style={{flex: 1}} />;


    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RNInteraction', () => RNInteraction);
