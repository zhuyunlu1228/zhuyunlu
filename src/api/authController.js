import axios from './httpConfig';

export const loginCon=(data)=>{
    return axios.post('/auth/login',data);
}
export const registerCon=(data)=>{
    return axios.post('/auth/register',data)
}

