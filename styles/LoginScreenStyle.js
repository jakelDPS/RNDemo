import { Platform, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({

    mainView: {
        flex: 1,
        height: height,
        width: width,
        alignItems: "center",
        justifyContent: "center",
    },

    textInput: {
        borderBottomWidth: 1,
        fontSize: 20,
        marginTop: 10,
        color: "white",
        borderBottomColor: "white",
    },

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },

});

export default styles;