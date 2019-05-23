import {Platform, StyleSheet, Dimensions} from "react-native";
let { width, height } = Dimensions.get('window');
const aspectRatio = height/width;

const styles = StyleSheet.create({

    button: {
        width: '90%',
        marginTop: 10,
        ...Platform.select({
            ios: {
                color: '#9713bf',
            },
            android: {
                color: '#33cc33'
            },
        }),
    },

    image: {
        width: width * .7,
        height: height * .4,
    },

    modalButton: {
        color: "#fff",
    },

    modalText: {
        color: "#fff",
        fontWeight: "bold",

        ...Platform.select({
            ios: {
                fontSize: 16,
            },
            android: {
                fontSize: 17,
            },
        }),
    },

    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    portraitView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    landscapeView: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },

    landscapeColumn: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '33.33333%',
        padding: 10,
        borderLeftWidth: 1,
        borderLeftColor: 'black',
    },

});

export default styles;