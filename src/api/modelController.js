import axios from './httpConfig'
export const uploadModel=(data)=>{
    return axios.post('/model/uploadModel',data)
}
export const addModelType=(data)=>{
    return axios.post('/model/addType',data)
}
//TODO
// ADD MORE CONTROLLER
export const addPicture=()=>{}