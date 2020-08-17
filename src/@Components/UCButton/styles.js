import {StyleSheet} from 'react-native';
import {moderateScale,scale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
    button:{
        height:scale(45),
        overflow:'hidden',
        shadowColor: 'black', 
        shadowOpacity: 1,
        shadowRadius: moderateScale(3), 
        elevation: moderateScale(10),
        shadowOffset: {
            height: moderateScale(5),
            width: moderateScale(2)
        },
        borderRadius:moderateScale(4)
     
        
    },
    container:{
        justifyContent:'center',alignItems:'center',
        height:'100%',
 
   

    },
    text:{
        color:'white',letterSpacing:2,fontSize:15
    }
});