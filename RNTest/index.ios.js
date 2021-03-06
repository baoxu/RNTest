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
    Image,
    TextInput,
    Button,
    Alert,
    ScrollView,
    FlatList,
    SectionList,
    ActivityIndicator
} from 'react-native';

export default class RNTest extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {text: ''};
  // }

  // _onPressButton() {
  //   Alert.alert('You tapped the button!')
  // }

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });

      // 使用其他的网络库
      // var request = new XMLHttpRequest();
      // request.onreadystatechange = e => {
      //   if (request.readyState !== 4) {
      //     return;
      //   }

      //   if (request.status === 200) {
      //     console.log("success", request.responseText);

      //     this.setState({
      //       isLoading: false,
      //       dataSource: responseJson.movies,
      //     }, function(){

      //     });
      //   } else {
      //     console.warn("error");
                 
      //     console.error("error");
      //   }
      // };

      // request.open("GET", "https://mywebsite.com/endpoint/");
      // request.send();
      
      // WebSocket 支持
      // var ws = new WebSocket("ws://host.com/path");

      // ws.onopen = () => {
      //   // connection opened
      //   ws.send("something"); // send a message
      // };

      // ws.onmessage = e => {
      //   // a message was received
      //   console.log(e.data);
      // };

      // ws.onerror = e => {
      //   // an error occurred
      //   console.log(e.message);
      // };

      // ws.onclose = e => {
      //   // connection closed
      //   console.log(e.code, e.reason);
      // };
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
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
      // <View style={{
      //   flex: 1,
      //   // 主轴
      //   flexDirection: 'column',
      //   // 主轴排版
      //   justifyContent: 'flex-end',
      //   // 次轴排版
      //   alignItems: 'stretch',
      // }}>
      //   <View style={{height: 50, backgroundColor: 'powderblue'}} />
      //   <View style={{height: 50,  backgroundColor: 'skyblue'}} />
      //   <View style={{height: 100,width:100,  backgroundColor: 'steelblue'}} />
      // </View>
/* 8.处理文本输入*/
      // <View style={{padding: 10}}>
      //   <TextInput
      //     style={{height:40}}
      //     placeholder='Tpye here to translate!'
      //     onChangeText={(text)=>this.setState({text})} />
        

      //   <Text style={{padding:10,fontSize:42}}>
      //     {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
      //   </Text>
      // </View>
/* 9.处理触摸事件*/
    // <View>
    //   <Button
    //     onPress={() => {
    //       Alert.alert("你点击了按钮！");
    //     }}
    //     title="点我！"
    //   />
    // </View>
    // <View style={styles.container}>
    //     <View style={styles.buttonContainer}>
    //       <Button
    //         onPress={this._onPressButton}
    //         title="Press Me"
    //       />
    //     </View>
    //     <View style={styles.buttonContainer}>
    //       <Button
    //         onPress={this._onPressButton}
    //         title="Press Me"
    //         color="#841584"
    //       />
    //     </View>
    //     <View style={styles.alternativeLayoutButtonContainer}>
    //       <Button
    //         onPress={this._onPressButton}
    //         title="This looks great!"
    //       />
    //       <Button
    //         onPress={this._onPressButton}
    //         title="OK!"
    //         color="#841584"
    //       />
    //     </View>
    //   </View>
/* 10.使用滚动视图*/
      // <ScrollView>
      //     <Text style={{fontSize:96}}>Scroll me plz</Text>
      //     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
      //     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
      //     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
      //     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
      //     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
      //     <Text style={{fontSize:96}}>If you like</Text>
      //     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
      //     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
      //     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
      //     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
      //     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
      //     <Text style={{fontSize:96}}>Scrolling down</Text>
      //     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
      //     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
      //     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
      //     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
      //     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
      //     <Text style={{fontSize:96}}>What's the best</Text>
      //     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
      //     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
      //     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
      //     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
      //     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
      //     <Text style={{fontSize:96}}>Framework around?</Text>
      //     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
      //     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
      //     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
      //     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
      //     <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
      //     <Text style={{fontSize:80}}>React Native</Text>
      // </ScrollView>
/* 11.使用长列表*/
      // <View style={styles.container}>
      //   <FlatList
      //     data={[
      //       {key: 'Devin'},
      //       {key: 'Jackson'},
      //       {key: 'James'},
      //       {key: 'Joel'},
      //       {key: 'John'},
      //       {key: 'Jillian'},
      //       {key: 'Jimmy'},
      //       {key: 'Julie'},
      //     ]}
      //     renderItem = {({item}) => <Text style={styles.item}>{item.key}</Text>}
      //   />
      // </View>

      // <View style={styles.container}>
      //   <SectionList
      //     sections={[
      //       {title: 'D', data: ['Devin']},
      //       {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
      //     ]}
      //     renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
      //     renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
      //     keyExtractor={(item, index) => index}
      //   />
      // </View>

/* 12.网络*/
      // fetch("https://mywebsite.com/mydata.json");
      // fetch("https://mywebsite.com/endpoint/", {
      //   method: "POST",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify({
      //     firstParam: "yourValue",
      //     secondParam: "yourOtherValue"
      //   })
      // });
      // fetch("https://mywebsite.com/endpoint/", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/x-www-form-urlencoded"
      //   },
      //   body: "key1=value1&key2=value2"
      // });

      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={(item, index) => item.id}
        />
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
  // bigblue: {
  //   color: 'blue',
  //   fontWeight: 'bold',
  //   fontSize: 30,
  // },
  // red: {
  //   color: 'red',
  // },

  // container: {
  //  flex: 1,
  //  justifyContent: 'center',
  // },
  // buttonContainer: {
  //   margin: 20
  // },
  // alternativeLayoutButtonContainer: {
  //   margin: 20,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between'
  // }
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

AppRegistry.registerComponent('RNTest', () => RNTest);
