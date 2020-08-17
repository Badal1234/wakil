import { Platform } from 'react-native';

import { name,version } from '../../package.json';

//const env = process.env.NODE_ENV;


//SET ENVIRONMENT
//const setEnv = env !== 'development';



export default {
    UCCaccheKeyStore : 'UCLibReduxStore',
    USER_AGENT : `${name}/${version} Dalvik/${version} (Unix; U; ${(Platform.OS === 'ios' ? 'Ios' :'Android')} ;  Build/)`,   

    Colors: {
        Primary:'#6a3093',
        Secondary:'#a044ff',
        LightGrey:'#969696',
        BorderGrey:'#e3e3e3',
        Error:'#f7f300',
        LightWhite: '#E5E5E5',
    },
    
};
