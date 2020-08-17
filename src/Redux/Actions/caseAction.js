import {CASE_LOADED,CASE_LOADING,CASE_LOAD_ERROR, CASE_REGISTER_PROGRESS, CASE_REGISTER_FAIL, CASE_REGISTER_SUCCESS} from '../Constants/case.constant'
import {API} from 'aws-amplify'


import store from '../Store/index';

let header;
let info;
store.subscribe(() => {
    console.log(store.getState())
  header = {
    username: store.getState().auth.username,
    token: store.getState().auth.token,
  }
});

export const loaded = (casedata) =>{
    return {
        type:CASE_LOADED,
        caseData

    }
}

export const loading = () =>{
    return {
        type:CASE_LOADING

    }
}

export const fail = () =>{
    return {
        type:CASE_LOAD_ERROR,
        error

    }
}
export const caseLoad = (body) =>{
    return dispatch =>{
        dispatch(loading())
        API.post('wakilApi', `/v1/case/getList/${body.date}/${body.case_no}`, {
            headers:header,
        }).then((data)=>dispatch(loaded(data))).catch(error=>dispatch(fail(error)))
    }

}

export const progress = () =>{
    return {
        type:CASE_REGISTER_PROGRESS

    }
}

export const cancell = (error) =>{
    return {
        type:CASE_REGISTER_FAIL,
        error
    }

}

export const success = () =>{
    return {
        type:CASE_REGISTER_SUCCESS
    }


} 

export const caseRegister = (body) =>{
    console.log(body)
    console.log(header)
    return dispatch =>{
        dispatch(progress())
        API.post('wakilApi', '/v1/case/register/', {
            headers:header,
            body: body
        })
            .then(response => {
                console.log(response)
                dispatch(success())
            })
            .catch(error => {
                console.log(error)
                dispatch(cancell(error.response))
            })

    }
}

