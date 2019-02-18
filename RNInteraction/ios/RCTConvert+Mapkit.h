//
//  RCTConvert+Mapkit.h
//  RNInteraction
//
//  Created by 宝旭 on 2019/2/16.
//  Copyright © 2019 Facebook. All rights reserved.
//

//#import "RCTConvert.h"
#import <MapKit/MapKit.h>
#import <React/RCTConvert.h>
#import <CoreLocation/CoreLocation.h>
#import <React/RCTConvert+CoreLocation.h>

/**
 用 RCTConvert 实现的 MKCoordinateRegion。它使用了ReactNative中已经存在的 RCTConvert+CoreLocation:
 */

NS_ASSUME_NONNULL_BEGIN

@interface RCTConvert (Mapkit)

+ (MKCoordinateSpan)MKCoordinateSpan:(id)json;
+ (MKCoordinateRegion)MKCoordinateRegion:(id)json;

@end

NS_ASSUME_NONNULL_END
