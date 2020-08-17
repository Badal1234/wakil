/**
 * Create By @name Sukumar_Abhijeet on 13/6/2020,
 */

import React from 'react';
import { Text } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import PropTypes from 'prop-types';
import Display from 'react-native-display';
import Config from '@Config/default';

const {Colors:{Error}} = Config;

const ErrorBox = ({enable,errorMessage}) =>{
    return(
        <Display enable={enable}>
            <Text style={{color:Error,fontSize:moderateScale(10)}}>* {errorMessage}</Text>
        </Display>
    );
};

ErrorBox.propTypes = {
    enable:PropTypes.bool.isRequired,
    errorMessage:PropTypes.string.isRequired,
    navigation:PropTypes.object.isRequired,
};

export default ErrorBox;