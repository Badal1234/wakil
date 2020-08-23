

import {CASE_LOADED,CASE_LOADING,CASE_LOAD_ERROR, CASE_REGISTER_PROGRESS, CASE_REGISTER_SUCCESS, CASE_REGISTER_FAIL,CASE_DETAILS_ERROR,CASE_DETAILS_SUCCESS} from '../Constants/case.constant';
const initialState = {
    loading:true,
    IsError:false,
    caseData:[],
    LastKey:null,
    error:null,
    isSuccess:false,
    isProgress:true,
    caseDetails:{}
};

const caseReducer = (state = initialState,action) =>{
    const {type,userData,LastEvalutedKey,error} = action;

    switch(type){
    case CASE_LOADING:
        return{...state,loading:true};
    case CASE_LOADED:
        if(LastEvalutedKey){
            return{...state, loading:false,caseData:[...caseData,...userData]};  
        }else{
            return{...state,loading:false,caseData:userData};
        }
    case CASE_LOAD_ERROR:
        return{...state,loading:false,IsError:true,error:error};   
            
    case CASE_REGISTER_PROGRESS:
        return {...state};
    case CASE_REGISTER_SUCCESS:
        return {...state,isSuccess:true,isProgress:false};
    case CASE_REGISTER_FAIL:
        return {...state,isSuccess:false,isProgress:false,isError:true,error:error};
    case CASE_DETAILS_SUCCESS:
        return {...state,isSuccess:true,caseDetails:userData}
    case CASE_DETAILS_ERROR:
        return {...state,isSuccess:false,isError:true,error:error}           
    default :
        return state             
              
    }

};

export default caseReducer