import React from 'react';
import { Styles } from './../styles/Styles.js';
import { ShoppinButton } from './../components/ShoppinButton.js';
import { CreateAccount } from './../service/CreateAccountService.js';
import { View, Image, Button } from 'react-native';


export const DefaultPage = ({ navigation }) => (
    <View>
        <Image source={require('./../res/ShoppinLogo_Main.png')} style={Styles.LoginLogo} />
        <View>
            <ShoppinButton OnPress={() => navigation.navigate("CreateAccountPage")} Title="Create Account" TextStyle={Styles.ShoppinButtonText} ButtonStyle={Styles.LoginButton}/>
            <ShoppinButton OnPress={() => navigation.navigate("Login")} Title="Login" TextStyle={Styles.ShoppinButtonText} ButtonStyle={Styles.LoginButton}/>
        </View>
    </View>
);
