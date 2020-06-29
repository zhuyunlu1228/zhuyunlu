import axios from './httpConfig'
export const createClass=(data)=>{
    return axios.post('/class/create',data)
}
export const getClassByCourse=(params)=>{
    return axios.get('/class',params)
}
export const getJoinClass=()=>{
    return axios.get('/class/mine')
}
export const getClassInfo=(classId)=>{
    return axios.get(`/class/${classId}`)
}
export const changeClassInfo=(data)=>{
    return axios.put('/class/edit',data)
}
export const addStudent=(data)=>{
    return axios.post('/class/addStudent',data)
}
export const addStudentByExcel=(data)=>{
    return axios.post('/class/batchAddStudent',data)
}
export const getClassStudentList=(params)=>{
    return axios.get('/class/studentList',params)
}
export const deletClassStudent=(params)=>{
    return axios.delete('/class/deleteStudent',params)

}