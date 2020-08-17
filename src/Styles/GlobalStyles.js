/**
 * Created By @name Sukumar_Abhijeet 10/05/2020
 */

import {StyleSheet} from 'react-native';
import Config from '@Config/default';
import { moderateScale, scale } from 'react-native-size-matters';
const {Colors:{LightWhite}} = Config;

const GlobalStyles = StyleSheet.create({
    AppContainer:{
        flex:1,backgroundColor:'#fff'
    },
    TextInputBox:{
        flexDirection:'row',
        borderColor:LightWhite,
        borderWidth:1,
        borderRadius:moderateScale(0),
        alignItems:'center',
        paddingHorizontal:moderateScale(10)
    },
    ScreenHeader:{
        height:scale(30),
        justifyContent:'center',alignItems:'center',elevation:3,
        shadowOpacity: .2,
        shadowRadius: 1, 
        shadowOffset: {
            height: 0,
            width: 8
        },
    },
    HeaderText:{
        color:'#fff',
        fontSize:moderateScale(18),fontWeight:'bold',
        letterSpacing:1,
    }
},
);

export default GlobalStyles;

