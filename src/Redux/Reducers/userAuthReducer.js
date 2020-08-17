/* eslint-disable no-unused-vars */
import { SET_USER_LOGIN_DATA, SET_INTRO_SCREEN } from '../Constants/userAuth.constant';


const initialState = {
    isLoggedIn:false,
    userData:{},
    token:{},
    introScreen:false
};



const authReducer = (state = initialState,action) =>{
    const {type,userData={},value} = action;

    switch(type){
    case  SET_USER_LOGIN_DATA:{
        return { ...state,introScreen:false,isLoggedIn:true,...userData };
    } 

    case SET_INTRO_SCREEN:{
        return {...state,introScreen:value};
    }
    
    default:
        return state;
    }

};

export default authReducer;