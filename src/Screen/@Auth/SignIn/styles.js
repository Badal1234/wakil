import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Config from '@Config/default';
const {Colors:{Primary,LightGrey}} = Config;
export const styles = StyleSheet.create({
    conatiner:{
        flex:1,

    },
    input:{
        borderWidth:0.4,
        width:'90%',
        marginTop:moderateScale(20),
        borderColor:LightGrey,
        height:moderateScale(40),
        paddingLeft:moderateScale(20)

    },
    inputWrapper:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:moderateScale(10)
    },
    upper:{
        marginTop:moderateScale(120)
    },
    text:{
        fontSize:moderateScale(23),
        letterSpacing:2,
        marginLeft:moderateScale(20),
        fontWeight:'700',
        color:Primary

    },
    button:{
        marginTop:moderateScale(20),
        marginLeft:moderateScale(20),
        marginRight:moderateScale(20),
        marginBottom:moderateScale(20)
    },
    signup:{
        color:Primary,
        marginLeft:moderateScale(5)

    },
    lower:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
});