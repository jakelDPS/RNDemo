import React from "react";
import {View, Text, Button, FlatList} from "react-native";
import appStyle from '../styles/AppStyle';
import styles from '../styles/TemplateLayoutScreenStyle';

class TemplateLayoutScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            contacts: [],
            fetchLoading: false
        };

        this.getContacts = this.getContacts.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);

    }

    static navigationOptions = ({navigation}) => {
        return {
            title: "Template Example",
        };
    };

    componentDidMount() {

        this.getContacts();

    }

    getContacts() {

        this.setState({fetchLoading: true});
        fetch('http://10.1.4.16:8089/api/getContactsNoPush', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': global.JWT
            }
        }).then((response) => {
            return response.json();

        }).then((data) => {

            this.setState({contacts: data.response});
            this.setState({fetchLoading: false});

            //alert(Object.keys(this.state.contacts[0]));

        }).then(() => {

            //Do something here if you want

        }) .catch((err) =>  {
            this.setState({fetchLoading: false});
            alert(err);
        });

    }

    renderSeparatorView = () => {
        return (
            <View style={{
                height: 1,
                width: "100%",
                backgroundColor: "#000",
            }}
            />
        );
    };

    _keyExtractor = (item, index) => index + item.firstname + item.lastname;

    render() {

        return (
            <View style={appStyle.mainView}>
                <View style={styles.listView}>

                    <View style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "#000",
                    }}
                    />

                    {this.state.fetchLoading === false ?
                        <FlatList
                            contentContainerStyle={styles.flatList}
                            data={this.state.contacts}
                            keyExtractor={this._keyExtractor}
                            extraData={this.state}
                            ItemSeparatorComponent={this.renderSeparatorView}
                            renderItem={({item}) => <Text style={styles.listItem}>{item.domain}: {item.firstname} {item.lastname}</Text>}
                        />
                        :
                        <Text style={styles.text}>No contacts available</Text>
                    }

                    <View style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "#000",
                    }}
                    />

                </View>

                <View style={styles.listView}>

                    <View style={styles.button}>
                        <Button
                            title="Get Contacts"
                            color={appStyle.button.color}
                            onPress={() => this.getContacts()}
                            disabled={this.state.fetchLoading}
                        />
                    </View>

                    <View style={styles.button}>
                        <Button
                            title="Go Home"
                            color={appStyle.button.color}
                            onPress={() => this.props.navigation.navigate('Home')}
                        />
                    </View>

                </View>

            </View>
        );
    }
}



export default TemplateLayoutScreen;