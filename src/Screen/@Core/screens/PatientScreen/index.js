/* eslint-disable no-unused-vars */
import React,{useState, useEffect} from 'react';
import { SafeAreaView,View,TouchableOpacity,Text,ScrollView,Linking,Platform,PermissionsAndroid,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';
import { styles } from './styles';
import Config from '@Config/default';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale, scale } from 'react-native-size-matters';
import Display from 'react-native-display';
import UCButton from '@Components/UCButton';
import Modal from 'react-native-modal';
import ScreenHeader from '@Components/ScreenHeader';
import ImagePicker from 'react-native-image-picker';
import {Calendar} from 'react-native-calendars';
import * as caseActions from '@Actions/caseAction';
import { connect } from 'react-redux';
import {CaseDetails} from './../../../../Api/case'
const {Colors:{Primary,Secondary,BorderGrey,LightGrey}} = Config;

const PatientScreen = ({...props}) =>{
    const [appointDate,setAppointDate] = useState(new Date());
    const [showCalender,setCalender] = useState(false);
    const [presentDate, setPresentDate] = useState('');
    const [maxDate,setMaxDate] = useState('');

    const {navigation,caseDelete,caseForward,getCaseDetails,caseDetails} = props
    const [showInfo,setShowInfo] = useState(false);
    const [showAddress, setShowAddress] = useState(false);
    const [showModal,setShowModal] = useState(false);
    const BookingItems = navigation.getParam('BookingItem');
    const [showPrescription,setShowPrescription] = useState(false);
    const [upload,set_upload] = useState(false);
    const [uri,set_uri] = useState(null);
    const CaseData = navigation.getParam('case')
    const {case_id,case_no,date,vs,court_name} = CaseData
    console.log('case',CaseData)
    const checkNavigation = (route) =>{
        if(route === 'Info') setShowInfo(!showInfo);
        else if(route === 'Address') setShowAddress(!showAddress);
        else if(route ==='Prescription')  setShowPrescription(!showPrescription);
        if(route) navigation.navigate(route);
    };

    useEffect(()=>{
        getCaseDetails({case_id:case_id})

    },[])

    const makeACall = (phoneNumber) =>{
        Linking.openURL(`tel:${phoneNumber}`);
    };
    const makeAMessage = (phoneNumber) =>{
        Linking.openURL(`sms:${phoneNumber}`);
    };

    const options = {
        title: 'Select Avatar',
        customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };

    const CaseDelete = () =>{

        caseDelete({date:date,case_id:case_id})

    }

    const CaseForward = () =>{
        setCalender(true)
    }

    const update = () => {
        const month = new Date().getMonth().toString().padStart(2,'0')
        caseForward({
            date:`${new Date().getFullYear()}-${month}-${new Date().getDate()}`,
            case_id:case_id,
            case_no:case_no,
            court_name:court_name,
            reference:CaseDetails.date
        })

    }
    console.log('details',caseDetails)
    const renderInfoBox = (icon,content,route) =>{
        return(
            <TouchableOpacity onPress={()=>checkNavigation(route)} style={styles.contentBox}>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <View style={{borderRightWidth:1,borderRightColor:Primary,width:scale(30),paddingVertical:moderateScale(10)}}>
                            <Icon color={Primary} name={icon} size={16} />
                        </View>
                        <View style={{marginLeft:moderateScale(20)}}>
                            <Text style={styles.infoText}>{content}</Text>
                        </View>
                    </View>
                    <View>
                        <Icon 
                            color={LightGrey} 
                            name={'chevron-right'} 
                            size={16} style={{transform: [{ rotate:route === 'DoctorReview' ? '0deg' :  '90deg'}]}} />
                    </View>
                </View>
                <Display enable={showInfo && route === 'Info'}>
                    <View>
                        <Text style={styles.descText}>
                            {caseDetails.vs.vs1} vs {caseDetails.vs.vs2}
                        </Text>
                    </View>
                </Display>
                <Display enable={showAddress && route === 'Address'}>
                    <View>
                        <Text style={styles.descText}>
                            asdjasjdkjasdjaskdjaskjdjasdkjhsajdhasjkdjkashdjhasjkdhajkdhakjhdjkahdkjahdkhakjdhakjdhajksdha
                            asdjasjdkjasdjaskdjaskjdjasdkjhsajdhasjkdjkashdjhasjkdhajkdhakjhdjkahdkjahdkhakjdhakjdhajksdhaasdasd
                            asdjasjdkjasdjaskdjaskjdjasdkjhsajdhasjkdjkashdjhasjkdhajkdhakjhdjkahdkjahdkhakjdhakjdhajksdha
                        </Text>
                    </View>
                </Display>
            </TouchableOpacity>
        );
    };

    return(
        <SafeAreaView style={{flex:1}}>
            <ScreenHeader {...{headerName:'Details'}} />
        
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <View style={styles.upperContainer}>
                    <View style={{justifyContent:'center',alignItems:'center',paddingTop:moderateScale(20)}}>
    <Text style={styles.doctorName}>{CaseData.case_no}</Text>
                        
                        <View style={{flexDirection:'row',marginTop:moderateScale(10)}}>
                            <View style={styles.callBox}>
                                <TouchableOpacity onPress={()=>CaseDelete()} style={styles.callButton}>
                                    <Icon color={Primary} name={'trash'}  size={20}  />
                                    
                                </TouchableOpacity>
                                <Text>Delete</Text>
                            </View>
                            <View style={styles.locationBox}>
                                <TouchableOpacity onPress={CaseForward} style={[styles.callButton,{backgroundColor:'#fff'}]}>
                                    <Icon color={Primary} name={'long-arrow-alt-right'} size={20} />
                                </TouchableOpacity>
                                <Text>Forward Date</Text>
                            </View>

                        </View>
                        <View style={{marginTop:moderateScale(30),width:'95%',backgroundColor:'#d1d1d1',height:1}} />
                         
                       
                    </View>
                </View>
                <View style={styles.lowerContainer}>
                    {
                        renderInfoBox('user-nurse','Case Information','Info')
                    }
                    {
                        renderInfoBox('hospital','History','Address')
                    }
                    
                </View>
                <View style={{paddingHorizontal:20}}>
                    <UCButton buttontext={'Update'} onPress={update} />

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
                
            </ScrollView>
        </SafeAreaView>
    );
};

PatientScreen.propTypes = {
    BookingItems:PropTypes.object.isRequired,
    navigation:PropTypes.object.isRequired,
};

const  mapStateToProps = (state) => {
    return {
        state: state,
        caseData: state.case.caseData,
        isLoading: state.case.isLoading,
        isError: state.case.isError,
        caseDetails :  state.case.caseDetails
    };
};

const  mapDispatchToProp =(dispatch)=>({
    caseDelete:(userData) =>
        dispatch(caseActions.CaseDelete(userData)),
    caseForward:(userData)=>
        dispatch(caseActions.caseForward(userData)),
    getCaseDetails:(userData)=>{
        dispatch(caseActions.getCaseDetails(userData))
    }    
});



export default connect(mapStateToProps, mapDispatchToProp)(PatientScreen);