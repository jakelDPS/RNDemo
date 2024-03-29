import React from "react";
import { View, Image, Text, Button, Platform, TouchableOpacity } from "react-native";
import Orientation from 'react-native-orientation';
import Icon from 'react-native-vector-icons/FontAwesome';

import appStyle from '../styles/AppStyle';
import styles from '../styles/HomeScreenStyle';

import HomeScreenUI from '../ui-components/HomeScreenUI';

class HomeScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            oriented: "",
        };

        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.orientationDidChange = this.orientationDidChange.bind(this);

    }

    componentDidMount() {

            Orientation.getOrientation((err, orientation) => {

                this.setState({oriented: orientation.toString()});

                this.props.navigation.setParams({
                    orient: orientation.toString(),
                });

            });

            Orientation.addOrientationListener(this.orientationDidChange);


    }

    componentWillUnmount() {

        Orientation.removeOrientationListener(this.orientationDidChange);

    }

    orientationDidChange = (orientation) => {

        this.setState({oriented: orientation});

        this.props.navigation.setParams({
            orient: orientation.toString(),
        });

    }

    static navigationOptions = ({navigation}) => {
        const params = navigation.state.params || {};

        // By default, ellipsis appear at end if title is too long
        const title = global.firstName + " " + global.lastName;

        return {
            title: title,
            elevation: 1,
            headerLeft:
                <Icon
                    name="bars"
                    size={30}
                    onPress={() => navigation.openDrawer()}
                    style={{marginLeft: 15, color:"#FFF"}}
                />,
            headerRight: null,

        };
    };

    render() {

        return (

            <HomeScreenUI
                orientation={this.state.oriented}
                nav={this.props.navigation}/>

        );
    }
}

export default HomeScreen;