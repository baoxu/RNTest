/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from "prop-types";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  Button,
  NavigatorIOS
} from 'react-native';

export default class ReactAdvanced extends Component {

  render() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Welcome to React Native!
      //   </Text>
      //   <Text style={styles.instructions}>
      //     To get started, edit index.ios.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     Press Cmd+R to reload,{'\n'}
      //     Cmd+D or shake for dev menu
      //   </Text>
      // </View>

/* 1、导航跳转*/
    /*  
     其中要渲染的组件在路由对象的component字段中指定，
     要给目标组件传递的参数则写在passProps中。
     被渲染的 component 都会自动接受到一个名为navigator的属性，
     你可以直接调用此对象(this.props.navigator)的push和pop方法。
    */

      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: "My Initial Scene",
          passProps: { index: 1 }
        }}
        style={{ flex: 1 }} />

    );
  }
}


class MyScene extends Component {
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
    navigator: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
  }

  _onForward() {
    let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: MyScene,
      title: "Scene " + nextIndex,
      passProps: { index: nextIndex }
    });
  }

  render() {
    return (
      <View style={styles.buttonContainer}>
        <Text>Current Scene: {this.props.title}</Text>
        <Button
          onPress={this._onForward}
          title="Tap me to load the next scene" />
      </View>
    );
  }
}

const majorVersionIOS = parseInt(Platform.Version, 10);
if (majorVersionIOS <= 9) {
  console.log("Work around a change in behavior");
}
      

const styles = StyleSheet.create({
  height: Platform.OS === "ios" ? 200 : 100,

  container: {
    flex: 1,

    ...Platform.select({
      ios: {
        backgroundColor: '#b1f1f1',
      },
      android: {
        backgroundColor: '#f4f4f4',
      }
    }),
 

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#F1FCFF',
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

AppRegistry.registerComponent('ReactAdvanced', () => ReactAdvanced);
