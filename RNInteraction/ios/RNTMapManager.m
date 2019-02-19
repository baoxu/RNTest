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
#import "RNTMapView.h"

#import <React/RCTRootView.h>
#import <React/RCTBridge.h>
#import <React/RCTRootViewDelegate.h>
#import <React/RCTViewManager.h>
#import "AppDelegate.h"

/**
首先创建一个RCTViewManager的子类。
添加RCT_EXPORT_MODULE()宏标记。
实现-(UIView *)view方法。
*/


/**
 需要注意的是，所有 RCTBubblingEventBlock 必须以 on 开头。然后在 RNTMapManager上声明一个事件处理函数属性，将其作为所暴露出来的所有视图的委托，并调用本地视图的事件处理将事件转发至JS。
 */
@interface RNTMapManager ()<MKMapViewDelegate>

@end

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
  RNTMapView *map = [RNTMapView new];
  map.delegate = self;
  
  NSArray *imageList = @[@"http://foo.com/bar1.png",
                         @"http://foo.com/bar2.png"];
  
  NSDictionary *props = @{@"images" : imageList};
  
  AppDelegate *appDelegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:appDelegate.bridge
                                                   moduleName:@"ImageBrowserApp"
                                            initialProperties:props];
  
  return map;
}


#pragma mark MKMapViewDelegate

- (void)mapView:(RNTMapView *)mapView regionDidChangeAnimated:(BOOL)animated
{
  if (!mapView.onRegionChange) {
    return;
  }
  
  MKCoordinateRegion region = mapView.region;
  mapView.onRegionChange(@{
                           @"region": @{
                               @"latitude": @(region.center.latitude),
                               @"longitude": @(region.center.longitude),
                               @"latitudeDelta": @(region.span.latitudeDelta),
                               @"longitudeDelta": @(region.span.longitudeDelta),
                               }
                           });
}

/**
 在委托方法-mapView:regionDidChangeAnimated:中，根据对应的视图调用事件处理函数并传递区域数据。调用onRegionChange事件会触发 JavaScript 端的同名回调函数。这个回调会传递原生事件对象，然后我们通常都会在封装组件里来处理这个对象，以使 API 更简明：
 */

@end
