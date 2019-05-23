import React from "react";
import {View, Text, Button, Platform, NativeModules, NativeEventEmitter } from "react-native";
import appStyle from '../styles/AppStyle';
import styles from '../styles/NativeiOSScreenStyle';
import Counter from '../ios-native-modules/Counter';

class NativeiOSScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pushTopic: "",
        };

        this.increment = this.increment.bind(this);
        this.getCount = this.getCount.bind(this);
        this.getMultipleReturnValues = this.getMultipleReturnValues.bind(this);
        this.getPromise = this.getPromise.bind(this);

    }

    static navigationOptions = ({navigation}) => {
        return {
            title: "Native iOS Code",
        };
    };

    increment() {

        Counter.increment();

    }

    getCount() {

        Counter.getCount(value => {
            console.log("MYLOG: count is " + value)
        })

    }

    getMultipleReturnValues() {

        Counter.getMultipleArguments((first, second, third, fourth, fifth) => {
            console.log("MYLOG: First value is " + first);
            console.log("MYLOG: Second value is " + second);
            console.log("MYLOG: Third value is " + third);
            console.log("MYLOG: Fourth value is " + fourth);
            console.log("MYLOG: Fifth value is " + fifth);
        });

    }

    async getPromise() {

        try {
            const res = await Counter.decrement();
            console.log("MYLOG: " + res);
        } catch(e) {
            console.log("MYLOG: " + e.message, "MYLOG: " + e.code);
        }

    }

    render() {

        // Listen for the onIncrement event
        const CounterEvents = new NativeEventEmitter(Counter);
        CounterEvents.addListener(
            "onIncrement",
            res => console.log("MYLOG: onIncrement event", res)
        );

        return (
            <View style={appStyle.mainView}>
                <Text style={styles.text}>Call a function written in Swift</Text>
                <View style={appStyle.button}>
                    <Button
                        title="Increment"
                        color={appStyle.button.color}
                        onPress={() => this.increment()}
                    />
                </View>

                <View style={appStyle.button}>
                    <Button
                        title="Decrement"
                        color={appStyle.button.color}
                        onPress={() => this.getPromise()}
                    />
                </View>

                <View style={appStyle.button}>
                    <Button
                        title="Get Count"
                        color={appStyle.button.color}
                        onPress={() => this.getCount()}
                    />
                </View>

                <View style={appStyle.button}>
                    <Button
                        title="Get Multiple Return values"
                        color={appStyle.button.color}
                        onPress={() => this.getMultipleReturnValues()}
                    />
                </View>

            </View>
        );
    }
}



export default NativeiOSScreen;