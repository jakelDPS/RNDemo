import React from "react";
import {View, Text, Button, Platform} from "react-native";
import firebase from 'react-native-firebase';
import appStyle from '../styles/AppStyle';
import styles from '../styles/PushScreenStyle';

class PushScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pushTopic: "",
            fetchLoading: false
        };

        this.onSubscribe = this.onSubscribe.bind(this);
        this.subscribeHelper = this.subscribeHelper.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);

    }

    static navigationOptions = ({navigation}) => {
        return {
            title: "Push Notifications",
        };
    };

    componentDidMount() {



    }

    subscribeHelper() {
        firebase.messaging().subscribeToTopic(this.state.pushTopic)
            .then(res => {
                alert("Subscribed to topic " + this.state.pushTopic);
                this.setState({fetchLoading: false});
            })
            .catch(error => {
                alert("Error subscribing to topic " + this.state.pushTopic);
                this.setState({fetchLoading: false});
            });
    }

    onSubscribe() {

        console.log("MYLOG: " + global.username);

        this.setState({fetchLoading: true});
        fetch('http://url/createPushTopic', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': global.JWT
            },
            body: JSON.stringify({
                contactID: global.username,
                domain: "Admin"
            })

        }).then((response) => {
            return response.json();

        }).then((data) => {

            this.setState({pushTopic: data.response});

        }).then(() => {

            this.subscribeHelper();

        }) .catch((err) =>  {
            this.setState({fetchLoading: false});
            alert(err);
        });

    }

    onUnsubscribe() {
        firebase.messaging().unsubscribeFromTopic(this.state.pushTopic)
            .then(res => {
                alert("Unsubscribed from topic " + this.state.pushTopic);
            })
            .catch(error => {
                alert("Error unsubscribing from topic " + this.state.pushTopic);
            });
    }

    render() {
        return (
            <View style={appStyle.mainView}>
                <Text style={appStyle.text}>{JSON.stringify(this.props.navigation.getParam("test"))}</Text>

                <View style={appStyle.button}>
                    <Button
                        title="Subscribe"
                        color={appStyle.button.color}
                        onPress={() => this.onSubscribe()}
                        disabled={this.state.fetchLoading}
                    />
                </View>

                <View style={appStyle.button}>
                    <Button
                        title="Unsubscribe"
                        color={styles.unsubscribeButton.color}
                        onPress={() => this.onUnsubscribe()}
                    />
                </View>

                <View style={appStyle.button}>
                    <Button
                        title="Go Home"
                        color={appStyle.button.color}
                        onPress={() => this.props.navigation.navigate('Home')}
                    />
                </View>

            </View>
        );
    }
}



export default PushScreen;