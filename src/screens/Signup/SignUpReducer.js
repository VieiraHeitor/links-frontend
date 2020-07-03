import {SIGN_UP} from './SignUpActions';
import {setAccount, setToken, setRefreshToken} from '../../helpers/account';


const initialState ={
    account :null,
};


export default function(state = initialState, action){
    const {type, payload} = action;




    switch(type){
        case SIGN_UP:
            const response = payload ? payload.data :null;
            const account = response ? response.data :null;
            const metadata = response ? response.metadata :null;


            const token = metadata ? metadata.token :null;
            const refreshtoken = metadata ? metadata.token :null;


            if (account) setAccount(account);
            if (token) setToken(token);
            if (refreshtoken) setRefreshToken(refreshtoken);

            return {...initialState, account}
        default:
            return state;
        }
}