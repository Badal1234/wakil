/* eslint-disable no-unused-vars */
import React,{useState} from 'react';
import {SafeAreaView,View,Text,TextInput,TouchableOpacity} from 'react-native';
import UCButton from '@Components/UCButton';
import Config from '@Config/default';
const {Colors:{Primary,Secondary}} = Config;
import * as userAuthActions from '@Actions/userAuthActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {styles} from './styles';
import {Auth} from 'aws-amplify'
const SignUpScreen = ({navigation}) => {
    const [email,set_email]= useState('');
    const [pass,set_pass] = useState('');
    const [rePass,set_rePass] = useState('');
    const [pass_err, set_err_pass] = useState('');
    const [email_err, set_err_email] = useState('');
    const [confirm_err,set_confirm_err] = useState('');

    function ValidatePassword(pass) {
        if (/(?=.*\d){8,}/.test(pass)) {
            set_err_pass('');
            return true;
        } else {
            set_err_pass(
                'Must contain at least 8 or more characters',
            );
        }
    }

    function ValidateEmail(mail) {
        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            set_err_email('');
            return true;
        }
        set_err_email('Email address is not correct');
        return false;
    }

    const submit = () =>{
        console.log(email)
        const a = email.replace(/\s+/g, '');
        Auth.signUp({
            username:a,
            password:pass,
            })
            .then(data => navigation.navigate('OtpScreen',{username:data.user.username,pass:pass}))
            .catch(err => console.log(err));

    }
    return(
        <SafeAreaView style={styles.conatiner}>
            <View style={styles.upper}>
                <Text style={styles.text}>
                    SignUp
                </Text>
            </View>
            <View style={styles.inputWrapper}>
                <View style={{width:'95%'}}>
                    <TextInput
                        onChangeText={(text)=>set_email(text)} onSubmitEditing={()=>{
                            (ValidateEmail(email));
                        }} placeholder={'Email/Username'} 
                        style={styles.input} />
                    <Text style={{fontSize:12,color:'red'}}>
                        {email_err}   
                    </Text>
                </View>
                <View style={{width:'95%'}}>

                    <TextInput
                        onChangeText={(text)=>set_pass(text)} onSubmitEditing={()=>{
                            ValidatePassword(pass);

                        }}placeholder={'Password'} 
                        style={styles.input} />
                    <Text style={{fontSize:12,color:'red'}}>
                        {pass_err}
                    </Text>
                </View>
                <View style={{width:'95%'}}>
                    <TextInput
                        onChangeText={(text)=>set_rePass(text)} onSubmitEditing={()=>{
                            if(pass !==rePass ){
                                set_confirm_err('password does not match');

                            }
                            else{
                                set_confirm_err('');
                            }
                        }}placeholder={'Confirm Password'}
                        style={styles.input} />
                    <Text style={{fontSize:12,color:'red'}}>
                        {confirm_err}
                    </Text>
                </View>
            </View>
            <View>


            </View>
            <View style={styles.button}>
                <UCButton buttontext = {'SignUp'} onPress={()=>submit()} />

            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text>
                    OR
                </Text>
            </View>
            <View style={styles.button}>
                <UCButton buttontext = {'SignUp with Google'} />

            </View>
            <View style={styles.lower}>
                <Text>
                    Already Have an Account ?  
                </Text>
                <TouchableOpacity >
                    <Text style={styles.signup}>
                        SignIn
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

SignUpScreen.propTypes = {
    navigation:PropTypes.object.isRequired,
    setUserLoginData : PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProp)(SignUpScreen);