/* eslint-disable no-unused-vars */
import React,{useState} from 'react';
import {View,TouchableOpacity,Text,FlatList,TextInput,ScrollView} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Config from '@Config/default';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import Display from 'react-native-display';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { moderateScale } from 'react-native-size-matters';
import UCButton from '../../../../@Components/UCButton';
import Modal from 'react-native-modal'
import * as caseActions from '@Actions/caseAction';
import { connect } from 'react-redux';
import { set } from 'react-native-reanimated';

const {Colors:{Primary,Secondary,LightGrey}} = Config;

const ManageScreen = ({caseRegister}) =>{
    const [appointDate,setAppointDate] = useState('');
    const [showCalender,setcalender] = useState(false)
    const [presentDate, setPresentDate] = useState('');
    const [maxDate,setMaxDate] = useState('');
    const [case_number,set_number] = useState('')
    const [case_description,set_description] = useState('')
    const [vs1,set_vs1] = useState('')
    const [vs2,set_vs2]  = useState('')
    const [court_name,set_name] = useState('')
    const [time,set_time] = useState( [{
        time:'5.00PM',
        type:'Active'
    },
    {
        time:'5.00PM',
        type:'Inactive'
    },
    {
        time:'5.00PM',
        type:'Active'
    },
    {
        time:'5.00PM',
        type:'Active'
    },
    {
        time:'5.00PM',
        type:'Active'
    },]);

    const update = (index,type) =>{
        var newArr = [...time];
        newArr[index].type = type==='Active'?'Inactive':'Active';
        set_time(newArr);
    };
    //console.log(appointDate)

    const submit = () =>{
        caseRegister({case_no:case_number,
            case_description:case_description,
            date:appointDate,
            court_name:court_name,
            vs1:vs1,
            vs2:vs2})
        
    }
    const body = (item,index) =>{
        return(
            <View style={{margin:moderateScale(10)}}>
                <TouchableOpacity 
                    onPress={()=>update(index,item.type)} 
                    style={{...styles.holder,...{backgroundColor:item.type==='Active'?Secondary:'#fff'}}}>
                    <Text style={{color : item.type === 'Active' ? '#fff' : '#000'}}>
                        {item.time}
                    </Text>
                </TouchableOpacity>
                <Display enable={item.type === 'Active'}>
                    <Icon color={'green'} name = 'check' style={{alignSelf:'center'}} />
                </Display>
            </View>
        );
    };
    return(
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <LinearGradient colors={[Primary,Secondary]} end={{x:0.8,y:0.7}} start={{x:0.2,y:0.7}} style={styles.upper}>
                <Text style={styles.header}>
                    Manage Schedule
                </Text>
            </LinearGradient>
            <Modal                 
               animationIn={'slideInDown'}
                animationInTiming={350}
                animationOut={'slideOutUp'}
                dismissable={true}
                hasBackdrop={true}
                hideModalContentWhileAnimating={true}
                isVisible={showCalender}
                onBackdropPress={()=>setcalender(false)}
                style={{padding:0,margin:0,position:'absolute',top:0}}
                useNativeDriver={true}>
                <View style={styles.lower}>
                <View style={styles.calendarcontainer}>
                    <Calendar
                        current={appointDate}
                        markedDates={{
                            [appointDate]: {
                                customStyles: {
                                    container: {
                                        backgroundColor: '#fff'
                                    },
                                    text: {
                                        color: Primary,
                                        fontWeight: 'bold'
                                    },
                                },
                            },
                        }}
                        markingType={'custom'}
                        maxDate={maxDate}
                        minDate={presentDate}
                        onDayPress={(day) => {setAppointDate(day.dateString);}}
                        style={styles.calender}
                        theme={{
                            calendarBackground:'#00000000',
                            textSectionTitleColor: 'black',
                            todayTextColor:Secondary,
                            monthFormat:'DD MM yyyy',
                            selectedDayTextColor:Primary,
                            selectedDayBackgroundColor:Secondary,
                            dayTextColor:'black',
                            monthTextColor: 'black',
                            arrowColor: 'black',
                            textDisabledColor:'black',
                        }}
                    />
                </View>
            </View>


            </Modal>


            <ScrollView style={styles.time} showsVerticalScrollIndicator={false}>
                <View>
                    <TouchableOpacity style={styles.date} onPress={()=>setcalender(true)}>
                        <Text>
                            {appointDate==''?'Pick Date':appointDate}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TextInput style={styles.caseNumber} placeholder={'Case number'} onChangeText={(text)=>(set_number(text))}/>
                    </View>  
                    <View>
                    <TextInput style={styles.caseNumber} placeholder={'Court Name'} onChangeText={(text)=>set_name(text)}/>
                    </View> 
                    <View style={{flexDirection:'row',marginTop:moderateScale(20)}}>
                        <TextInput style={styles.input} onChangeText={(text)=>set_vs1(text)}/>
                        <Text style={styles.text}>
                            vs
                        </Text>
                        <TextInput style={styles.input} onChangeText={(text)=>set_vs2(text)}/>
                    </View>
                    <View >
                        <TextInput style={styles.caseDescription} placeholder={'Case Description'} multiline onChangeText={(text)=>set_description(text)}/>
                        </View>          
            </ScrollView>
            <View style={{width:'90%',marginTop:moderateScale(60)}}>
                <UCButton buttontext={'Save Now'} onPress={()=>submit()}/>
            </View>

        </View>
    );
};

const  mapStateToProps = (state) => {
    return {};
};

const  mapDispatchToProp =(dispatch)=>({
    caseRegister:(userData) =>
        dispatch(caseActions.caseRegister(userData)),
        
});



export default connect(mapStateToProps, mapDispatchToProp)(ManageScreen);