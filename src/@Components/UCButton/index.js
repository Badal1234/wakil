import React from 'react';
import {TouchableOpacity,Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import propTypes from 'prop-types';
import Config from '@Config/default';
const {Colors:{Primary,Secondary}} = Config;
function UCButton({onPress,buttontext}){
    return(
       
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <LinearGradient colors={[Primary,Secondary]} end={{x:0.8,y:0.7}} start={{x:0.2,y:0.7}} style={styles.container} >
                <Text style={styles.text}>{buttontext.toUpperCase()}</Text>
            </LinearGradient>
        </TouchableOpacity>
        
    );
}

UCButton.propTypes = {
    buttontext : propTypes.string.isRequired,
    onPress : propTypes.func.isRequired,
    
};

export default UCButton;