/**
 *
 * @param  {Array} userRouter 后台返回的用户权限json
 * @param  {Array} allRouter  前端配置好的所有动态路由的集合
 * @return {Array} realRoutes 过滤后的路由
 */


export function recursionRouter(userRouter = [], allRouter = []) {
    var realRoutes = allRouter
        .filter(item => userRouter.includes(item.name))
        .map(item => ({
            ...item,
            children: item.children
                ? recursionRouter(userRouter, item.children)
                : null
        }))
    return realRoutes
}

export const getCurrentChildren = (allRouter = [], current) => {
    let children=[];
    allRouter.forEach(value=>{
        console.log(value.name)
        if (value.name===current){
            children =value.children
        }
    })
    return children
}

export const getCurrentLevel = (allRouter = [], current) => {
    let ans;
    allRouter.forEach(function(item){
        if (item.name === current) {
            ans= item.name
        } else {
            if (recursionFind(item.children,current)){
                ans =item.name
            }


        }
    });
    return ans;
}


const recursionFind=(routes=[],current)=>{
    if (routes){
        return routes.reduce((acc,x)=>{
            if (x.name===current){
                return true;
            }else{
                return acc||recursionFind(x.children,current);
            }

        },false)

    }else{
      false
    }
}
// export const getCurrentSecondLevel=(allRouter=[],current)=>{

// }
/**
 *
 * @param {Array} routes 用户过滤后的路由
 *
 * 递归为所有有子路由的路由设置第一个children.path为默认路由
 */
export function setDefaultRoute(routes) {
    routes.forEach((v,) => {
        if (v.children && v.children.length > 0) {
            v.redirect = { name: v.children[0].name }
            setDefaultRoute(v.children)
        }
    })
}
