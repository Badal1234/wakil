import React from 'react';
import {SafeAreaView,View,Text,TouchableOpacity} from 'react-native';
import {styles} from './styles';
import ScreenHeader from '@Components/ScreenHeader';
const data = [
    {
        date:'Today',
        notification:[
            {
                time:'5.00 PM',
                message:'You have new Booking'
            },
            {
                time:'4.00 PM',
                message:'Your payment has been done'
            }
        ]
    }
];
const NotificationScreen = () => {

    const notificationRender = (item) =>{
        return(
            <TouchableOpacity style={styles.notification}>
                <Text style={styles.message}>
                    {item.message}
                </Text>

                <Text style={styles.time}>
                    {item.time}
                </Text>
            </TouchableOpacity>
        );
    };

    const body = (item) => {
        return(
            <View style={styles.container}>
                <View>
                    <Text style={styles.datetext}>{item.date}</Text>
                </View>
                <View style={styles.container}>
                    {
                        item.notification.map(item=>(
                            notificationRender(item)
                        ))
                    }
                </View>
            </View>
        );
    };
    return(
        <SafeAreaView>
            <ScreenHeader {...{headerName:'Notification',showArrow:false}} />
            <View style={styles.body}>
                {
                    data.map(item=>(
                        body(item)
                    ))
                }
            </View>
        </SafeAreaView>
    );
};

export default NotificationScreen;