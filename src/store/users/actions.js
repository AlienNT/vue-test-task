import { apiRequest, fieldNames } from '@/apiOptions'

export async function fetchUsersData ({ commit }, route) {
    if (!route) return
    commit('SET_LOADING_STATUS', true)
    return await apiRequest('GET', route)
        .then(response => {
            if (response?.data?.success) {
                commit('SET_LOADING_STATUS', false)
                commit('SET_USERS_DATA', response?.data)
                commit('SET_USERS', response?.data?.users)
                commit('SET_ROUTE', response?.data[fieldNames.USERS_DATA.LINKS][fieldNames.USERS_DATA.NEXT_URL])
            }
            return response?.data
        })
        .catch(err => {
            commit('SET_LOADING_STATUS', false)
            console.log('err', err)
            return 'fetchUsersData error'
        })
}
