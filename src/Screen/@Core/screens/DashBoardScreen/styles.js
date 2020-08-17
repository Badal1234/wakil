import {StyleSheet} from 'react-native';
import {moderateScale,scale} from 'react-native-size-matters';
import Config from '@Config/default';
const {Colors:{Secondary,LightGrey}} = Config;

export const styles = StyleSheet.create({
    card:{
        width:scale(150),
        marginBottom:moderateScale(25),
        padding:moderateScale(10),
        height:moderateScale(160),
        borderRadius:moderateScale(10),
        shadowColor: 'black', shadowOpacity: 1,
        shadowRadius: 1, elevation: 2,
        shadowOffset: {
            height: 2,
            width: 3
        },
        borderColor:Secondary,
        // borderWidth:1.2,
        marginLeft:moderateScale(10),
        marginRight:moderateScale(10),
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:moderateScale(14),
        color:LightGrey
    }
});