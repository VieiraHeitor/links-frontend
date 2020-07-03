import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Layout from '../../Layouts/Manage/index';

import {linkList, setLinkToRemove} from '../../../actions/LinkActions';

const Links = ({links,linkToRemove, linkList, setLinkToRemove}) => {

    useEffect(()=>{
       linkList(); 
    },[links, linkList]);

    return(
        <Layout>
        <div className='row'>
            <div className='col'>
                <h1>Links</h1>
            </div>
            <div className='col text-right align-self-bottom pt-2'>
                <Link to ='/manage/links/create' className='btn btn-primary'>
                    Add
                </Link>
            </div>
            </div>

            {links && links.length ? links.map((link) =>{

                const DeleteClick = (e) => setLinkToRemove(link);

                const border = (linkToRemove && linkToRemove.id === link.id) 
                ?  'border border-danger rounded'
                :'border border-transparent';


                return (
                    <div key={link.id} className={`pb-2 pt-2 pl-3 pr-3 d-flex flex-row justify-content-between ${border}`}>
                        <div className='pr-3'><img alt='placeholder' src='https://via.placeholder.com/100'></img></div>
                        <div className='align-self-center'>
                            <span className='text-primary clearfix'>{link.label}</span>
                            <span className='text-primary clearfix'>{link.url}</span>
                        </div>
                        <div className='ml-auto p-2 clearfix'>
                            <Link to={`/manage/links/edit/${link.id}`}>
                                <span>Edit</span>
                            </Link>
                            <button className='btn btn-clear' onClick={DeleteClick} >
                                Delete
                            </button>
                        </div>
                    </div>
                );
            }) :null}
    </Layout>
    )
};
const mapStateToProps = (state) =>{
    return {
        links: state.link.links,
        linkToRemove: state.link.linkToRemove,
    }
};

export default connect(mapStateToProps, {linkList, setLinkToRemove})(Links);