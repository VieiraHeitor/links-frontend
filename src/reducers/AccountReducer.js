import {SIGN_UP, SIGN_IN, SIGN_OUT} from '../actions/AccountActions';
import {setAccount, setToken, setRefreshToken, removeAccount, removeToken, removeRefreshToken} from '../helpers/account';


const initialState ={
    account :null,
};


export default function(state = initialState, action){
    const {type, payload} = action;




    switch(type){
        case SIGN_IN:
        case SIGN_UP:
            const response = payload ? payload.data :null;
            const account = response ? response.data :null;
            const metadata = response ? response.metadata :null;


            const token = metadata ? metadata.token :null;
            const refreshtoken = metadata ? metadata.token :null;


            if (account) setAccount(account);
            if (token) setToken(token);
            if (refreshtoken) setRefreshToken(refreshtoken);
            
            return {...state, account}
        case SIGN_OUT:
            removeAccount();
            removeToken();
            removeRefreshToken();
            
            return {...initialState, account : null}
        default:
            return state;
        }
}