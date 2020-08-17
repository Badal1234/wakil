/**
 * Created by @name Sukumar_Abhijeet on 9/05/2020
 */
import React, {Component} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CenterTabIcon from '../CenterTabIcon';
import Config from '@Config/default';

const {Colors:{Secondary}} = Config;

class TabImages extends Component {
    static propTypes = {
        focused:PropTypes.bool,
        tabOption:PropTypes.number,
    };

    renderTabImage=(option,focused)=>{
        switch(option){
        case 1 :
            if(focused) 
                return(
                    <Icon adjustsFontSizeToFit={true}  color={Secondary} name='clinic-medical' size={20} />
                ); 
            return (
                <Icon adjustsFontSizeToFit={true}  color={'#000'} name='clinic-medical' size={20} />
            );

        case 2 :
            if(focused) 
                return(
                    <CenterTabIcon focused={focused} />
                ); 
            return (
                <CenterTabIcon focused={focused} />
            );
        case 3 :
            if(focused) 
                return(
                    <Icon adjustsFontSizeToFit={true} color={Secondary}  name='bell' size={20} />
                ); 
            return (
                <Icon adjustsFontSizeToFit={true}  name='bell' size={20} />
            );
        }
       
    }
    render() {
        const {tabOption,focused} = this.props;
        return (
            <View style={{justifyContent:'center',alignItems:'center'}}>
                {
                    this.renderTabImage(tabOption,focused)
                }
            </View>
            
        );
    }
}
export default TabImages;