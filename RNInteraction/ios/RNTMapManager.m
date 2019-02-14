//
//  RNTMapManager.m
//  RNInteraction
//
//  Created by 宝旭 on 2019/1/31.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "RNTMapManager.h"
#import <MapKit/MapKit.h>

/**
首先创建一个RCTViewManager的子类。
添加RCT_EXPORT_MODULE()宏标记。
实现-(UIView *)view方法。
*/

@implementation RNTMapManager

RCT_EXPORT_MODULE()
// 属性
RCT_EXPORT_VIEW_PROPERTY(zoomEnabled, BOOL)

- (UIView *)view
{
  return [[MKMapView alloc] init];
}

@end
