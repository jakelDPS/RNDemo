//
//  Counter.m
//  ReactNativeDemo
//
//  Created by Jacob Losin on 4/24/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "React/RCTBridgeModule.h"
#import "React/RCTEventEmitter.h"

// First argument is the name of the Swift class, the second is it's superclass
@interface RCT_EXTERN_MODULE(Counter, RCTEventEmitter)

RCT_EXTERN_METHOD(increment)
RCT_EXTERN_METHOD(getCount: (RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(getMultipleArguments: (RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(
                  decrement: (RCTPromiseResolveBlock)resolve
                  rejecter: (RCTPromiseRejectBlock)reject
                  )


@end

/*
 If you want to expose the module with a different name other than 'Counter'...
 
 @interface RCT_EXTERN_REMAP_MODULE(RNCounter, Counter, NSObject)
 @end
 
 The module will now be exposed as 'RNCounter'
 */


/*
 If you want to rename a function...
 // 'false' means the method is not synchronous
 @interface _RCT_EXTERN_REMAP_METHOD(inc, increment, false)
 @end
 */
