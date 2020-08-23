import {API} from 'aws-amplify';


import store from '../Redux/Store/index';

let header;
store.subscribe(() => {
    header = {
        username: store.getState().auth.username,
        token: store.getState().auth.token,
    };
});


export const CaseDetails = async(body) =>{
    return API.get('wakilApi', '/v1/case/detail', {
        queryStringParameters:{case_id:body.case_id},
        headers:header,
    }).then((data)=>data.data).catch(err=>err)
};