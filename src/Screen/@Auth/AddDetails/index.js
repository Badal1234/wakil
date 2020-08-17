/* eslint-disable no-unused-vars */

import React,{useRef,useState} from 'react';

import { 
    View, Text,ScrollView,
    TextInput, TouchableOpacity ,KeyboardAvoidingView 
} from 'react-native';

import PropTypes from 'prop-types';
import { moderateScale} from 'react-native-size-matters';
import Config from '@Config/default';
import { styles } from './styles';
import GlobalStyles from '@Styles/GlobalStyles';
import UCButton from '@Components/UCButton';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-date-picker';
import LinearGradient from 'react-native-linear-gradient';

const {Colors:{LightGrey,Primary, Secondary}} = Config;

const AccountSetupScreen= ({...props}) =>{
    const [showCalendar,setShowCalendar] = useState(false);
    const [date] = useState(new Date());
    const [showdate, setDate] = useState('Date Of Birth');
    const [name,set_name] = useState('');
    const [number,set_number] = useState('');
    const [address,set_address] = useState('');
    const [department,set_department] = useState('');
    const [hospital,set_hospital] = useState('');
    const [count,set_count] = useState(0);

    const {navigation} = props;
    var ref1 = useRef();
    var ref4 = useRef();
    const renderCalendar = () =>{
        return(
            <LinearGradient
                colors={[Primary, Secondary]} 
                end={{x: 1, y: 0}}
                start={{x: 0, y: 0}}
                style={styles.calendarBox}
            >
                <DatePicker
                    date={date}
                    fadeToColor={'none'}
                    mode={'date'}
                    onDateChange={setDate}
                    style={{height:moderateScale(300)}}
                    textColor={'#ffffff'}
                />
            </LinearGradient>

        );
    };
    const BirthModal = () =>{
        setShowCalendar(true);
    };
    
    return(
        <>
            <KeyboardAvoidingView behavior={'height'} style={GlobalStyles.AppContainer}>
                
                <ScrollView contentContainerStyle={styles.upperContainer} showsVerticalScrollIndicator={false}>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.createText}>Create An Account</Text>
                    </View> 
                    <View style={styles.inputWrapper1}>
                        <View style={GlobalStyles.TextInputBox}>
                            <TextInput
                                onChangeText={(text)=>set_name(text)}
                                onSubmitEditing={()=>{ref1.focus();
                                    set_count(count+1);}} 
                                placeholder="Full name"
                                placeholderTextColor={'#adacac'}
                                returnKeyType={'next'}
                                style={{width:'90%',marginLeft:5,height:moderateScale(40)}}
                            />
                        </View>
                        <View style={[GlobalStyles.TextInputBox,{marginTop:30}]}>
                            <TextInput
                                onChangeText={(text)=>set_number(text)}
                                onSubmitEditing={()=>{ref4.focus;
                                    set_count(count+1);}} 
                                placeholder="Contact Number"
                                placeholderTextColor={'#adacac'}
                                returnKeyType={'next'}
                                style={{width:'90%',marginLeft:5,height:moderateScale(40)}}
                            />
                        </View>
                        <TouchableOpacity onPress={BirthModal} style={styles.input}>
                            <Text style={{color:showdate == 'Date Of Birth' ? LightGrey : '#000'}}>
                                {
                                    showdate == 'Date Of Birth'? 
                                        showdate : 
                                        showdate.getDate() +' - '+ showdate.getMonth()+' - '+showdate.getFullYear()
                                }
                            </Text>
                        </TouchableOpacity>
                        <View style={[GlobalStyles.TextInputBox,{marginTop:30}]}>
                            <TextInput
                                onChangeText={(text)=>set_address(text)}
                                onSubmitEditing={()=>{ref4.focus;
                                    set_count(count+1);}}
                                placeholder="Address"
                                placeholderTextColor={'#adacac'}
                                returnKeyType={'next'}
                                style={{width:'90%',marginLeft:5,height:moderateScale(40)}}
                            />
                        </View>
                        <View style={[GlobalStyles.TextInputBox,{marginTop:30}]}>
                            <TextInput
                                onChangeText={(text)=>set_department(text)}
                                onSubmitEditing={()=>{ref4.focus;
                                    set_count(count+1);}} 
                                placeholder="Department"
                                placeholderTextColor={'#adacac'}
                                returnKeyType={'next'}
                                style={{width:'90%',marginLeft:5,height:moderateScale(40)}}
                            />
                        </View>
                        <View style={[GlobalStyles.TextInputBox,{marginTop:30}]}>
                            <TextInput
                                onChangeText={(text)=>set_hospital(text)}
                                onSubmitEditing={()=>{ref4.focus;
                                    set_count(count+1);}}
                                placeholder="Hospital"
                                placeholderTextColor={'#adacac'}
                                returnKeyType={'next'}
                                style={{width:'90%',marginLeft:5,height:moderateScale(40)}}
                            />
                        </View>

                    </View>      
                </ScrollView>
                <View style={styles.buttonWrapper}>
                    <UCButton buttontext={'submit'} onPress={()=>navigation.navigate('Home')} />
                </View> 
   
            </KeyboardAvoidingView>
            <Modal
                animationIn={'slideInLeft'}
                animationInTiming={350}
                animationOut={'slideOutRight'}
                dismissable={true}
                hasBackdrop={true}
                hideModalContentWhileAnimating={true}
                isVisible={showCalendar}
                onBackButtonPress={()=>setShowCalendar(false)}
                onBackdropPress={()=>setShowCalendar(false)}
                style={{padding:0,margin:0,position:'absolute',top:0}}
                useNativeDriver={true}
            >
                {renderCalendar()}
            </Modal>
        </>
    );
};

AccountSetupScreen.propTypes = {
    navigation:PropTypes.object.isRequired,
};

export default AccountSetupScreen;

