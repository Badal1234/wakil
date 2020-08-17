import { UPDATE_NET_CONNECTION } from '../Constants';

export const updateAppNetInfo =(connection) =>{
    return{
        type: UPDATE_NET_CONNECTION,
        connection,
    };
};