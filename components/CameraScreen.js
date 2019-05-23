import React from "react";
import {View, Text, Button, TouchableOpacity} from "react-native";
import { RNCamera } from 'react-native-camera';
import appStyle from '../styles/AppStyle';
import styles from '../styles/CameraScreenStyle';

class CameraScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: "Camera",
        };
    };

    render() {
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.off}
                    captureAudio={false}
                    captureVideo={false}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera'}
                    onGoogleVisionBarcodesDetected={({ barcodes }) => {
                        console.log(barcodes);
                    }}
                />
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                        <Text style={ styles.buttonText }> Take Picture </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    takePicture = async function() {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);

            alert(data.uri);

            this.props.navigation.navigate('Home', {
                imageURL: data.uri,
            });


            //alert(data.uri);
        }
    };

}

export default CameraScreen;