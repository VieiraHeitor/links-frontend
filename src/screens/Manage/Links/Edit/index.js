import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import Layout from '../../../Layouts/Manage/index';
import FormGroup from '../../../../components/FormGroup';
import FormCheck from '../../../../components/FormCheck';

import {getFormData} from '../../../../helpers/form'
import {linkGet, linkUpdate} from '../../../../actions/LinkActions';
import { connect } from 'react-redux';


const Edit = ({link, linkGet, linkUpdate})=>{
    const { id } =useParams();

    useEffect( ()=>{
        linkGet(id);
    },[id, linkGet]);
   
    const submitHandler = (e) =>{
        e.preventDefault();
        const data = getFormData(e);
        linkUpdate(id, data);
    }

    return(
    <Layout>
        <h1>Edit Link</h1>
        <div>
            <form onSubmit={submitHandler}>
               <FormGroup label="label" name="label" data={link} type="text"/>
               <FormGroup label="url" name="url" data={link} type="text"/>
                <FormCheck label='is Social' name='isSocial' data={link}/>
                <div>
                    <button className='btn btn-primary btn-round'>Submit</button>
                </div>
            </form>
        </div>
    </Layout>
    )
};
const mapStateToProps = (state) =>{
    return{
        link: state.link.link
    }
};
export default connect(mapStateToProps, {linkGet, linkUpdate})(Edit);