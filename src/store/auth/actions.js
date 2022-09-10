import { apiRequest, routes } from '@/apiOptions'

export async function fetchToken ({ commit }) {
    return await apiRequest('GET', routes.TOKEN)
        .then(response => {
            if (response?.data?.success) {
                commit('SET_TOKEN', response?.data?.token)
            }
            return response?.data
        })
        .catch(err => {
            console.log('err', err)
            return 'fetchToken error'
        })
}
