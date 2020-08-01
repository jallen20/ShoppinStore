import React from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Text
  } from 'react-native';


export class ShoppinButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.props.OnPress}  style={this.props.ButtonStyle}>
                    <Text style={this.props.TextStyle}>{this.props.Title}</Text>
                </TouchableOpacity>
        )
    }
}
