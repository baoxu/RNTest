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
    // <MapView style={{ flex: 1 }} />
    // 禁用捏放操作，我们只需要在 JS 里设置对应的属性：
    <MapView zoomEnabled={false} style={{flex: 1}} />


    );

  // var region = {
  //   latitude: 37.48,
  //   longitude: -122.16,
  //   latitudeDelta: 0.1,
  //   longitudeDelta: 0.1,
  // };
  // return (
  //   <MapView
  //     region={region}
  //     zoomEnabled={false}
  //     style={{ flex: 1 }} />
  // );

  }

  onRegionChange(event) {
    // Do stuff with event.region.latitude, etc.
    console.warn(event.region.latitude);
  }

  render() {
    var region = {
      latitude: 37.48,
      longitude: -122.16,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    };
    return (
      <MapView
        region={region}
        zoomEnabled={false}
        style={{ flex: 1 }}
        onRegionChange={this.onRegionChange} />
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

/**
  链接原生库
  https://reactnative.cn/docs/linking-libraries-ios/
*/

/**
  在iOS模拟器上运行
  https://reactnative.cn/docs/running-on-simulator-ios/
*/

/**
  iOS应用扩展
  https://reactnative.cn/docs/app-extensions/
*/


