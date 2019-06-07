import React from "react";
import { View, Text, Button, Platform, TextInput, KeyboardAvoidingView, TouchableOpacity, Keyboard, Dimensions, ImageBackground} from "react-native";
import { StackActions, NavigationActions } from 'react-navigation';
import appStyle from '../styles/AppStyle';
import styles from '../styles/LoginScreenStyle';
import Orientation from "react-native-orientation";
import loginBackground from '../images/dark-bg.jpg';
import CustomButton from "./CustomButton";
import Icon from 'react-native-vector-icons/FontAwesome5';

class LoginScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            JWT: "",
            fetchLoading: false,
            height: Dimensions.get('window').height,
            width: Dimensions.get('window').width,
        };

        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.login = this.login.bind(this);
        this.getName = this.getName.bind(this);
        this.navigateHome = this.navigateHome.bind(this);
        this.orientationDidChange = this.orientationDidChange.bind(this);

    }

    static navigationOptions = ({navigation}) => {
        return {
            title: "Login",
        };
    };

    componentDidMount() {

        Orientation.addOrientationListener(this.orientationDidChange);

    };

    componentWillUnmount() {

        Orientation.removeOrientationListener(this.orientationDidChange);

    }

    orientationDidChange(orientation) {
        this.setState({height: Dimensions.get('window').height});
        this.setState({width: Dimensions.get('window').width});
    }

    login() {
        console.log("MYLOG: calling login");
        const username = this.state.username;
        const password = this.state.password;
        //alert("username = " + this.state.username + ", password = " + this.state.password);
        this.setState({fetchLoading: true});
        fetch('http://url/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            })

        }).then((response) => {
            return response.headers.get("Authorization");

        }).then((data) => {

            this.setState({fetchLoading: false});
            global.JWT = data;
            global.username = this.state.username;

        }).then(() => {

            this.getName();

        }).catch((err) =>  {
            this.setState({fetchLoading: false});
            alert("login() " + err);
        });

    }

    getName(callback) {
        console.log("MYLOG: " + global.JWT);
        fetch('http://url/getName', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': global.JWT
            },
            body: JSON.stringify({
                email: global.username
            })
        }).then((response) => {
            return response.json();

        }).then((data) => {
            console.log("MYLOG: getName");
            global.firstName = data.response.firstName;
            global.lastName = data.response.lastName;
            this.navigateHome(global.JWT, global.firstName, global.lastName);

        }).catch(function(err) {
            console.log("getName() " + err);
        });
    }

    navigateHome(jwt, firstName, lastName) {

        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'Drawer'})],
        });
        this.props.navigation.dispatch(resetAction);

    }

    render() {
        return (

            <ImageBackground source={ loginBackground }
                   style={styles.backgroundImage}>


            <TouchableOpacity style={appStyle.mainView} activeOpacity={1} onPress={() => Keyboard.dismiss()}>

                <KeyboardAvoidingView style={appStyle.mainView}
                                      behavior= { Platform.OS === "ios" ? "padding" : null}>

                    <Icon name="hooli" size={150} color="#FFF" />

                    <TextInput
                        name="username"
                        style={[styles.textInput, {height: 40, width: this.state.width * .6}]}
                        autoCapitalize="none"
                        placeholder="Username"
                        placeholderTextColor="white"
                        onChangeText={(value) => this.setState({username: value})}
                        value={this.state.username}
                        editable={!this.state.fetchLoading}
                    />

                    <TextInput
                        name="password"
                        style={[styles.textInput, {height: 40, width: this.state.width * .6}]}
                        placeholder="Password"
                        placeholderTextColor="white"
                        secureTextEntry={true}
                        onChangeText={(value) => this.setState({password: value})}
                        value={this.state.password}
                        editable={!this.state.fetchLoading}
                    />

                    <CustomButton
                        text="Login"
                        onPress={() => this.login()}
                        type="lightRectangle"
                    />

                </KeyboardAvoidingView>

            </TouchableOpacity>
        </ImageBackground>
        );
    }
}



export default LoginScreen;