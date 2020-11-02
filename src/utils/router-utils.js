import Vue from 'vue'
import Session from './session-util'
import store from '../store/index'
import { validateRoute, filterSeverRouter } from './validate'
export default router => {
    router.beforeEach(async (to, from, next) => {
        const tokenSession = Session.getLocalSession('token')
        if (!tokenSession) { //判断token 是否存在
            const { pathname } = location;
            if (pathname === '/') {
                next()
            } else {
                Vue.prototype.$message({
                    type: 'error',
                    message: '用户登录过期',
                    duration: 1000,
                    onClose() {
                        location.href = '/'
                    }
                })
            }
        } else {
            await store.dispatch("userStore/sessionMenuinfo");
            const { userStore: { menuTree } } = store.state
            const { path: toPath, meta } = to
            const { noHasBreadcrumb } = meta
            const menupath = filterSeverRouter(menuTree)
            const pass = validateRoute(meta, menupath)
            // 判断是否显示面包屑  默认是有的
            store.commit('setNoHasBreadcrumb', noHasBreadcrumb ? noHasBreadcrumb : false)
            if (toPath !== '/' && !pass) {
                // 判断是否有子菜单
                Vue.prototype.$notify({
                    title: '无权限',
                    dangerouslyUseHTMLString: true,
                    message: '<strong class="my-notify">您无此页面的权限哟</strong>',
                    duration: 2000
                })
                next({ path: menupath[0] })
                return
            } else {
                if (toPath === '/') {
                    next({ path: menupath[0] })
                } else {
                    next()
                }
            }
        }
    })
}