/* eslint-disable no-unused-vars */
import React,{useState, useEffect} from 'react';
import {View,Text,TouchableOpacity,TextInput, Button,TouchableHighlight} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Config from '@Config/default';
import {styles} from './styles';
import {Calendar} from 'react-native-calendars';
import { ScrollView } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal'
import UCButton from '../../../../@Components/UCButton';
import { moderateScale } from 'react-native-size-matters';
import Swipeable from 'react-native-swipeable';

const {Colors:{Primary,Secondary}} = Config;

export const AppointmentScreen = ({navigation,caseLoad,caseData}) =>{


    const [appointDate,setAppointDate] = useState(`${new Date().getFullYear}-${new Date().getMonth()}-${new Date().getDate()}`);
    const [showCalender,setCalender] = useState(false);
    const [presentDate, setPresentDate] = useState('');
    const [maxDate,setMaxDate] = useState('');
    const [cases,setCases] = useState(caseData)
    const [case_no,set_no] = useState()

    useEffect((data)=>{
        caseLoad({date:appointDate,case_no:case_no})
        
    },[])

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
        return(
            <TouchableOpacity onPress={()=>navigation.navigate('PatientScreen')} style={styles.card}>
                <View style={styles.profile}>
                    <View style={{flexDirection:'row',marginTop:moderateScale(10)}}>
                    <Text style={styles.name}>
                       case  
                    </Text>
                    <View style={styles.bar}></View>
                    <Text style={styles.name}>
                        {item.name}
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
                <TouchableOpacity style={styles.chooseDate}>
                    <Text style={styles.name}>
                        {`${appointDate.getDate()}-${appointDate.getMonth()}-${appointDate.getFullYear()}`}
                    </Text>
                </TouchableOpacity>
                <View>
                    <TextInput style={styles.input} placeholder={'Enter case number if want'} onChangeText={(text)=>{set_no(text)}}/>
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
                        cases.map(item=>(body(item)))
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