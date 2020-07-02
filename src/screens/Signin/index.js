import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {signIn} from './SignInActions';



const SignIn = (props)=>{
    const {account, signIn} = props; 

    const submitHandler = (e) => {
        e.preventDefault();
    
        signIn({email:'heitormaveiro"yahoo.com.br',password:'12345678'});
    };

    console.log('*** SignIn.Acoount', account);

    return(
        <div className="container h-100 pt-5">
            <h1>Sign In</h1>
            <div className="d-flex flex-xolumn h-100">
                <form onSubmit={submitHandler}>
                    <div className='form-group'>
                        <label>Email</label>
                        <input type='text' className='form-control'></input>
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input type='text' className='form-control'></input>
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
        account: state.signIn.account
    };
};

export default connect(mapStatetoProps, {signIn})(SignIn);