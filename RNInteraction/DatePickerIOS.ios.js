/**

样式
因为我们所有的视图都是UIView的子类，大部分的样式属性应该直接就可以生效。但有一部分组件会希望使用自己定义的默认样式，例如UIDatePicker希望自己的大小是固定的。这个默认属性对于布局算法的正常工作来说很重要，但我们也希望在使用这个组件的时候可以覆盖这些默认的样式。DatePickerIOS实现这个功能的办法是通过封装一个拥有弹性样式的额外视图，然后在内层的视图上应用一个固定样式（通过原生传递来的常数生成）：

// DatePickerIOS.ios.js

import { UIManager } from 'react-native';
var RCTDatePickerIOSConsts = UIManager.RCTDatePicker.Constants;
...
  render: function() {
    return (
      <View style={this.props.style}>
        <RCTDatePickerIOS
          ref={DATEPICKER}
          style={styles.rkDatePickerIOS}
          ...
        />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  rkDatePickerIOS: {
    height: RCTDatePickerIOSConsts.ComponentHeight,
    width: RCTDatePickerIOSConsts.ComponentWidth,
  },
});
常量RCTDatePickerIOSConsts在原生代码中导出，从一个组件的实际布局上获取到：

// RCTDatePickerManager.m

- (NSDictionary *)constantsToExport
{
  UIDatePicker *dp = [[UIDatePicker alloc] init];
  [dp layoutIfNeeded];

  return @{
    @"ComponentHeight": @(CGRectGetHeight(dp.frame)),
    @"ComponentWidth": @(CGRectGetWidth(dp.frame)),
    @"DatePickerModes": @{
      @"time": @(UIDatePickerModeTime),
      @"date": @(UIDatePickerModeDate),
      @"datetime": @(UIDatePickerModeDateAndTime),
    }
  };
}
*/