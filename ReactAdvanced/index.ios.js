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
  Animated,
  LayoutAnimation,
  NativeModules,
  TouchableOpacity,

  findNodeHandle,
  TouchableWithoutFeedback

} from 'react-native';

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class ReactAdvanced extends Component {

  state = {
    w: 100,
    h: 100,
  };

  _onPress = () => {
    // Animate the update
    LayoutAnimation.spring();
    this.setState({w: this.state.w + 15, h: this.state.h + 15})
  }

  constructor(props) {
    super(props);
    this.state = { myButtonOpacity: 1, };
  }

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
      // <Image
      //   source={{
      //     uri: 'https://mobike.com/cn/logo.png',
      //     cache: 'only-if-cached',
      //   }}
      //   style={{width: 400, height: 400}}/>
/* 3、动画*/
      // Animated
      // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      //   <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
      //     <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
      //   </FadeInView>
      // </View>
      // https://reactnative.cn/docs/animations/
      // 配置动画
      // Animated.timing(this.state.xPosition, {
      //   toValue: 100,
      //   easing: Easing.back(),
      //   duration: 2000
      // }).start();
      
      // 组合动画
      // Animated.sequence([
      //   // decay, then spring to start and twirl
      //   Animated.decay(position, {
      //     // coast to a stop
      //     velocity: { x: gestureState.vx, y: gestureState.vy }, // velocity from gesture release
      //     deceleration: 0.997
      //   }),
      //   Animated.parallel([
      //     // after decay, in parallel:
      //     Animated.spring(position, {
      //       toValue: { x: 0, y: 0 } // return to start
      //     }),
      //     Animated.timing(twirl, {
      //       // and twirl
      //       toValue: 360
      //     })
      //   ])
      // ]).start(); // start the sequence group

      // 合成动画值
      // const a = new Animated.Value(1);
      // const b = Animated.divide(1, a);

      // Animated.spring(a, {
      //   toValue: 2
      // }).start();
      // 插值
      // 跟踪动态值
      // 跟踪手势
      // 响应当前的动画值
      // 启用原生动画驱动

      // LayoutAnimation API

      // <View style={styles.container}>
      //   <View style={[styles.box, {width: this.state.w, height: this.state.h}]} />
      //   <TouchableOpacity onPress={this._onPress}>
      //     <View style={styles.button}>
      //       <Text style={styles.buttonText}>Press me!</Text>
      //     </View>
      //   </TouchableOpacity>
      // </View>

/* 4、无障碍功能*/
      // https://reactnative.cn/docs/accessibility/
      // <TouchableOpacity
      //   accessible={true}
      //   accessibilityLabel="返回"
      //   accessibilityHint="返回到上一个页面"
      //   onPress={this._onPress}>
      //   <View style={styles.button}>
      //     <Text style={styles.buttonText}>Back</Text>
      //   </View>
      // </TouchableOpacity>

/* 5、改进用户体验*/

/* 6、定时器*/
      // <View style={styles.container}>
      //   <View style={[styles.box, {width: this.state.w, height: this.state.h}]} />
      // </View>

/* 11、直接操作*/
      // <TouchableOpacity onPress={this._handlePress}>
      //   <View style={styles.button}>
      //     <Text style={styles.buttonText}>Press me!</Text>
      //   </View>
      // </TouchableOpacity>
      // <TouchableOpacity onPress={() => this.setState({myButtonOpacity: 0.5})}
      //                   onPressOut={() => this.setState({myButtonOpacity: 1})}>
      //   <View style={[styles.button, {opacity: this.state.myButtonOpacity}]}>
      //     <Text>Press me!</Text>
      //   </View>
      // </TouchableOpacity>
      // <TouchableOpacity>
      //   <MyButton label="Press me!" />
      // </TouchableOpacity>

/* 12、颜色*/
    // https://reactnative.cn/docs/colors/
/* 13、集成到现有原生应用*/


    );
  }
      // 在unmount组件时清除（clearTimeout/clearInterval）所有用到的定时器
    componentDidMount() {
      this.timer = setTimeout(() => {
        // this._onPress();
/* 7、调试*/
// https://reactnative.cn/docs/debugging/
        // 红屏错误
        // console.error();
        // 黄屏警告
        // console.warn('YellowBox is disabled.');
        // 关闭警告⚠️
        // console.disableYellowBox = true;
        // YellowBox.ignoreWarnings(['Warning: ...']);
        // 在 iOS 模拟器的菜单中选择Debug → Open System Log...
        console.log("把一个定时器的引用挂在this上");

      }, 500);
    }
    componentWillUnmount() {
      // 请注意Un"m"ount的m是小写

      // 如果存在this.timer，则使用clearTimeout清空。
      // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
      this.timer && clearTimeout(this.timer);
    }
/* 8、性能*/
      // https://reactnative.cn/docs/performance/

/* 9、手势响应系统*/
      // https://reactnative.cn/docs/gesture-responder-system/

/* 10、JavaScript环境*/
      // https://reactnative.cn/docs/javascript-environment/

}


class MyButton extends Component {
  setNativeProps = (nativeProps) => {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    return (
      <View ref={component => this._root = component} {...this.props}>
        <Text>{this.props.label}</Text>
      </View>
    )
  }
}


class FadeInView extends Component {

  state = {
    fadeAnim: new Animated.Value(0), // 透明度初始值设为0
  }

  componentDidMount() {
    Animated.timing(                // 随时间变化而执行动画
      this.state.fadeAnim,          // 动画中的变量值
      {
        toValue: 1,                 // 透明度最终变为1，即完全不透明
        duration: 10000,            // 让动画持续一段时间
      }

    ).start();                      // 开始执行动画
  }

  render() {
    let { fadeAnim } = this.state;
    return (
      <Animated.View                // 使用专门的可动画化的View组件
        style={{
          ...this.props.style,
          opacity: fadeAnim,        // 将透明度指定为动画变量值

        }}
      >
        {this.props.children}
      </Animated.View>

    )
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

  // container: {
  //   flex: 1,

  //   ...Platform.select({
  //     ios: {
  //       backgroundColor: '#b1f1f1',
  //     },
  //     android: {
  //       backgroundColor: '#f4f4f4',
  //     }
  //   }),
 

  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
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
