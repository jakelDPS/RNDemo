import React from "react";
import {View, StyleSheet, Button} from "react-native";
import MapView, {Marker} from 'react-native-maps';
import appStyle from '../styles/AppStyle';
import styles from '../styles/MapScreenStyle';

class MapScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentLocation: null,
            currentLocationMarker: null
        };
    }

    static navigationOptions = ({navigation}) => {
        return {
            title: "Maps",
        };
    };

    getCurrentLocation() {
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                currentLocation: {
                    latitude: position.coords.latitude, longitude: position.coords.longitude,
                    latitudeDelta: 0.0922, longitudeDelta: 0.0421
                }}, () => {
                this.setState({
                    currentLocationMarker:
                        <Marker coordinate={this.state.currentLocation} title={"You are here"}
                                description={"This is where you are sitting"}/>
                });
            });
        });
    };

    render() {
        return (
            <View style={styles.mapContainer}>
                <MapView
                    zoomControlEnabled={true}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    region={this.state.currentLocation}
                    style={styles.map}>
                    {this.state.currentLocationMarker}
                </MapView>

                <View style={appStyle.button}>
                    <Button
                        title="Get Location"
                        color={appStyle.button.color}
                        onPress={() => this.getCurrentLocation()}
                    />
                </View>
            </View>
        );
    }

}

export default MapScreen;