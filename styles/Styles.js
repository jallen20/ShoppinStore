import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({

    LoginContainer : {
            marginTop:'30%',
            height:'90%',
            display:'flex'
    },
    LoginContent : {
       alignItems:'center' 
    },
    LoginGroup : {
        marginTop:"5%",
        alignItems:"center",
        width:'90%',
        alignSelf:"center"
    },
    LoginLogo: {
        resizeMode:"contain",
        width:"35%",
        marginLeft:'15%'
    },
    LoginInput: {
        borderColor:'#000',
        borderWidth:1,
        borderRadius: 10,
        width:'100%'
    },
    LoginButton: {
        marginTop:'20%',
        backgroundColor:"#000",
        borderRadius:6,
        width:'90%',
        height:'10%',
        alignSelf:'center',
        alignItems:'center'
    }
    


});