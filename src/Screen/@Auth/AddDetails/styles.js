/* eslint-disable no-unused-vars */
import {StyleSheet, Dimensions} from 'react-native';
import { scale, moderateScale } from 'react-native-size-matters';
import Config from '@Config/default';
const {Colors:{LightGrey,Secondary,LightWhite}} = Config;
const WIDTH = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  
    upperContainer:{
        paddingTop:moderateScale(10)
             
    },
       
    inputWrapper:{
        flexDirection:'row',paddingHorizontal:moderateScale(20),
        alignItems:'center',justifyContent:'center'
    },
    inputWrapper1:{
        paddingTop:moderateScale(70),paddingHorizontal:moderateScale(20),justifyContent:'center', alignItems:'center'
    },
       
    buttonWrapper:
        {
            paddingHorizontal:moderateScale(35),paddingBottom:moderateScale(30),marginTop:moderateScale(20)
        },  
    createText:{
        fontSize:moderateScale(20),fontWeight:'bold'
    },
    skipText:{
        fontSize:moderateScale(20), color:'#4B66EA'
    },
    input:{
        borderColor:LightWhite,
        borderWidth:1,
        borderRadius:moderateScale(0),
        width:moderateScale(290),
        height:moderateScale(40),
        marginTop:moderateScale(30),
        justifyContent:'center',
        paddingLeft:moderateScale(18)
    },
    emergencyCareModal:{
        height:scale(100),width:WIDTH,backgroundColor:'#fff',
        padding:moderateScale(10)
    },
    calendarBox:{
        width:Dimensions.get('window').width,height:scale(300)
    },
    genderCard:{
        height:'60%',borderRadius:moderateScale(20),justifyContent:'center',alignItems:'center',width:moderateScale(80)
    }
       
       
});