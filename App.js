/* eslint-disable no-console */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Router from './src/Router/index';
import reduxStore from '@store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
export const reduxPersistStore = persistStore(reduxStore); 
import config from './aws-exports';
import Amplify from 'aws-amplify';

Amplify.configure(config)



const  App = ()=>{
    return(
        <Provider store={reduxStore}>
            <PersistGate persistor={reduxPersistStore}>
                <Router />
            </PersistGate>
        </Provider>
        
    );
};
export default App;