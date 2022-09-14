import { apiRequest, routes } from '@/apiOptions'

export async function fetchPositions ({ commit }) {
    return await apiRequest('GET', routes.POSITIONS)
        .then(response => {
            if (response?.data?.success) {
                commit('SET_POSITIONS', response?.data?.positions)
            }
            return response?.data
        })
        .catch(err => {
            console.log('err', err)
            return 'fetchPositions error'
        })
}
