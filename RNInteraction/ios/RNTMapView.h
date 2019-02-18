//
//  RNTMapView.h
//  RNInteraction
//
//  Created by 宝旭 on 2019/2/18.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <MapKit/MapKit.h>
#import <React/RCTComponent.h>

NS_ASSUME_NONNULL_BEGIN
/**
 我们从manager的 -(UIView *)view 方法返回了 MKMapView 实例。我们没法直接为 MKMapView 添加新的属性，所以我们只能创建一个 MKMapView 的子类用于我们自己的视图中。我们可以在这个子类中添加 onRegionChange 回调方法：
 */
@interface RNTMapView : MKMapView

@property (nonatomic, copy) RCTBubblingEventBlock onRegionChange;

@end

NS_ASSUME_NONNULL_END
