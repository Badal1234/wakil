import {StyleSheet,Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Config from '@Config/default';
const {Colors:{Secondary,Primary}} = Config;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container:{
        width:width-50,
        height:height-250,
        marginBottom:moderateScale(25),
        padding:moderateScale(10),
        borderRadius:moderateScale(10),
        shadowColor: 'black', shadowOpacity: 1,
        shadowRadius: 1, elevation: 2,
        shadowOffset: {
            height: 2,
            width: 3
        },
        marginTop:moderateScale(150),
        backgroundColor:'white',
        alignItems:'center'

    },
    profile:{
        height:moderateScale(90),
        width:moderateScale(90),
        borderRadius:45,
        backgroundColor:Secondary,
        marginTop:moderateScale(-50)
    },
    card:{
        width:width-70,
        height:moderateScale(45),
        marginBottom:moderateScale(20),
        padding:moderateScale(10),
        borderRadius:moderateScale(5),
        shadowColor: 'black', shadowOpacity: 1,
        shadowRadius: 1, elevation: 2,
        shadowOffset: {
            height: 2,
            width: 3
        },
        backgroundColor:'white',
        borderColor:Secondary,
        borderWidth:1,
        flexDirection:'row',

    },
    cardholder:{
        marginTop:moderateScale(50)
    },
    text:{
        color:Primary,
        letterSpacing:1,
        fontSize:moderateScale(15),
        marginLeft:moderateScale(25)
    }
});