import React from 'react';
import { Login } from '../service/LoginService.js';
import {
    View,
    TextInput,
    Button
  } from 'react-native';

export class LoginPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password:""
        };
    
    }

    changeText(property, text) {
        this.setState({property:text});
    }
    
    
    render()
    {
        return (
            <View>
                <TextInput onChangeText={text => this.changeText("email",text)} value={this.state.email}/>
                <TextInput onChangeText={text => this.changeText("password",text)} value={this.state.password}/>
                <Button title="Login" onPress={Login.bind(this, this.state.email, this.state.password)} />
            </View>
        )
    }
}