//
//  RCTConvert+Mapkit.m
//  RNInteraction
//
//  Created by 宝旭 on 2019/2/16.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "RCTConvert+Mapkit.h"

@implementation RCTConvert (Mapkit)

/**
 这些转换函数被设计为可以安全的处理任何 JS 扔过来的 JSON：当有任何缺少的键或者其它问题发生的时候，显示一个“红屏”的错误提示。
 */

+ (MKCoordinateSpan)MKCoordinateSpan:(id)json
{
  json = [self NSDictionary:json];
  return (MKCoordinateSpan){
    [self CLLocationDegrees:json[@"latitudeDelta"]],
    [self CLLocationDegrees:json[@"longitudeDelta"]]
  };
}

+ (MKCoordinateRegion)MKCoordinateRegion:(id)json
{
  return (MKCoordinateRegion){
    [self CLLocationCoordinate2D:json],
    [self MKCoordinateSpan:json]
  };
}

@end
