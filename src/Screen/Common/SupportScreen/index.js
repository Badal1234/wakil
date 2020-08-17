import React from 'react';
import {SafeAreaView,View,TouchableOpacity,Text} from 'react-native';
import ScreenHeader from '@Components/ScreenHeader';
import { styles } from './styles';

const SupportScreen = () => {

    return(
        <SafeAreaView>
            <ScreenHeader {...{headerName:'Support'}} />
            <View style={styles.container}>
                <TouchableOpacity  style={styles.card}>
                    <Text style={styles.text}>
                        Faq
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <Text style={styles.text}>Ask a Question</Text>
                    
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <Text style={styles.text}>
                        Privacy Policy

                    </Text>
                   
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
};

export default SupportScreen;