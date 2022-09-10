import { apiRequest, routes } from '@/apiOptions'

export async function fetchUsers ({ commit }, page = 1, count = 6) {
    return await apiRequest('GET', `${routes.USERS}?page=${page}&count=${count}`)
        .then(response => {
            if (response?.data?.success) {
                commit('SET_USERS', response?.data?.users)
            }
            return response?.data
        })
        .catch(err => {
            console.log('err', err)
            return 'fetchUsers error'
        })
}
