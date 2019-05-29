import {Platform, StatusBar, StyleSheet, Dimensions} from "react-native";

let { width, height } = Dimensions.get('window');

const appStyle = StyleSheet.create({

    touchableOpacity: {
      ...Platform.select({
          ios: {
              color: 'rgba(151,19,191,0.6)',
          }
          ,
          android: {
              color: 'rgba(51,204,51, 0.6)',
          }
          ,
      }),
    },

    button: {
        width: width * .6,
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

    buttonRight: {
        marginRight: 10,
    },

    buttonLeft: {
        marginLeft: 10,
    },

    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 20,
    },

    text: {
        fontSize: 30
    },

    dropdown: {
        padding: 8,
        flexDirection: 'row',
        ...Platform.select({
            ios: {
                paddingTop: StatusBar.currentHeight,
            },
        }),
    },

    flexRow: {
        flex: 1,
        flexDirection: 'row',
    },

    flexColumn: {

    },

});

export default appStyle;