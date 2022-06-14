import {GET_USERS, SINGLE_USER} from '../types';

const initialState = {
    users:[],
    suser:{},
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_USERS:
        return {
            ...state,
            users:action.payload,
            loading:false
        }

        case SINGLE_USER:
            return{
                ...state,
                suser:action.payload,
                loading:false
            }

        default: return state;
    }

}