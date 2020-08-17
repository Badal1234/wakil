import {  createSwitchNavigator, createAppContainer} from 'react-navigation';
import Authentication from './Auth';
import MainTabs from './Core';
export default createAppContainer( createSwitchNavigator({
    Auth:{ screen: Authentication },
    CoreStack:{ screen: MainTabs },
},
{
    initialRouteName:'Auth'
}));
