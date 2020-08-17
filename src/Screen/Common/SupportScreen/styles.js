import {StyleSheet} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Config from '@Config/default';
const {Colors:{Primary,LightGrey}} = Config;

export const styles = StyleSheet.create({
    card:{
        width:'100%',
        borderWidth:0.1,
        borderRadius:10,
        height:moderateScale(45),
        shadowColor:'#000',
        marginBottom:moderateScale(10),
        borderLeftColor:Primary,
        borderLeftWidth:6,
        justifyContent:'center',
        alignItems:'center',
        elevation:1,
        shadowOpacity: .2,
        shadowRadius: 1, 
        shadowOffset: {
            height: 3,
            width: 3
        },

    },
    text:{
        fontSize:15,
        color:LightGrey,
        letterSpacing:1
    },
    container:{
        padding:moderateScale(20)
    }
});