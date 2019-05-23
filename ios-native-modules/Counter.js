import { NativeModules, NativeEventEmitter } from 'react-native';

class Counter extends NativeEventEmitter {

    constructor(nativeModule) {

        super(nativeModule);
        // explicitly set our custom methods and properties

        this.getCount = nativeModule.getCount;

        this.increment = nativeModule.increment;

        this.getMultipleArguments = nativeModule.getMultipleArguments;

        this.decrement = nativeModule.decrement;
    }
}
module.exports = NativeModules.Counter;