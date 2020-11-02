import UserApi from '@/api/user-api.js'
export default {
    namespaced: true,
    state: {
        user: null, // 用户信息
        buttonIds: [],
        menuIds: [],
        menuTree: [],
    },
    mutations: {
        setUser(state, value) {
            state.user = value
        },
        setMenuTree(state, value) {
            state.menuTree = value
        }
    },
    actions: {
        async sessionMenuinfo({ commit }) {
            const { data } = await UserApi.getUserPrivilege()
            const { menuTree } = data.data
            commit('setMenuTree', menuTree)
            const userinfo = await UserApi.getUserinfo()
            commit('setUser', userinfo.data.data)
            const path = menuTree[0].url
            if (path) {
                return path
            }
            return null
        },
    }
}