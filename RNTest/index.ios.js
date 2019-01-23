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
  Image
} from 'react-native';

export default class RNTest extends Component {
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

/* 1.hello world*/
      //   <Text>
      //     Hello word!{'\n'}
      //     123
      //   </Text>
      // </View>

/* 2.props*/
      // let pic = {
      //   uri: 'https://mobike.com/cn/logo.png'
      // };
      // return (
      //   <Image source={pic} style={{width: 376, height: 160}} />
      // );
      // <View style={{alignItems: 'center'}}>
      //   <Greeting name='Rexxar' />
      //   <Greeting name='Jaina' />
      //   <Greeting name='Valeera' />
      // </View>

/* 3.state*/
      // <View>
      //   <Blink text='I love to blink' />
      //   <Blink text='Yes blinking is so great' />
      //   <Blink text='既往不拜' />
      //   <Blink text='纵情向团' />
      // </View>

/* 4.style*/
      // <View>
      //   <Text style={styles.red}>just red</Text>
      //   <Text style={styles.bigblue}>just bigblue</Text>
      //   <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
      //   <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      // </View>

/* 5.width，height*/
      // React Native 中的尺寸都是无单位的，表示的是与设备像素密度无关的逻辑像素点。
      // <View>
      //   <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      //   <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
      //   <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      // </View>
      /*
      // 试试去掉父View中的`flex: 1`。
      // 则父View不再具有尺寸，因此子组件也无法再撑开。
      // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
      */
      // <View style={{height:300}}>
      //   <View style={{flex:1, backgroundColor: 'powderblue'}} />
      //   <View style={{flex:2, backgroundColor: 'skyblue'}} />
      //   <View style={{flex:3, backgroundColor: 'steelblue'}} />
      // </View>

/* 7.使用Flexbox布局*/
      // 1.Flex Direction
      // 尝试把`flexDirection`改为`column`看看
      // 在组件的style中指定flexDirection可以决定布局的主轴。子元素是应该沿着水平轴(row)方向排列，还是沿着竖直轴(column)方向排列呢？默认值是竖直轴(column)方向。
      // <View style={{flex: 1, flexDirection: 'column'}}>
      //   <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      //   <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
      //   <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      // </View>
      // 2.Justify Content
      // 在组件的 style 中指定justifyContent可以决定其子元素沿着主轴的排列方式。子元素是应该靠近主轴的起始端还是末尾段分布呢？亦或应该均匀分布？对应的这些可选项有：flex-start、center、flex-end、space-around、space-between以及space-evenly。
      // 尝试把`justifyContent`改为`center`看看
      // 尝试把`flexDirection`改为`row`看看
      // <View style={{
      //   flex: 1,
      //   flexDirection: 'row',
      //   justifyContent: 'center',
      // }}>
      //   <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      //   <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
      //   <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      // </View>
      // 3.Align Items
      // 在组件的 style 中指定alignItems可以决定其子元素沿着次轴（与主轴垂直的轴，比如若主轴方向为row，则次轴方向为column）的排列方式。子元素是应该靠近次轴的起始端还是末尾段分布呢？亦或应该均匀分布？对应的这些可选项有：flex-start、center、flex-end以及stretch。
      // 尝试把`alignItems`改为`flex-start`看看
      // 尝试把`justifyContent`改为`flex-end`看看
      // 尝试把`flexDirection`改为`row`看看
      <View style={{
        flex: 1,
        // 主轴
        flexDirection: 'column',
        // 主轴排版
        justifyContent: 'flex-end',
        // 次轴排版
        alignItems: 'stretch',
      }}>
        <View style={{height: 50, backgroundColor: 'powderblue'}} />
        <View style={{height: 50,  backgroundColor: 'skyblue'}} />
        <View style={{height: 100,width:100,  backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}


class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

AppRegistry.registerComponent('RNTest', () => RNTest);
