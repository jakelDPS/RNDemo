import React from "react";
import { createStackNavigator, createAppContainer, createDrawerNavigator, DrawerItems } from "react-navigation";
import { Platform, StatusBar, View, Text, Image } from 'react-native';
import HomeScreen from './components/HomeScreen';
import PushScreen from './components/PushScreen';
import LogoutModal from './components/LogoutModal';
import CameraScreen from './components/CameraScreen';
import BarcodeScreen from './components/BarcodeScreen';
import MapScreen from './components/MapScreen';
import PrinterScreen from './components/PrinterScreen';
import TemplateLayoutScreen from './components/TemplateLayoutScreen'
import ToastScreen from './components/ToastScreen';
import NativeiOSScreen from './components/NativeiOSScreen';
import LoginScreen from './components/LoginScreen';
import appStyle from './styles/AppStyle';

import firebase from 'react-native-firebase';

global.firstName;

const MainStack = createStackNavigator(
    {
      Home: {
        screen: HomeScreen,
        // Used when a screen is going back to HomeScreen
        //navigationOptions: {
        //    headerBackTitle: "Home",
        //},
      },
      Push: {
        screen: PushScreen,
      },
      Camera: {
        screen: CameraScreen,
      },
      Barcode: {
        screen: BarcodeScreen,
      },
      Map: {
        screen: MapScreen,
      },
      Printer: {
        screen: PrinterScreen,
      },
      Template: {
        screen: TemplateLayoutScreen,
      },
      Native: {
        ...Platform.select({
          ios: {
            screen: NativeiOSScreen,
          },
          android: {
            screen: ToastScreen,
          }
        }),
      },

    },
    {
      // App header styles
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        headerStyle: {
          ...Platform.select({
            ios: {
              backgroundColor: '#9713bf',
            },
            android: {
              backgroundColor: '#33cc33',
            }
          }),
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerBackTitle: "Back",
      },
    }
);

const DrawerStack = createDrawerNavigator({

      Home: {
        screen: MainStack,
        navigationOptions: {
          drawerLabel: 'Home',
          drawerIcon: (
              <Image
                  source={'https://cdn-images-1.medium.com/max/1600/0*Qup3L7adSA8iZO_R.png'}
              />
          ),
        }
      },
      Map: {
        screen: MapScreen,
        navigationOptions: {
          drawerLabel: "Maps",
          drawerIcon: (
              <Image
                  source={'https://cdn-images-1.medium.com/max/1600/0*Qup3L7adSA8iZO_R.png'}
              />
          ),
        }
      },
      Logout: {
        screen: LogoutModal,
        navigationOptions: {
          drawerLabel: 'Logout',
          drawerIcon: (
              <Image
                  source={'https://cdn-images-1.medium.com/max/1600/0*Qup3L7adSA8iZO_R.png'}
              />
          ),
        }
      },


    },
    {
      drawerPosition: "right",
    }
);


const RootStack = createStackNavigator(
    {
      // Main stack navigator, used for regular pages
      Login: {
        screen: LoginScreen,
      },

      Drawer: {
        screen: DrawerStack,
      },

      // Second stack navigator, used for modals
      LogoutModal: {
        screen: LogoutModal,
      },

    },
    {
      initialRouteName: 'Drawer', //Change to 'Login' when done debugging
      mode: 'modal',
      headerMode: 'none',
    }
);



const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {

  componentDidMount() {

    firebase.messaging().hasPermission()
        .then(enabled => {
          if (!enabled) {
            firebase.messaging().requestPermission()
                .catch(error => {
                  if (Platform.OS === 'ios') {
                    alert("In order to receive push notifications, go to app settings and enable them");
                  }
                });
          }
        });

    const channel = new firebase.notifications.Android.Channel(
        'DPS Channel',
        'DPS Channel',
        firebase.notifications.Android.Importance.Max
    ).setDescription('A natural description of the channel');
    firebase.notifications().android.createChannel(channel);

    // Listen for notifications
    // Android uses this
    this.notificationListener = firebase.notifications().onNotification((notification: Notification) => {

      const localNotification = new firebase.notifications.Notification({
        sound: 'default',
        show_in_foreground: true,
      })
          .setNotificationId(notification.notificationId)
          .setTitle(notification.title)
          .setBody(notification.body)
          .setData(notification.data)
          .android.setChannelId('DPS Channel') // e.g. the id you chose above
          .android.setSmallIcon('ic_launcher') // create this icon in Android Studio
          .android.setColor('#ff0000') // you can set a color here
          .android.setPriority(firebase.notifications.Android.Priority.High);

      firebase.notifications()
          .displayNotification(localNotification)
          .catch(err => console.error(err));

    });

    // Listen for messages
    // iOS uses this
    /*this.messageListener = firebase.messaging().onMessage(message => {

        //if (Platform.OS === 'ios') {

            //alert("From message");
            //alert(Object.keys(message.data));
            //alert(message.data);

            const localNotification = new firebase.notifications.Notification()
                .setNotificationId(message._messageId)
                .setTitle("This is where the title would be...")
                .setBody("IF I HAD ONE!")
                .setData(message.data);

            firebase.notifications()
                .displayNotification(localNotification)
                .catch(err => console.error(err));


        //}

    });

     */

  }

  componentWillUnmount() {
    this.notificationListener();
    //this.messageListener();
  }

  render() {

    return (

        <AppContainer />

    );
  }

}