//import { fetchPermission } from '@/api/data'
import router, { DynamicRoutes } from '@/router/index'
import dynamicRouter from '@/router/dynamicRouter'
import { recursionRouter} from '@/utils/recursionRouter'
import { getData } from '@/store/modules/permissionData'
// import { getCurrentChildren, getCurrentFirstLevel } from '@/utils/recursionRouter'
export default {
    namespaced: true,
    state: {
        permissionList: null /** 所有路由 */,
        topbarMenu: [] /** 顶部导航菜单 */,
        childMenu:[],/**侧部导航菜单 二级路由 */
        currentMenu: '' /** 当前active导航菜单 */,
        controlList: [] /** 完整的权限列表 */,
        avatar: ''/** 头像 */,
        account: ''/** 用户角色 */,
        firstLevelMenu:'' /** 一级路由 */,
        scondeLevelMenu:''

    },
    getters: {},
    mutations: {
        SET_AVATAR(state, avatar) {
            state.avatar = avatar
        },
        SET_ACCOUNT(state, account) {
            state.account = account
        },
        SET_PERMISSION(state, routes) {
            state.permissionList = routes
        },
        CLEAR_PERMISSION(state) {
            state.permissionList = null
        },
        SET_MENU(state, menu) {
            state.topbarMenu = menu
        },
        CLEAR_MENU(state) {
            state.topbarMenu = []
        },
        SET_CHILD_MENU(state,menu){
            state.childMenu=menu
        },
        CLEAR_CHILD_MENU(state){
            state.childMenu=[]

        },
        SET_CURRENT_MENU(state, currentMenu) {
            state.currentMenu = currentMenu
        },
        SET_CONTROL_LIST(state, list) {
            state.controlList = list
        },
        SET_CURRENT_FIRST_LEVEL(state,currentFirstLevel){
            state.firstLevelMenu=currentFirstLevel
        },
        SET_CURRENT_SECONDE_LEVEL(state,currentSecondLevel){
            state.scondeLevelMenu=currentSecondLevel
        }
    },
    actions: {
        async FETCH_PERMISSION({ commit, }) {
            // 添加需要改动--->授权的permisson的模块
            // permissionModules即是permissionList.data
            let permissionModules = getData()

          //  let permissionList = await fetchPermission()
            //FIXME
            //  commit('SET_AVATAR', 'http://47.92.141.59/images/avatar.png')
            //commit('SET_ACCOUNT', permissionList.admin_name)
            let routes = recursionRouter(permissionModules, dynamicRouter)
            let MainContainer = DynamicRoutes.find(v => v.path === '/')
            let children = MainContainer.children
            commit('SET_CONTROL_LIST', [...children, ...dynamicRouter])
            children.push(...routes)
            commit('SET_MENU', children)
            let initialRoutes = router.options.routes
            router.addRoutes(DynamicRoutes)
            commit('SET_PERMISSION', [...initialRoutes, ...DynamicRoutes])
        },

    }
}