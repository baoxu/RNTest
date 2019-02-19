/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];

  /**
   // 从原生组件传递属性到 React Native-----initialProperties
   通过RCTRootView的初始化函数你可以将任意属性传递给 React Native 应用。参数initialProperties必须是NSDictionary的一个实例。这一字典参数会在内部被转化为一个可供 JS 组件调用的 JSON 对象。
   */
  NSArray *imageList = @[@"https://mobike.com/cn/logo.png",
                         @"http://foo.com/bar2.png"];
  
  NSDictionary *propsDict = @{@"images" : imageList};
  
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"RNInteraction"
                                               initialProperties: propsDict
                                                   launchOptions:launchOptions];
  /**
   RCTRootView同样提供了一个可读写的属性appProperties。在appProperties设置之后，React Native 应用将会根据新的属性重新渲染。当然，只有在新属性和之前的属性有区别时更新才会被触发。
   */
  NSArray *imageList2 = @[@"http://foo.com/bar3.png",
                         @"http://foo.com/bar4.png"];
  
  rootView.appProperties = @{@"images" : imageList2};
  
  
  /**
   从 React Native 传递属性到原生组件-----RCT_CUSTOM_VIEW_PROPERTY
   这篇文档详细讨论了暴露原生组件属性的问题。简而言之，在你自定义的原生组件中通过RCT_CUSTOM_VIEW_PROPERTY宏导出属性，就可以直接在 React Native 中使用，就好像它们是普通的 React Native 组件一样。
   */
  
  
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

@end
