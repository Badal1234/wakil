import { UPDATE_NET_CONNECTION } from '../Constants';

const initialState = {
    netConnected:true,
};

const  netInfoReducer = (state = initialState,action) =>{
    const {type,connection} = action;
    switch(type){
    case  UPDATE_NET_CONNECTION:
        return {...state,netConnected:connection}; 
    }
    return state;
};

export default netInfoReducer;