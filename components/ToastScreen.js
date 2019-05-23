import React from "react";
import {View, Text, Button, Platform, NativeModules} from "react-native";
import appStyle from '../styles/AppStyle';
import styles from '../styles/ToastScreenStyle';
import Toast from '../android-native-modules/Toast';

class ToastScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pushTopic: "",
        };

        this.showToast = this.showToast.bind(this);

    }

    static navigationOptions = ({navigation}) => {
        return {
            title: "Native Android Toast",
        };
    };

    showToast() {

        Toast.show('This is a native Android toast message', Toast.LONG);

    }

    render() {
        return (
            <View style={appStyle.mainView}>
                <View style={appStyle.button}>
                    <Button
                        title="Show Toast"
                        color={appStyle.button.color}
                        onPress={() => this.showToast()}
                    />
                </View>

            </View>
        );
    }
}


export default ToastScreen;