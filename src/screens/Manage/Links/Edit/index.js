import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import Layout from '../../../Layouts/Manage/index';
import FormGroup from '../../../../components/FormGroup';
import FormCheck from '../../../../components/FormCheck';

import {linkGet} from '../../../../actions/LinkActions';
import { connect } from 'react-redux';


const Edit = ({link, linkGet})=>{
    const { id } =useParams();

    useEffect( ()=>{
        linkGet(id);
    },[id, linkGet]);
   

    return(
    <Layout>
        <h1>Edit Link</h1>
        <div>
            <form>
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
export default connect(mapStateToProps, {linkGet})(Edit);