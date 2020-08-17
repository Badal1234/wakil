/**
 * Created By @name Sukumar_Abhijeet 10/05/2020
 */

import {StyleSheet,Dimensions} from 'react-native';
import { scale, moderateScale } from 'react-native-size-matters';
import Config from '@Config/default';

const {Colors:{LightGrey}} = Config;
const WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({

    container:{
        flex:1,paddingBottom:moderateScale(100)
    },
    upperContainer:{
        flex:1,
    },
    imageContainer:{
        justifyContent:'center',alignItems:'center'
    },
    callBox:{
        justifyContent:'center',alignItems:'center',paddingHorizontal:moderateScale(20)
    },
    locationBox:{
        justifyContent:'center',alignItems:'center',paddingHorizontal:moderateScale(20)
    },
    imageBox:{
        width:scale(150),height:scale(150),borderRadius:moderateScale(80),
    },
    callButton:{
        width:scale(60),height:scale(60),borderRadius:moderateScale(34),
        backgroundColor:'#fff',
        shadowColor: '#000', 
        shadowOpacity: 1,
        shadowRadius: moderateScale(1), 
        elevation: moderateScale(2),
        shadowOffset: {
            height: moderateScale(5),
            width: moderateScale(2)
        },
        borderColor:LightGrey,borderWidth:.2,
        justifyContent:'center',alignItems:'center'
    },
    lowerContainer:{
        flex:1,justifyContent:'center',alignItems:'center',marginTop:moderateScale(20)
    },
    contentBox:{
        backgroundColor:'#fff',
        shadowColor: '#000', 
        shadowOpacity: 1,
        shadowRadius: moderateScale(1), 
        elevation: moderateScale(5),
        shadowOffset: {
            height: moderateScale(5),
            width: moderateScale(2)
        },
        padding:moderateScale(15),
        borderRadius:moderateScale(6),marginBottom:moderateScale(20),
        width:'90%',
    },
    infoText:{
        fontWeight:'bold'
    },
    doctorName:{
        fontWeight:'bold',
        fontSize:moderateScale(18)
    },
    doctorRole:{
        marginTop:moderateScale(5),
        color:LightGrey
    },
    descText:{
        color:LightGrey,marginTop:moderateScale(10),
        fontSize:moderateScale(12)
    },
    action:{
        height:scale(100),width:WIDTH,backgroundColor:'#fff',
        padding:moderateScale(10)
    },
    upload:{
        borderStyle:'dashed',
        width:'90%',
        height:moderateScale(150),
        borderWidth:1,
        borderRadius:10,
        margin:moderateScale(15),
        justifyContent:'center',
        alignItems:'center',
        overflow:'hidden'
    },
    calender:{
      width:WIDTH
    },
    lower:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    calendarcontainer:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'

    },

},
);





