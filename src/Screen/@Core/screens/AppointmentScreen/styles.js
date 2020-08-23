import {StyleSheet,Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Config from '@Config/default';
const {Colors:{Secondary,LightGrey,Primary}} = Config;
const width = Dimensions.get('window').width;
export const styles = StyleSheet.create({
    upper:{
        width:width,
        height:moderateScale(60),
        justifyContent:'center',
        alignItems:'center'

    },
    calender:{
        width:width-moderateScale(50),
    },
    calendarcontainer:{
        justifyContent:'center',
        alignItems:'center',
        width:width,
        backgroundColor:'white'

    },
    lower:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    card:{
        width:width-moderateScale(50),
       // height:moderateScale(65),
        marginBottom:moderateScale(20),
        padding:moderateScale(10),
        borderRadius:moderateScale(10),
        shadowColor: 'black', shadowOpacity: 1,
        shadowRadius: 1, elevation: 5,
        shadowOffset: {
            height: 3,
            width: 3
        },
        alignItems:'center',
        borderWidth:0.1,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#37c9ee',
    

    },
    name:{
        fontSize:moderateScale(16),
        fontWeight:'500',
        letterSpacing:2,
        color:'white'
        
       
    },
    disease:{
        fontSize:14,
        color:LightGrey,

    },
    list:{
        marginTop:moderateScale(30),
    },
    header:{
        color:'white',
        fontSize:22,
        letterSpacing:1,
        fontWeight:'700'
    },
    upload:{
        borderStyle:'dashed'
    },
    chooseDate:{
        borderWidth:1,
        borderColor:Secondary,
        width:width-moderateScale(50),
        height:moderateScale(50),
        justifyContent:'center',
        alignItems:'center',
        marginTop:moderateScale(40),
        borderRadius:moderateScale(10)
    },
    input:{
        width:moderateScale(width-50),
        height:moderateScale(50),
        borderWidth:moderateScale(1),
        borderColor:Secondary,
        borderRadius:moderateScale(10),
        marginTop:moderateScale(20)
    },
    bar:{
        height:moderateScale(20),
        width:moderateScale(1),
        backgroundColor:'black',
        marginLeft:moderateScale(10),marginRight:moderateScale(10)
    },
    profile:{
       // flexDirection:'row',
        justifyContent:'space-evenly'
    }
});