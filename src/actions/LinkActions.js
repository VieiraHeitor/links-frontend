import {apiPost, apiGet} from '../helpers/api';

export const LINK_CREATE ='LINK_CREATE';
export const LINK_LIST ='LINK_LIST';
export const LINK_GET ='LINK_GET';

export const linkCreate = (data ) =>{
    
    const isSocial = !!data.isSocial;
    const payload = apiPost('/link',{...data, isSocial});

    return {type: LINK_CREATE, payload}
};

export const linkList = (data ) =>{
    const payload = apiGet('/link');

    return {type: LINK_LIST, payload}
};
export const linkGet = (id ) =>{
    const payload = apiGet(`/link/${id}`);
    return {type: LINK_GET, payload}
};