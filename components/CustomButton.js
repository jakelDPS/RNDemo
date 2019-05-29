import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import appStyle from "../styles/AppStyle";

class customButton extends Component {
    render() {
        const { text, onPress} = this.props;
        return (

            <TouchableOpacity style={styles.buttonStyle}
                              onPress={() => onPress()}
            >
                <TouchableOpacity style={{opacity: 1}}>
                    <Text style={styles.textStyle}>{text}</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        );
    }
}

customButton.propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize:20,
        opacity: 1,
        color: '#000',
        textAlign: 'center',
    },

    buttonStyle: {
        margin: 10,
        backgroundColor: appStyle.touchableOpacity.color,
        borderRadius:10,
        borderColor: "#000",
        height: 150,
        width: 150,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default customButton;