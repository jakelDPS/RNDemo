import {Platform, StyleSheet} from "react-native";

const styles = StyleSheet.create({

    listView: {
        marginTop: 10,
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },

    listItem: {
        flex: 1,
        fontSize: 20,

    },

    flatList: {
        flexGrow: 1,
        justifyContent: 'center',
    },

    text: {
        fontSize: 20,
        marginBottom: 20,
    },

    button: {
        width: '60%',
        marginBottom: 10,
        ...Platform.select({
            ios: {
                color: '#9713bf',
            },
            android: {
                color: '#33cc33'
            },
        }),
    },

});

export default styles;