export default {
    LOGIN_IN(state, value) {
        state.UserToken = value.token;
        state.UserName = value.userName;
    },
    LOGIN_OUT(state) {
        state.UserToken = '';
        state.userName = '';
    },
    setCrumbList(state, list) {
        state.crumbList = list
    },
    toggleNavCollapse(state) {
        state.isSidebarNavCollapse = !state.isSidebarNavCollapse
    }
}