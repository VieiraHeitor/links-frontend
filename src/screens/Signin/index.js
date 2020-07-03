import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {signIn} from '../../actions/AccountActions';
import {getFormData} from '../../helpers/form';


const SignIn = (props)=>{
    const { account, signIn} = props; 

    if (account){
      return <Redirect to='/manage/links' />
    }

    const submitHandler = (e) => {
        e.preventDefault();
  
        const data = getFormData(e);
        signIn(data);
    };
    return(
        <div className="container h-100 pt-5">
            <h1>Sign In</h1>
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
                    <div>
                        <button className='btn btn-primary btn-round'>Submit</button>
                    </div>
                </form>
                <div className='container text-center fixed-bottom pb-5'>
                    <div className='text-muted'>Already have an account?
                        <Link to='/sign-up'>Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};
const mapStatetoProps = (state)=>{
    return {
        account: state.account.account
    };
};

export default connect(mapStatetoProps, {signIn})(SignIn);