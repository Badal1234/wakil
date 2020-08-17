import {StyleSheet} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Config from '@Config/default';
const {Colors:{LightGrey,Primary}} = Config;


export const styles = StyleSheet.create({
    notification:{
        borderRadius:moderateScale(6),
        overflow:'hidden',
        shadowColor: '#000', 
        shadowOpacity: 1,
        shadowRadius: moderateScale(1), 
        elevation: moderateScale(2),
        shadowOffset: {
            height: moderateScale(5),
            width: moderateScale(2)
        },
        backgroundColor:'#fff',
        padding:moderateScale(10),
        paddingVertical:moderateScale(10),
        marginLeft:moderateScale(10),
        marginRight:moderateScale(10),
        marginTop:moderateScale(5),
        borderColor:Primary,
        borderWidth:1

    },
    body:{
        marginTop:moderateScale(40)
    },
    container:{
        marginTop:moderateScale(20)
    },
    datetext:{
        marginLeft:moderateScale(20),
        fontSize:18,
        fontWeight:'700'
    },
    message:{
        fontSize:14,
        letterSpacing:1,
        fontWeight:'600'

    },
    time:{
        fontSize:11,
        color:LightGrey
    }
});