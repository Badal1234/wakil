
import {StyleSheet} from 'react-native';
import {moderateScale } from 'react-native-size-matters';
export const styles = StyleSheet.create({
    gradientStyle:{
        justifyContent:'center',alignItems:'center',
        flex:1
    },
    textStyle:{
        color:'#fff',
        fontSize:moderateScale(30),
        fontWeight:'bold'
    }
},
);
