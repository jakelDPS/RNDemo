import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        ...Platform.select({
            ios: {
                backgroundColor: '#9713bf',
            },
            android: {
                backgroundColor: '#33cc33'
            },
        }),
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    buttonText: {
        fontSize: 14,
        ...Platform.select({
            ios: {
                color: '#fff',
            },
            android: {
                color: '#fff'
            },
        }),
    },

});

export default styles;