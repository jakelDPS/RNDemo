
import React from "react";
import {Button, Image, View, Dimensions} from "react-native";

import appStyle from "../styles/AppStyle";
import styles from '../styles/HomeScreenStyle';

class HomeScreenUI extends React.Component {

    render() {

        return (

            <View style={{ flex: 1 }}>

                { this.props.orientation === "PORTRAIT" ?

                    <View style={appStyle.mainView}>
                        <Image
                            style={styles.image}
                            source={{uri: this.props.nav.getParam("imageURL", 'https://cdn-images-1.medium.com/max/1600/0*Qup3L7adSA8iZO_R.png')}}
                        />

                        <View style={appStyle.button}>
                            <Button
                                title="Push Notifications"
                                color={appStyle.button.color}
                                onPress={() => {
                                    this.props.nav.navigate('Push', {
                                        test: 'From home screen',
                                    });
                                }}
                            />
                        </View>

                        <View style={appStyle.button}>
                            <Button
                                title="Camera"
                                color={appStyle.button.color}
                                onPress={() => this.props.nav.navigate("Camera")}
                            />
                        </View>

                        <View style={appStyle.button}>
                            <Button
                                title="Barcode Scanner"
                                color={appStyle.button.color}
                                onPress={() => this.props.nav.navigate("Barcode")}
                            />
                        </View>

                        <View style={appStyle.button}>
                            <Button
                                title="Maps"
                                color={appStyle.button.color}
                                onPress={() => this.props.nav.navigate("Map")}
                            />
                        </View>

                        <View style={appStyle.button}>
                            <Button
                                title="Printer"
                                color={appStyle.button.color}
                                onPress={() => this.props.nav.navigate("Printer")}
                            />
                        </View>

                        <View style={appStyle.button}>
                            <Button
                                title="Template Example"
                                color={appStyle.button.color}
                                onPress={() => this.props.nav.navigate("Template")}
                            />
                        </View>

                        <View style={appStyle.button}>
                            <Button
                                title="Native Code"
                                color={appStyle.button.color}
                                onPress={() => this.props.nav.navigate("Native")}
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
                                    title="Push Notifications"
                                    color={appStyle.button.color}
                                    onPress={() => {
                                        this.props.nav.navigate('Push', {
                                            test: 'From home screen',
                                        });
                                    }}
                                />
                            </View>

                            <View style={styles.button}>
                                <Button
                                    title="Camera"
                                    color={appStyle.button.color}
                                    onPress={() => this.props.nav.navigate("Camera")}
                                />
                            </View>

                            <View style={styles.button}>
                                <Button
                                    title="Barcode Scanner"
                                    color={appStyle.button.color}
                                    onPress={() => this.props.nav.navigate("Barcode")}
                                />
                            </View>

                            <View style={styles.button}>
                                <Button
                                    title="Maps"
                                    color={appStyle.button.color}
                                    onPress={() => this.props.nav.navigate("Map")}
                                />
                            </View>
                        </View>

                        <View style={styles.landscapeColumn}>
                            <View style={styles.button}>
                                <Button
                                    title="Printer"
                                    color={appStyle.button.color}
                                    onPress={() => this.props.nav.navigate("Printer")}
                                />
                            </View>

                            <View style={styles.button}>
                                <Button
                                    title="Template Example"
                                    color={appStyle.button.color}
                                    onPress={() => this.props.nav.navigate("Template")}
                                />
                            </View>

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