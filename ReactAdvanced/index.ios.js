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
  NavigatorIOS,
  Image,
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

      // <NavigatorIOS
      //   initialRoute={{
      //     component: MyScene,
      //     title: "My Initial Scene",
      //     passProps: { index: 1 }
      //   }}
      //   style={{ flex: 1 }} />

/* 2、图片*/
      // 静态图片
      // var icon = this.props.active
      //     ? require('./my-icon-active.png')
      //     : require('./my-icon-inactive.png');
      // <Image source={icon} />;

      // <Image source={{uri: 'app_icon'}} style={{width: 40, height: 40}} />


      // 网络图片
      // 这些时候，与静态资源不同的是，你需要手动指定图片的尺寸
      // <Image source={{uri: 'https://mobike.com/cn/logo.png'}}
      //        style={{width: 400, height: 400}} />

      // 你可以在 Image 组件的 source 属性中指定一些请求参数
      // <Image
      //   source={{
      //     uri: 'https://facebook.github.io/react/logo-og.png',
      //     method: 'POST',
      //     headers: {
      //       Pragma: 'no-cache',
      //     },
      //     body: 'Your Body goes here',
      //   }}
      //   style={{width: 400, height: 400}}/>

      // Uri 数据图片
      // 请记得指定宽高！
      // <Image
      //   style={{
      //     width: 51,
      //     height: 51,
      //     resizeMode: 'contain',
      //     flex: 1,
      //     flexDirection: 'column',
      //     justifyContent: 'center',
      //     alignItems: 'center',
      //   }}
      //   source={{
      //     uri:
      //       'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
      //   }}/>

      // 缓存控制（仅 iOS）
      /*
        default: 使用原生平台默认策略。
        reload: URL 的数据将从原始地址加载。不使用现有的缓存数据。
        force-cache: 现有的缓存数据将用于满足请求，忽略其期限或到期日。如果缓存中没有对应请求的数据，则从原始地址加载。
        only-if-cached: 现有的缓存数据将用于满足请求，忽略其期限或到期日。如果缓存中没有对应请求的数据，则不尝试从原始地址加载，并且认为请求是失败的。
      */
      <Image
        source={{
          uri: 'https://mobike.com/cn/logo.png',
          cache: 'only-if-cached',
        }}
        style={{width: 400, height: 400}}/>

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
