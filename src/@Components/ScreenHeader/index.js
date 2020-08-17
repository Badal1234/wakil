/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/**
 * Create By @name Sukumar_Abhijeet on 5/5/2020,
 */

import React from 'react';
import { Text,StatusBar,View,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';
import Config from '@Config/default';
import { withNavigation } from 'react-navigation';
import  GlobalStyles  from '@Styles/GlobalStyles';
import LinearGradient from 'react-native-linear-gradient';
import Display from 'react-native-display';
const {Colors:{Primary,Secondary}} = Config;

const StatusBarHeight = StatusBar.currentHeight;

const ScreenHeader = ({...props}) =>{

    const {headerName,showArrow=true,navigation} = props;
    return(
        <LinearGradient colors={[Primary,Secondary]} end={{x:0.8,y:0.7}} start={{x:0.2,y:0.7}} style={[GlobalStyles.ScreenHeader]}>
            <LinearGradient
                colors={[Primary, Secondary]}  end={{x: 1, y: 0}}
                start={{x: 0.3, y: 0.5}}  style={{height:StatusBarHeight}}>
                <StatusBar backgroundColor={'transparent'}   barStyle={'light-content'}  translucent={true} />
            </LinearGradient >
            <View style={{flexDirection:'row',width:'100%'}}>
                <Display enable={showArrow} style={{justifyContent:'center'}}>
                    <TouchableOpacity onPress={()=>navigation.goBack()} style={{padding:10,width:50}}>
                        <Icon color={'#fff'} name={'arrow-left'} size={20} />
                    </TouchableOpacity>
                </Display>
                <View style={{width:'100%',justifyContent:'center',alignItems:showArrow?'flex-start' : 'center'}}>
                    <Text style={GlobalStyles.HeaderText}>{headerName}</Text>
                </View>
                
            </View>
        </LinearGradient>
    );
};

ScreenHeader.propTypes = {
    headerName:PropTypes.string.isRequired,
    navigation:PropTypes.object.isRequired,
    showArrow:PropTypes.bool
};

export default withNavigation(ScreenHeader);