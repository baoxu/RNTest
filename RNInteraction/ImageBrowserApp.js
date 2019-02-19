import React from 'react';
import {
  AppRegistry,
  View,
  Image
} from 'react-native';

class ImageBrowserApp extends React.Component {
  renderImage(imgURI) {
    return (
      <Image source={{uri: imgURI}} />
    );
  }
  render() {
    return (
      <View>
        {this.props.images.map(this.renderImage)}
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => ImageBrowserApp);