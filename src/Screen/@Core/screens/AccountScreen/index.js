import React from 'react';
import {View,TouchableOpacity,FlatList,Text} from 'react-native';
import LinearGradient  from 'react-native-linear-gradient';
import Config from '@Config/default';
import {styles} from './styles';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
const {Colors:{Primary,Secondary}} = Config;
const AccountScreen = ({navigation}) =>{

    const data =[{
        type:'Personal Information',
        icon:'user'
    },{
        type:'Wallet',
        icon:'wallet'
    },{
        type:'Settings',
        icon:'wrench'
    },{
        type:'About us',
        icon:'user-friends'
    },{
        type:'Support',
        icon:'user-cog',
        route:'SupportScreen'
    }];

    const body = (item) =>{
        return(
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate(item.route)} style={styles.card}>
                    <Icon color={Primary} name={item.icon} size={16} />
                    <Text style={styles.text}>
                        {item.type}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };
    return(
        <LinearGradient colors={[Primary,Secondary]} end={{x:1,y:1}} start={{x:0.4,y:0.4}} style={{flex:1,alignItems:'center'}}>
            <View style={styles.container}>
                <View style={styles.profile}>
                </View>
                <View style={styles.cardholder}>
                    <FlatList data={data} renderItem={({item})=>(body(item))} />
                </View>
            </View>
        </LinearGradient>
    );
};


AccountScreen.propTypes = {
    navigation:PropTypes.object.isRequired,
};

export default AccountScreen;