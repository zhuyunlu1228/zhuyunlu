export default {
    get UserToken() {
        return localStorage.getItem('token')
    },
    set UserToken(value) {
        localStorage.setItem('token', value)
    },
    get UserName() {
        return localStorage.getItem('user_name')
    },
    set UserName(value) {
        localStorage.setItem('user_name', value)
    },
    crumbList:[]
}