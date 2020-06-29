import axios from './httpConfig'
export const getProfile=()=>{
    return axios.get('/user/my')
}
export const changePassword=(data)=>{
    return axios.patch('/user/password',data)
}
export const changeAvatar=(data)=>{
    return axios.put('/user/avatar',data)
}
export const addTeacher=(data)=>{
    return axios.post('/user/teacher/add',data)
}
export const getTeacherList=()=>{
    return axios.get('/user/teacher/all')
}
export const lockTeacher=(params)=>{
    return  axios.get('/user/teacher/lock',params)
}
export const unlockTeacher=(params)=>{
    return axios.get('/usr/teacher/unlock',params)
}