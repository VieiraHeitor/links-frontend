import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {signUp} from '../../actions/AccountActions';
import { getFormData } from '../../helpers/form';

const SignUp = (props)=>{
    const { account, signUp} = props; 

    const submitHandler = (e) => {
        e.preventDefault();
        
        const data = getFormData(e);
        signUp(data);
    };

    if (account){
        return <Redirect to='/manage/links'></Redirect>
    }

    return(
        <div className="container h-100 pt-5">
            <h1>Sign Up</h1>
            <div className="d-flex flex-xolumn h-100">
                <form onSubmit={submitHandler}>
                    <div className='form-group'>
                        <label>Email</label>
                        <input type='text' name='email' className='form-control'></input>
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input type='password' name='password' className='form-control'></input>
                    </div>
                    <div className='form-group'>
                        <label>Password confirmation</label>
                        <input type='password' name='password_confirmation' className='form-control'></input>
                    </div>
                    <div>
                        <button className='btn btn-primary btn-round'>Submit</button>
                    </div>
                </form>
                <div className='container text-center fixed-bottom pb-5'>
                    <div className='text-muted'>Already have an account?
                        <Link to='/sign-in'>Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    )
   
};
const mapStateToProps = (state)=>{
    return {
        account: state.account.account
    };
};

export default  connect(mapStateToProps, {signUp} )(SignUp);