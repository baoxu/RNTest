// import PropTypes from 'prop-types';	// 这里不能放开，只要放开就报错，"Unable to resolve module `prop-types` from `/Users/……/MapView.js` 这个问题太困扰了，版本问题？可是改了版本又会有一大堆其他问题，崩溃了
// import React from 'react';
import {requireNativeComponent} from 'react-native';


// requireNativeComponent 自动把'RNTMap'解析为'RNTMapManager'
export default requireNativeComponent('RNTMap', null);


// class MapView extends React.Component {
//   render() {
//     return <RNTMap {...this.props} />;
//   }

  // _onRegionChange = (event) => {
  //   if (!this.props.onRegionChange) {
  //     return;
  //   }

  //   // process raw event...
  //   this.props.onRegionChange(event.nativeEvent);
  // }
  // render() {
  //   return (
  //     <RNTMap
  //       {...this.props}
  //       onRegionChange={this._onRegionChange} />
  //   );
  // }

// }


// MapView.propTypes = {
//   /**
//    * A Boolean value that determines whether the user may use pinch
//    * gestures to zoom in and out of the map.
//    */
//   zoomEnabled: PropTypes.bool,

//   /**
//    * 地图要显示的区域。
//    *
//    * 区域由中心点坐标和区域范围坐标来定义。
//    *
//    */
//   region: PropTypes.shape({
//     /**
//      * 地图中心点的坐标。
//      */
//     latitude: PropTypes.number.isRequired,
//     longitude: PropTypes.number.isRequired,

//     /**
//      * 最小/最大经、纬度间的距离。
//      *
//      */
//     latitudeDelta: PropTypes.number.isRequired,
//     longitudeDelta: PropTypes.number.isRequired,
//   }),

  /**
   * Callback that is called continuously when the user is dragging the map.
   */
  // onRegionChange: PropTypes.func,
  // ...

// };

//有时候你的原生组件有一些特殊的属性希望导出，但并不希望它成为公开的接口。举个例子，Switch组件可能会有一个onChange属性用来传递原始的原生事件，然后导出一个onValueChange属性，这个属性在调用的时候会带上Switch的状态作为参数之一。这样的话你可能不希望原生专用的属性出现在 API 之中，也就不希望把它放到propTypes里。可是如果你不放的话，又会出现一个报错。解决方案就是带上额外的nativeOnly参数，像这样：

// var RCTSwitch = requireNativeComponent('RCTSwitch', Switch, {
//   nativeOnly: {onChange: true},
// });

// var RNTMap = requireNativeComponent('RNTMap', MapView);

// export default MapView;