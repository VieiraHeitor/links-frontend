import React from 'react';
import Layout from '../../../Layouts/Manage/index'
import { getFormData } from "../../../../helpers/form";
import {linkCreate} from '../../../../actions/LinkActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Create = ({link, linkCreate})=>{

    const submitHandler = (e) =>{
        e.preventDefault();
        const data = getFormData(e);
        linkCreate(data);
    };

    if (link){
        return <Redirect to ='/manage/links'/>
    }

    return(
    <Layout>
        <h1>Create Link</h1>
        <div>
            <form onSubmit={submitHandler}>
                <div className='form-group'>
                    <label>Label</label>
                    <input type='text' name ='label' className='form-control'></input>
                </div>
                <div className='form-group'>
                    <label>URL</label>
                    <input type='text'name ='url' className='form-control'></input>
                </div>
                <div className='form-group form-check'>
                    <label className='form-check-label'>
                        <input type="checkbox" name='isSocial'/>
                        <span className ='form-check-sign'></span>
                        is Social
                    </label>
                </div>

                <div>
                    <button className='btn btn-primary btn-round'>Submit</button>
                </div>
            </form>
        </div>
    </Layout>
    )
};
const mapStateToProps = (state)=>{
    return {
        link: state.link.link
    };
};

export default connect(mapStateToProps, {linkCreate}) (Create);