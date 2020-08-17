
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { moderateScale, } from 'react-native-size-matters';
import TabImages from '@Components/TabImages';
import Config from '@Config/default';
import HomeScreen from '@Core/screens/DashBoardScreen';
import AccountScreen from '@Core/screens/AccountScreen';
import AppointmentScreen from '@Core/screens/AppointmentScreen';
import ManageScreen from '@Core/screens/ManageScreen';
import PatientScreen from '@Core/screens/PatientScreen';
import NotificationScreen from '@Core/screens/NotificationScreen';
import SupportScreen from '../../Screen/Common/SupportScreen';
const TABS = {
    Home:HomeScreen,
    Account:AccountScreen,
    Notification:NotificationScreen
};

const getTabBarIcon = (navigation, focused,) => {
    const {routeName} = navigation.state;
    let tabOption = '';
    if (routeName === 'Home') {
        tabOption = 1;
    } else if (routeName === 'Account') {
        tabOption = 2;
    } else if (routeName === 'Notification') {
        tabOption = 3;
    }
    return <TabImages focused={focused} tabOption={tabOption} />;
};

export const checkNavConfig = () => {

    const {
        Colors: { LightGrey,LightWhite},
    } = Config;

    let navConfigs = {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused}) => getTabBarIcon(navigation, focused),
        }),
        transitionConfig: () => ({
            transitionSpec: {
                duration: 0,
            },
        }),
        tabBarOptions: {
            labelStyle: {
                fontSize: moderateScale(10),
                // fontFamily: regular,
            },
            style: {
                backgroundColor: LightWhite,
                paddingTop: moderateScale(4),
                borderTopColor: 'transparent',
            },
            
            renderIndicator: () => null,
            showIcon: true,
            activeTintColor: '#FFB400',
            inactiveTintColor: LightGrey,
            showLabel:false
        },
        tabBarPosition: 'bottom',
        shifting: true,
        swipeEnabled: false,
        animationEnabled: false,
        lazy:true,
    };

    return navConfigs;
};

export const _tabNavigator = () => {
    const BottomTabs = createBottomTabNavigator(TABS, checkNavConfig());
    return createStackNavigator(
        {
            Home: {screen: BottomTabs},
            AppointmentScreen:{screen:AppointmentScreen},
            ManageScreen:{screen:ManageScreen},
            PatientScreen:{screen:PatientScreen},
            SupportScreen:{screen:SupportScreen}
           
            
        },
        {
            defaultNavigationOptions: {
                headerShown: false,
            }
        },
    );
};
const MainTabs =createAppContainer(_tabNavigator());
export default MainTabs;
