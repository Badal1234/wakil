/* eslint-disable react/sort-prop-types */
/**
 * Create By @name Sukumar_Abhijeet on 9/5/2020,
 */

import React, { useEffect } from 'react';
import { SafeAreaView,Text } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';
import Config from '@Config/default';
import { connect } from 'react-redux';
import * as userAuthActions from '@Actions/userAuthActions';
import {Auth} from 'aws-amplify'

const {Colors:{Primary,Secondary}} = Config;

const SplashScreen = ({...props}) =>{
    const {isUserLoggedIn,navigation:{navigate},setUserLoginData} = props;

    useEffect(()=>{
        if(isUserLoggedIn){
            Auth.currentAuthenticatedUser()
            .then(user => {setUserLoginData({username:user.username,token:user.signInUserSession.accessToken.jwtToken})
            console.log(user)
            navigate('CoreStack')})
            .catch(err => console.log(err));
            
        }
        else{
            navigate('SignIn');
        }
       
    },[]);

    return(
        <SafeAreaView style={{flex:1}}>
            <LinearGradient
                colors={[Primary, Secondary]} 
                style={styles.gradientStyle}
            >
                <Text style={styles.textStyle}>UC Docs</Text>
                    
            </LinearGradient>
        </SafeAreaView>
    );
};

SplashScreen.propTypes = {
    isUserLoggedIn:PropTypes.bool.isRequired,
    introScreen:PropTypes.bool.isRequired,
    setIntroScreen:PropTypes.func.isRequired,
    navigation:PropTypes.object.isRequired,
};

const  mapStateToProps = (state) => {
    return {
        isUserLoggedIn : state.auth.isLoggedIn,
        introScreen: state.auth.introScreen
    };
};


const  mapDispatchToProp =(dispatch)=>({
    setUserLoginData:(value) =>
        dispatch(userAuthActions.setUserLoginData(value)),

        
});

export default connect(mapStateToProps,mapDispatchToProp)(SplashScreen);