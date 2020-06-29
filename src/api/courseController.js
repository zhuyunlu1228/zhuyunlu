import axios from './httpConfig';

export const createCourse = (data) => {
    return axios.post('/course/create', data)
}
export const getAllCourseList = () => {
    return axios.get('/course/list')
}
export const getOwnCourseList = () => {
    return axios.get('/course/listOwn')
}
export const getJoinCourseList = () => {
    return axios.get('/course/listJoin')
}
export const getCourseInfo = (courseId) => {
    return axios.get(`/course/${courseId}`)
}
export const changeCourseInfo = (data) => {
    return axios.put('/course/edit', data)
}