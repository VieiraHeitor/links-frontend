import {createStore, applyMiddleware, combineReducers} from 'redux';
import ReduxPromise from 'redux-promise';

import signInReducer from './screens/Signin/SignInReducer';
import SignUpReducer from './screens/Signup/SignUpReducer';

const reducers = combineReducers({
    signIn : signInReducer,
    signUp : SignUpReducer
});

const store = createStore(reducers, applyMiddleware(ReduxPromise));


export default store;