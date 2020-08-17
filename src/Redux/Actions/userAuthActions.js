import { SET_USER_LOGIN_DATA, SET_INTRO_SCREEN } from '../Constants/userAuth.constant';

export const setUserLoginData =(userData) =>{
    return{
        type: SET_USER_LOGIN_DATA,
        userData
    };
};

export const setIntroScreen = (value) =>{
    return{
        type: SET_INTRO_SCREEN,
        value
    };
};