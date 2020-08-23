import {CASE_LOADED,CASE_LOADING,CASE_LOAD_ERROR, CASE_REGISTER_PROGRESS, CASE_REGISTER_FAIL,CASE_REGISTER_SUCCESS, CASE_DETAILS_SUCCESS, CASE_DETAILS_ERROR} from '../Constants/case.constant';
import {API,Auth} from 'aws-amplify';
let header;
Auth.currentAuthenticatedUser()
    .then(user => {header = {username:user.username,token:user.signInUserSession.accessToken.jwtToken};});



export const loaded = (userData) =>{
    return {
        type:CASE_LOADED,
        userData

    };
};

export const loading = () =>{
    return {
        type:CASE_LOADING

    };
};

export const fail = (error) =>{
    return {
        type:CASE_LOAD_ERROR,
        error

    };
};
export const caseLoad = (body) =>{
    return dispatch =>{
        dispatch(loading());
        API.get('wakilApi', '/v1/case/getList/', {
            queryStringParameters:{date:body.date,case_no:body.case_no},
            headers:header,
        })
            .then((data)=>{
                console.log(data.data);
                dispatch(loaded(data.data));}).catch(error=>{
                console.log(error);
                dispatch(fail(error));});
    };

};

export const progress = () =>{
    return {
        type:CASE_REGISTER_PROGRESS

    };
};

export const cancell = (error) =>{
    return {
        type:CASE_REGISTER_FAIL,
        error
    };

};

export const success = () =>{
    return {
        type:CASE_REGISTER_SUCCESS
    };


}; 

export const caseRegister = (body) =>{
    return dispatch =>{
        dispatch(progress());
        API.post('wakilApi', '/v1/case/register/', {
            headers:header,
            body: body
        })
            .then(response => {
                dispatch(success());
            })
            .catch(error => {
                
                dispatch(cancell(error.response));
            });

    };
};

export const DetailsSuccess = (userData) =>{
    return {
        type:CASE_DETAILS_SUCCESS,
        userData
    };
};

export const DetailsError = (error) => {
    return {
        type:CASE_DETAILS_ERROR,
        error
    };
};

export const caseForward = (body) =>{
    console.log('aa');
    console.log(body);
    return dispatch => {
        API.post('wakilApi', '/v1/case/forward', {
            headers:header,
            body: body
        })
            .then(()=>dispatch(success()))
            .catch((error)=>dispatch(cancell(error)));
    };
};

export const getCaseDetails = (body) => {
    return dispatch => {
        API.get('wakilApi', `/v1/case/detail/${body.case_id}`, {
            
            headers:header,
        })
            .then((data)=>dispatch(DetailsSuccess(data.data)))
            .catch(error =>console.log(error));
    };
};

export const CaseDelete = (body) =>{
    return dispatch => {
        API.get('wakilApi', '/v1/case/delete', {
            queryStringParameters:{date:body.date,case_id:body.case_id},
            headers:header,
        });
    };
};