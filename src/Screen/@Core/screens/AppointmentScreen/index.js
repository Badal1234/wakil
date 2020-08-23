/* eslint-disable no-unused-vars */
import React,{useState, useEffect} from 'react';
import {View,Text,TouchableOpacity,TextInput, Button,TouchableHighlight} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Config from '@Config/default';
import {styles} from './styles';
import {Calendar} from 'react-native-calendars';
import { ScrollView } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import UCButton from '../../../../@Components/UCButton';
import { moderateScale } from 'react-native-size-matters';
import * as caseActions from '@Actions/caseAction';
import { connect } from 'react-redux';

const {Colors:{Primary,Secondary}} = Config;
const month = new Date().getMonth().toString().padStart(2,'0')

export const AppointmentScreen = ({navigation,caseLoad,caseData,state}) =>{
    const [appointDate,setAppointDate] = useState(`${new Date().getFullYear()}-${month}-${new Date().getDate()}`);
    const [showCalender,setCalender] = useState(false);
    const [presentDate, setPresentDate] = useState('');
    const [maxDate,setMaxDate] = useState('');
    const [cases,setCases] = useState(caseData);
    const [case_no,set_no] = useState();

    useEffect((data)=>{
        caseLoad({date:appointDate,case_no:case_no});
        
    },[appointDate,case_no]);
    console.log(caseData)

    const data = [
        {
            'name':'aaa/213/2020',
            'court_name':'acrfdnfdghijgrijhife',
            'vs1':'sid',
            'vs2':'badal',
            'ref':'11/20/1010'
        },
        {
            'name':'Case Details',
            'time':'11/20',
        },
        {
            'name':'Case Details',
            'time':'11/20',
        },
        {
            'name':'Case Details',
            'time':'11/20',
        },
        {
            'name':'Case Details',
            'time':'11/20',
        },
       
    
    ];
    const leftContent = <Text>Pull to activate</Text>;

    const rightButtons = [
        <TouchableHighlight><Text>Button 1</Text></TouchableHighlight>,
        <TouchableHighlight><Text>Button 2</Text></TouchableHighlight>
    ];


    const body = (item) =>{
        console.log(item)
        return(
            <TouchableOpacity onPress={()=>navigation.navigate('PatientScreen',{case:item})} style={styles.card}>
                <View style={styles.profile}>
                    <View style={{flexDirection:'row',marginTop:moderateScale(10)}}>
                        <Text style={styles.name}>
                       case - No  
                        </Text>
                        <View style={styles.bar}></View>
                        <Text style={styles.name}>
                            {item.case_no}
                        </Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:moderateScale(10)}}>
                        <Text style={styles.name}>
                       court_name  
                        </Text>
                        <View style={styles.bar}></View>
                        <Text style={styles.name}>
                            {item.court_name}
                        </Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:moderateScale(10)}}>
                        <Text style={styles.name}>
                       reference  
                        </Text>
                        <View style={styles.bar}></View>
                        <Text style={styles.name}>
                            {item.ref}
                        </Text>
                    </View>

                </View>
                <View style={styles.info}>
                    <Text>
                        {item.time}
                    </Text>

                </View>

            </TouchableOpacity>
        );
    };
    return(
        <View style={{flex:1}}>
            <LinearGradient colors={[Primary,Secondary]} end={{x:0.8,y:0.7}} start={{x:0.2,y:0.7}} style={styles.upper}>
                <Text style={styles.header}>
                    Your Cases
                </Text>

            </LinearGradient>
            <View style={styles.lower}>
                <TouchableOpacity onPress={()=>setCalender(true)} style={styles.chooseDate}>
                    <Text style={styles.name}>
                        {`${appointDate}`}
                    </Text>
                </TouchableOpacity>
                <View>
                    <TextInput onChangeText={(text)=>{set_no(text);}} placeholder={'Enter case number if want'} style={styles.input} />
                </View>
                <View style={{width:'90%',marginTop:moderateScale(10)}}>
                    <UCButton buttontext={'Search'} />
                </View>

                
                <Modal                 
                    animationIn={'slideInDown'}
                    animationInTiming={350}
                    animationOut={'slideOutUp'}
                    dismissable={true}
                    hasBackdrop={true}
                    hideModalContentWhileAnimating={true}
                    isVisible={showCalender}
                    onBackdropPress={()=>setCalender(false)}
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
                                    monthFormat:'yyyy DD MM',
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
                <ScrollView contentContainerStyle={styles.list} showsVerticalScrollIndicator={false} >
                    {
                        caseData.map(item=>(body(item)))
                    }
                </ScrollView>


              
             
            </View>
        </View>
    );
};

AppointmentScreen.propTypes = {
    navigation:PropTypes.object.isRequired,
};

const  mapStateToProps = (state) => {
    return {
        state: state,
        caseData: state.case.caseData,
        isLoading: state.case.isLoading,
        isError: state.case.isError
    };
};

const  mapDispatchToProp =(dispatch)=>({
    caseLoad:(userData) =>
        dispatch(caseActions.caseLoad(userData)),
        
});



export default connect(mapStateToProps, mapDispatchToProp)(AppointmentScreen);