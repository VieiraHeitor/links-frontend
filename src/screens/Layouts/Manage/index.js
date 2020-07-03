import React from 'react';
import {connect} from 'react-redux';
import {signOut} from '../../../actions/AccountActions';
import { Redirect } from 'react-router-dom';

const Layout = ({children, signOut, account}) =>{
    if (!account){
        return <Redirect to = '/signin' />
    };

    const signOutHandler = (e) =>{
        e.preventDefault();
        signOut();
    };
    


    return(
        <div className='layout'>
            <nav className='navbar navbar-expand-g bg-primary text-light'>
                <div className='container d-glex w-100 justify-content-between'>
                    <div>
                        <span>Back</span>
                    </div>
                    <div className='text-center'>
                        <strong>Links</strong>
                    </div>
                    <div>
                        <button className='btn btn-clear' onClick={signOutHandler}>Exit</button>
                    </div>
                </div>
            </nav> 
        <div className='container'>{children}</div>
        </div>
    );
};

const mapStateToProps = (state)=>{
    return {
        account: state.account.account
    };
};

export default connect(mapStateToProps, {signOut})(Layout);