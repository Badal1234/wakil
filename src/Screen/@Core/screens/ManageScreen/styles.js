import {StyleSheet,Dimensions} from 'react-native';
import {moderateScale,scale} from 'react-native-size-matters';
import Config from '@Config/default';
const {Colors:{Secondary}} = Config;
const width = Dimensions.get('window').width;
export const styles = StyleSheet.create({
    upper:{
        width:width,
        height:moderateScale(120),
        justifyContent:'center',
        alignItems:'center'

    },
    calender:{
        width:width-moderateScale(0)
    },
    calendarcontainer:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'

    },
    lower:{
        justifyContent:'center',
        alignItems:'center',
     
    },
    card:{
        width:width-moderateScale(50),
        height:moderateScale(65),
        marginBottom:moderateScale(20),
        padding:moderateScale(10),
        borderRadius:moderateScale(1),
        shadowColor: 'black', shadowOpacity: 1,
        shadowRadius: 1, elevation: 2,
        shadowOffset: {
            height: 2,
            width: 3
        },
        backgroundColor:'white',
        alignItems:'center',
        borderColor:Secondary,
        borderWidth:1,
        flexDirection:'row',
        justifyContent:'space-between'

    },
    header:{
        color:'white',
        fontSize:22,
        letterSpacing:1,
        fontWeight:'700'
    },
    time:{
        marginTop:moderateScale(50)

    },
    holder:{
        width:moderateScale(50),
        height:moderateScale(65),
        padding:moderateScale(10),
        borderRadius:moderateScale(5),
        shadowColor: 'black', shadowOpacity: 1,
        shadowRadius: 1, elevation: 2,
        shadowOffset: {
            height: 2,
            width: 3
        },
        alignItems:'center',
        borderColor:Secondary,
        borderWidth:1,
        flexDirection:'row',
        justifyContent:'space-between',
        // margin:moderateScale(20)

    },
    action:{
        height:scale(100),width:width,backgroundColor:'#fff',
        padding:moderateScale(10)
    },
    caseDescription:{
        width:moderateScale(230),
        height:moderateScale(60),
        borderWidth:0.6,
        borderColor:Secondary,
        borderRadius:moderateScale(10),
        marginTop:moderateScale(20)

    },
    caseNumber:{
        width:moderateScale(230),
        height:moderateScale(40),
        borderWidth:0.6,
        borderColor:Secondary,
        borderRadius:moderateScale(10),
        marginTop:moderateScale(20)
    },
    date:{
        width:moderateScale(230),
        height:moderateScale(40),
        borderWidth:0.6,
        borderColor:Secondary,
        borderRadius:moderateScale(10),
        justifyContent:'center',
        alignItems:'center',

    },
    input:{
        width:moderateScale(120),
        height:moderateScale(40),
        borderWidth:moderateScale(0.6),
        borderRadius:moderateScale(10),
        borderColor:Secondary,
    },
    text:{
        fontSize:moderateScale(20),
        color:Secondary,
        marginLeft:moderateScale(2),
        marginRight:moderateScale(2)
    
    }

});