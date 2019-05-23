import React from "react";
import { View, Text, Button, Platform } from "react-native";
import appStyle from '../styles/AppStyle';
import styles from '../styles/LogoutModalStyle';

class LogoutModal extends React.Component {

    render() {
        return (
            <View style={styles.outerView}>
                <Text style={styles.logoutText}>Are you sure you want to log out?</Text>

                <View style={styles.innerView}>

                    <View style={styles.logoutButton}>
                        <Button
                            title="Logout"
                            color={appStyle.button.color}
                            onPress={() => this.props.navigation.navigate("Login")}
                        />
                    </View>

                    <View style={styles.cancelButton}>
                        <Button
                            title="Cancel"
                            color={appStyle.button.color}
                            onPress={() => this.props.navigation.goBack()}
                        />
                    </View>

                </View>

            </View>
        );
    }
}

export default LogoutModal;