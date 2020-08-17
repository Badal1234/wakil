import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Config from '@Config/default';
const {Colors:{Primary,LightGrey,Secondary}} = Config;

export const styles = StyleSheet.create({
    input:{
       width:moderateScale(120),
       borderBottomColor:Primary,
       borderBottomWidth:2,
       fontSize:moderateScale(20),
       alignItems:'center'
    },
    resend:{
        color:Secondary
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
       
        

    },
    button:{
        width:'90%',
        marginTop:moderateScale(120)
    }
})