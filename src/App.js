import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route}from 'react-router-dom';


import Home from './screens/Home';
import SignIn from './screens/Signin';
import SignUp from './screens/Signup';
import ManageLinks from './screens/Manage/Links'; 
import ManageLinksCreate from './screens/Manage/Links/Create'; 
import ManageLinksEdit from './screens/Manage/Links/Edit';
import { connect } from 'react-redux';

import {initAccount} from './actions/AccountActions';

const App = ({initAccount}) =>{

    useEffect(()=>{
        initAccount();
    },[initAccount]);

    return (
        <BrowserRouter>
        <div>
            <Switch>
                <Route path='/sign-in'><SignIn/></Route>
                <Route path='/sign-up'><SignUp/></Route>
                <Route path='/manage/links/create'><ManageLinksCreate/></Route>
                <Route path='/manage/links/edit/:id'><ManageLinksEdit/></Route>
                <Route path='/manage/links'><ManageLinks/></Route>
                <Route path='/'><Home/></Route>
            </Switch>
        </div>
        </BrowserRouter>
    )
};

const mapStateToProps=(state)=>{
    return{account: state.account.account};
};

export default connect(mapStateToProps, {initAccount})(App);
