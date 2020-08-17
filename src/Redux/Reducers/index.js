/**
 * Created By Sukumar Abhijeet 20/05/2020
 */

import { USER_LOGOUT } from '../Constants';
import AsyncStorage from '@react-native-community/async-storage';
import Config from '@Config/default';

import { persistCombineReducers } from 'redux-persist';
import netInfoReducer from './netInfoReducer';
import authReducer from './userAuthReducer';
import caseReducer from './caseReducer'

const {UCCaccheKeyStore} = Config;

const config = {
    key: UCCaccheKeyStore,
    storage:AsyncStorage,
    // blacklist: [
    //     'netInfo',
    // ],
};

const appReducer = persistCombineReducers(config, {
    netInfo:netInfoReducer,
    auth : authReducer,
    case : caseReducer,
});

const  rootReducer = (state, action) => {
    if (action.type === USER_LOGOUT) {
        state = undefined;
    }
  
    return appReducer(state, action);
};

export default rootReducer;
