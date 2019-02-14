//
//  CalendarManager.h
//  RNInteraction
//
//  Created by 宝旭 on 2019/1/31.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

NS_ASSUME_NONNULL_BEGIN
/*
 在 React Native 中，一个“原生模块”就是一个实现了“RCTBridgeModule”协议的 Objective-C 类，其中 RCT 是 ReaCT 的缩写。
 */
@interface CalendarManager : RCTEventEmitter <RCTBridgeModule>

@end

NS_ASSUME_NONNULL_END
