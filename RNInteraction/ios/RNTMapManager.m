//
//  RNTMapManager.m
//  RNInteraction
//
//  Created by 宝旭 on 2019/1/31.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "RNTMapManager.h"
#import <MapKit/MapKit.h>
#import "RCTConvert+Mapkit.h"

/**
首先创建一个RCTViewManager的子类。
添加RCT_EXPORT_MODULE()宏标记。
实现-(UIView *)view方法。
*/

@implementation RNTMapManager

RCT_EXPORT_MODULE()
// 属性
RCT_EXPORT_VIEW_PROPERTY(zoomEnabled, BOOL)


/**
 这段代码比刚才的一个简单的BOOL要复杂的多了。现在我们多了一个需要做类型转换的MKCoordinateRegion类型，还添加了一部分自定义的代码，这样当我们在 JS 里改变地图的可视区域的时候，视角会平滑地移动过去。在我们提供的函数体内，json代表了 JS 中传递的尚未解析的原始值。函数里还有一个view变量，使得我们可以访问到对应的视图实例。最后，还有一个defaultView对象，这样当 JS 给我们发送 null 的时候，可以把视图的这个属性重置回默认值。
 */
RCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, MKMapView)
{
  [view setRegion:json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];
}


- (UIView *)view
{
  return [[MKMapView alloc] init];
}

@end
