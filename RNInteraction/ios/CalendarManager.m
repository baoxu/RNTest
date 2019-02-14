//
//  CalendarManager.m
//  RNInteraction
//
//  Created by 宝旭 on 2019/1/31.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "CalendarManager.h"
#import <React/RCTLog.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@implementation CalendarManager
{
  bool hasListeners;
}


/**
 为了实现RCTBridgeModule协议，你的类需要包含RCT_EXPORT_MODULE()宏。这个宏也可以添加一个参数用来指定在 JavaScript 中访问这个模块的名字。如果你不指定，默认就会使用这个 Objective-C 类的名字。如果类名以 RCT 开头，则 JavaScript 端引入的模块名会自动移除这个前缀。
 */
RCT_EXPORT_MODULE();

/**
 你必须明确的声明要给 JavaScript 导出的方法，否则 React Native 不会导出任何方法。声明通过RCT_EXPORT_METHOD()宏来实现：
 
 RCT_EXPORT_METHOD 支持所有标准 JSON 类型，包括：
 
 string (NSString)
 number (NSInteger, float, double, CGFloat, NSNumber)
 boolean (BOOL, NSNumber)
 array (NSArray) 可包含本列表中任意类型
 object (NSDictionary) 可包含 string 类型的键和本列表中任意类型的值
 function (RCTResponseSenderBlock)
 
 */
RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}
/**
 给 JavaScript 端发送事件
 */
- (NSArray<NSString *> *)supportedEvents
{
  return @[@"EventReminder"];
}

- (void)calendarEventReminderReceived:(NSNotification *)notification
{
  NSString *eventName = notification.userInfo[@"name"];
//  [self sendEventWithName:@"EventReminder" body:@{@"name": eventName}];
  if (hasListeners) { // Only send events if anyone is listening
    [self sendEventWithName:@"EventReminder" body:@{@"name": eventName}];
  }
}


/**
 优化无监听处理的事件
 如果你发送了一个事件却没有任何监听处理，则会因此收到一个资源警告。要优化因此带来的额外开销，你可以在你的RCTEventEmitter子类中覆盖startObserving和stopObserving方法。
 */
// 在添加第一个监听函数时触发
-(void)startObserving {
  hasListeners = YES;
  // Set up any upstream listeners or background tasks as necessary
}

// Will be called when this module's last listener is removed, or on dealloc.
-(void)stopObserving {
  hasListeners = NO;
  // Remove upstream listeners, stop unnecessary background tasks
}

/**
 多线程
 */
RCT_EXPORT_METHOD(doSomethingExpensive:(NSString *)param callback:(RCTResponseSenderBlock)callback)
{
  dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
    // 在这里执行长时间的操作
    
    // 你可以在任何线程/队列中执行回调函数
    callback(@[]);
  });
}

/**
 导出常量
 */
- (NSDictionary *)constantsToExport
{
  return @{ @"firstDayOfTheWeek": @"Monday" };
}
//JavaScript 端可以随时同步地访问这个数据：
//console.log(CalendarManager.firstDayOfTheWeek);

/**
 枚举常量
 */

//你需要这样来扩展 RCTConvert 类：
/**
@implementation RCTConvert (StatusBarAnimation)
RCT_ENUM_CONVERTER(UIStatusBarAnimation, (@{ @"statusBarAnimationNone" : @(UIStatusBarAnimationNone),
                                             @"statusBarAnimationFade" : @(UIStatusBarAnimationFade),
                                             @"statusBarAnimationSlide" : @(UIStatusBarAnimationSlide)}),
                   UIStatusBarAnimationNone, integerValue)
@end
//接着你可以这样定义方法并且导出 enum 值作为常量：

- (NSDictionary *)constantsToExport
{
  return @{ @"statusBarAnimationNone" : @(UIStatusBarAnimationNone),
            @"statusBarAnimationFade" : @(UIStatusBarAnimationFade),
            @"statusBarAnimationSlide" : @(UIStatusBarAnimationSlide) };
};

RCT_EXPORT_METHOD(updateStatusBarAnimation:(UIStatusBarAnimation)animation
                  completion:(RCTResponseSenderBlock)callback)
//你的枚举现在会用上面提供的选择器进行转换（上面的例子中是integerValue），然后再传递给你导出的函数。
 */




@end
