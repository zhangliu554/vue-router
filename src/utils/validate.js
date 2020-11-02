
/* 路由校验 */

export  const validateRoute = (meta, routes) => {
    if (!Array.isArray(routes)) return false
    return routes.find(item => {
        const role = meta.role
        if (!role) {
            return true
        } else {
            return role && item === `/${role}`
        }
    })
}

export const filterSeverRouter = (routes, arr = []) => {
    if (!Array.isArray(routes)) return []
    routes.forEach(item => {
        if (item.children === null) {
            arr.push(item.url)
        }
        if (item.children && item.children.length) {
            filterSeverRouter(item.children, arr)
        }
    })
    return arr
}