import React from 'react';
import {View,TouchableOpacity,Text} from 'react-native';
import ScreenHeader from '@Components/ScreenHeader';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Config from '@Config/default';
import PropTypes from 'prop-types';
import { moderateScale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import {Auth} from 'aws-amplify'
const {Colors:{Primary,Secondary}} = Config;
const DashBoardScreen = ({navigation}) =>{

            // more code working with route53 object
 
    return(
        <View style={{flex:1}}>
            <ScreenHeader {...{headerName:'DashBoard',showArrow:false}} />
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View>
                        <TouchableOpacity onPress={()=>navigation.navigate('AppointmentScreen')} >
                            <LinearGradient
                                colors={[Primary, Secondary]}  end={{x: 1, y: 0}}
                                start={{x: 0.3, y: 0.5}}  style={styles.card}>
                                <Icon color={'#fff'} name ='notes-medical' size={moderateScale(30)} />
                                <Text style={styles.text}>
                                Scheduled Cases
                                </Text>
                            </LinearGradient>
                            

                        </TouchableOpacity>

                    </View>

                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View>
                        <TouchableOpacity onPress={()=>navigation.navigate('ManageScreen')}>
                            <LinearGradient
                                colors={[Primary, Secondary]}  end={{x: 1, y: 0}}
                                start={{x: 0.3, y: 0.5}}  style={styles.card}>
                                <Icon color={'#fff'} name ='clock' size={moderateScale(30)} />
                                <Text style={styles.text}>
                                Add
                                </Text>
                                <Text style={styles.text}>
                            Case
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>

                    </View>
                    <View>

                    </View>

                </View>
            </View>
        </View>
    );
};

DashBoardScreen.propTypes = {
    navigation:PropTypes.object.isRequired,
};

export default DashBoardScreen;