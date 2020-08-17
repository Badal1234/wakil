import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignInScreen from '@Auth/SignIn';
import SignUpScreen from '@Auth/SignUp';
import AddDetailScreen from '@Auth/AddDetails';
import SplashScreen from '../../Screen/Common/SplashScreen';
import OtpScreen from '@Auth/OTP'
const Auth  = createStackNavigator({
    SignIn:{
        screen:SignInScreen,
        navigationOptions:{
            headerShown:false
        }
    },
    SignUp:{
        screen:SignUpScreen,
        navigationOptions:{
            headerShown:false
        }
    },
    AddDetails:{
        screen:AddDetailScreen,
        navigationOptions:{
            headerShown:false
        }
    },
    SplashScreen:{
        screen:SplashScreen,
        navigationOptions:{
            headerShown:false
        }

    },
    OtpScreen:{
        screen:OtpScreen,
        navigationOptions:{
            headerShown:false
        }

    }
},{
    initialRouteName:'SplashScreen'
});

export default createAppContainer(Auth);