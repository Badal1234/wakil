import React,{useState} from 'react'
import {View,TextInput,Text} from 'react-native'
import { styles } from './styles'
import Button from '@Components/UCButton'
import {Auth} from 'aws-amplify'
import * as userAuthActions from '@Actions/userAuthActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
const OtpScreen = ({navigation}) =>{
    const username = navigation.getParam('username')
    const password = navigation.getParam('pass')
    const [code,set_code] = useState('')
    const submit = () =>{
        // After retrieveing the confirmation code from the user
        Auth.confirmSignUp(username, code, {
            // Optional. Force user confirmation irrespective of existing alias. By default set to True.
            forceAliasCreation: true
        }).then(data => Auth.signIn(username, password)
            .then(user => {               
            setUserLoginData({username:user.username,token:user.signInUserSession.accessToken})
            navigation.navigate('Home')}))
            .catch(err => console.log(err))
          .catch(err => console.log(err))
        
    }
    return(
        <View style={styles.container}>
            <View>
                <TextInput style={styles.input} 
                onChangeText={(text)=>set_code(text)}
                 keyboardType={'number'}
                  maxLength={6}
                  textContentType={'oneTimeCode'}
                  />
            </View>
            <View>
                <Text>Did not get the code <Text style={styles.resend}>click to resend</Text></Text>
            </View>
            <View style={styles.button}>
        
                <Button buttontext={'Submit'} onPress={submit}/>
                </View>
            
         

        </View>
    )
}

const  mapStateToProps = (state) => {
    return {};
};

const  mapDispatchToProp =(dispatch)=>({
    setUserLoginData:(userData) =>
        dispatch(userAuthActions.setUserLoginData(userData)),
        
});

OtpScreen.propTypes = {
    navigation:PropTypes.object.isRequired,
    setUserLoginData : PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProp)(OtpScreen);;