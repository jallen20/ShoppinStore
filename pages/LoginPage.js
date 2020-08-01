import React from 'react';
import { Login } from '../service/LoginService.js';
import { Styles } from './../styles/Styles.js';
import { ShoppinButton } from './../components/ShoppinButton.js';
import {
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Text
} from 'react-native';

export class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    changeText(property, text) {
        if (property === "email") this.setState({ email: text });
        else if (property === "password") this.setState({ password: text });
        this.setState({ property: text });
    }


    render() {
        return (
            <View style={Styles.LoginContainer}>
                <Image source={require('./../res/ShoppinLogo_Main.png')} style={Styles.LoginLogo} />
                <View style={Login.LoginContent}>
                    <View style={Styles.LoginGroup}>
                        <Text style={{ alignSelf: "flex-start" }}>Email</Text>
                        <TextInput onChangeText={text => this.changeText("email", text)} style={Styles.LoginInput}
                            value={this.state.email} />
                    </View>
                    <View style={Styles.LoginGroup}>
                        <Text style={{ alignSelf: "flex-start" }}>Password</Text>
                        <TextInput onChangeText={text => this.changeText("password", text)} style={Styles.LoginInput}
                            value={this.state.password} />
                    </View>
                    <ShoppinButton Title="Login" OnPress={Login.bind(this, this.state.email, this.state.password)}
                        ButtonStyle={Styles.LoginButton} TextStyle={{ color: "#fff", fontWeight: "bold", fontSize: 20 }} />
                </View>
            </View>
        )
    }
}