import axios from './httpConfig'

export const uploadFile=(data)=>{
    axios.post('/file/Upload',data)
}
export const getCourseFile=(courseId)=>{
    ///FIXME the is url not parmas
    ///warning
    axios.get(`/file/${courseId}`)
}
export const queryFile=(params)=>{
    axios.get('/file',params)
}
export const deletFile=(fileId)=>{
    axios.delete(`/file/${fileId}`)
}