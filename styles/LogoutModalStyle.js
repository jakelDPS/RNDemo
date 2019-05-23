import { Platform, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({

    innerView: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    outerView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    logoutText: {
        textAlign: 'center',
        width: width,
        textAlignVertical: "center",
        fontSize: 40,
    },

    logoutButton: {
        width: width * .35,
        marginLeft: 10,
        marginRight: 5,
    },

    cancelButton: {
        width: width * .35,
        marginLeft: 5,
        marginRight: 10,
    },

});

export default styles;