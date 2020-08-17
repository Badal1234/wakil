/* eslint-disable no-unused-vars */
import React,{useState} from 'react';
import {SafeAreaView,View,Text,TextInput,TouchableOpacity} from 'react-native';
import UCButton from '@Components/UCButton';
import Config from '@Config/default';
import PropTypes from 'prop-types';
const {Colors:{Primary,Secondary}} = Config;
import {styles} from './styles';
import {Auth} from 'aws-amplify'
import * as userAuthActions from '@Actions/userAuthActions';
import { connect } from 'react-redux';
const SignInScreen = ({navigation,setUserLoginData}) => {
    const [email,set_email]= useState('');
    const [pass,set_pass] = useState('');
            // more code working with route53 object
            // route53.changeResourceRecordSets();
     
   
    const signIn = () =>{
        console.log(email)
        const a = email.replace(/\s+/g, '');
        Auth.signIn(a, pass)
            .then(user => {
                console.log(user.signInUserSession.accessToken)
                setUserLoginData({username:user.username,token:user.signInUserSession.accessToken})
                navigation.navigate('Home')
            }
               )
            .catch(err => console.log(err))
    }

    return(
        <SafeAreaView style={styles.conatiner}>
            <View style={styles.upper}>
                <Text style={styles.text}>
                    SignIn
                </Text>
            </View>
            <View style={styles.inputWrapper}>
                <TextInput onChangeText={(text)=>set_email(text)} placeholder={'Email/Username'} style={styles.input} />
                <TextInput onChangeText={(text)=>set_pass(text)} placeholder={'password'}style={styles.input} />
            </View>
            <View>


            </View>
            <View style={styles.button}>
                <UCButton buttontext = {'SignIn'} onPress={()=>signIn()} />

            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text>
                    OR
                </Text>
            </View>
            <View style={styles.button}>
                <UCButton buttontext = {'SignIn with Google'} />

            </View>
            <View style={styles.lower}>
                <Text>
                    Donot Have a Account ?  
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('SignUp')} >
                    <Text style={styles.signup}>
                        SignUp
                    </Text>
                </TouchableOpacity>
            </View>
            
            

        </SafeAreaView>
    );
};

const  mapStateToProps = (state) => {
    return {};
};

const  mapDispatchToProp =(dispatch)=>({
    setUserLoginData:(userData) =>
        dispatch(userAuthActions.setUserLoginData(userData)),
        
});

SignInScreen.propTypes = {
    navigation:PropTypes.object.isRequired,
    setUserLoginData : PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProp)(SignInScreen);