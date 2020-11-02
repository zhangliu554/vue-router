
export const menuTree = state => {
    const { userStore: { menuTree } } = state, arr = []
    Object.keys(menuTree).forEach(key => {
        arr.push(menuTree[key])
    })
    return arr
}

export const token = state => state.userStore.token

export const user = state => state.userStore.user