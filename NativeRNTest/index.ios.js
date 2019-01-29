// index.js是 React Native 应用在 iOS 上的入口文件。而且它是不可或缺的！它可以是个很简单的文件，简单到可以只包含一行require/import导入语句。本教程中为了简单示范，把全部的代码都写到了index.js里（当然实际开发中我们并不推荐这样做）。

import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';


class RNHighScores extends React.Component {
  render() {
    var contents = this.props['scores'].map((score) => (
      <Text key={score.name}>
        {score.name}:{score.value}
        {'\n'}
      </Text>
    ));
    return (
      <View style={styles.container}>
        <Text style={styles.highScoresTitle}>2048 High Scores!</Text>
        <Text style={styles.scores}>{contents}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  highScoresTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  scores: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


// 整体js模块的名称
AppRegistry.registerComponent('NativeRNTest', () => NativeRNTest);