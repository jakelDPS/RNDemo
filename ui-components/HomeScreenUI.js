
import React from "react";
import {Button, Image, View, SafeAreaView, Dimensions} from "react-native";
import CustomButton from "../components/CustomButton.js";

import appStyle from "../styles/AppStyle";
import styles from '../styles/HomeScreenStyle';
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeScreenUI extends React.Component {

    render() {

        return (

            <View style={{ flex: 1 }}>

                { this.props.orientation === "PORTRAIT" ?

                    //<View style={appStyle.mainView}>
                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 10, marginBottom: 10 }}>

                        <Image
                            style={styles.image}
                            source={{uri: this.props.nav.getParam("imageURL", 'https://cdn-images-1.medium.com/max/1600/0*Qup3L7adSA8iZO_R.png')}}
                        />

                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <CustomButton
                                text="Template Example"
                                onPress={() => this.props.nav.navigate("Template")}
                                type="darkSquare"
                            />

                            <CustomButton
                                text="Native Code"
                                onPress={() => this.props.nav.navigate("Native")}
                                type="darkSquare"
                            />
                        </View>

                    </View>

                    :

                    <View style={appStyle.flexRow}>

                        <View style={styles.landscapeColumn}>
                            <Image
                                style={{width: '100%', height: 250}}
                                source={{uri: this.props.nav.getParam("imageURL", 'https://cdn-images-1.medium.com/max/1600/0*Qup3L7adSA8iZO_R.png')}}
                            />
                        </View>

                        <View style={styles.landscapeColumn}>

                            <View style={styles.button}>
                                <Button
                                    title="Template Example"
                                    color={appStyle.button.color}
                                    onPress={() => this.props.nav.navigate("Template")}
                                />
                            </View>

                        </View>

                        <View style={styles.landscapeColumn}>

                            <View style={styles.button}>
                                <Button
                                    title="Native Code"
                                    color={appStyle.button.color}
                                    onPress={() => this.props.nav.navigate("Native")}
                                />
                            </View>
                        </View>

                    </View>

                }
            </View>

        );
    }

}

export default HomeScreenUI;