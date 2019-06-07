import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import appStyle from "../styles/AppStyle";

class customButton extends Component {
    render() {
        const { text, onPress, type, disabled } = this.props;
        return (

            <TouchableOpacity
                style={ type === "lightSquare" ? styles.lightSquare : type === "darkSquare" ? styles.darkSquare :
                                      type === "lightRectangle" ? styles.lightRectangle : styles.darkRectangle }
                onPress={ () => onPress() }
                disabled={ disabled === true ? true  : false }
            >
                <Text style={type === "lightSquare" || type === "lightRectangle" ? styles.lightStyle : styles.darkStyle} > {text} </Text>

            </TouchableOpacity>
        );
    }
}

customButton.propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    darkStyle: {
        fontSize:20,
        opacity: 1,
        color: '#000',
        textAlign: 'center',
    },
    lightStyle: {
        fontSize:20,
        opacity: 1,
        color: '#FFF',
        textAlign: 'center',
    },
    darkSquare: {
        margin: 10,
        backgroundColor: appStyle.touchableOpacity.color,
        borderRadius:10,
        borderColor: "#000",
        height: 150,
        width: 150,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lightSquare: {
        margin: 10,
        backgroundColor: appStyle.touchableOpacity.color,
        borderRadius:10,
        borderColor: "#FFF",
        height: 150,
        width: 150,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    darkRectangle: {
        margin: 10,
        backgroundColor: appStyle.touchableOpacity.color,
        borderRadius:10,
        borderColor: "#000",
        height: 40,
        width: 150,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lightRectangle: {
        margin: 10,
        backgroundColor: appStyle.touchableOpacity.color,
        borderRadius:10,
        borderColor: "#FFF",
        height: 40,
        width: 150,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default customButton;