import { apiRequest, fieldNames, routes } from '@/apiOptions'

export async function fetchUsersData ({ commit }, route) {
    if (!route) return
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

export async function createUser ({ commit }, data) {
    return await apiRequest('POST', routes.USERS, data)
        .then(response => {
            commit('SET_CREATED_USER_RESPONSE', response?.data)
            if (response?.data?.success) {
                commit('RESET_USERS')
                this.dispatch('forms/clearErrors')
                this.dispatch('users/fetchUsersData', routes.USERS + '?page=1&count=6', false)
                localStorage.setItem('formData', '')
            }
        })
        .catch(err => {
            console.log('err', err)
            commit('SET_CREATED_USER_RESPONSE', err?.response?.data)
            this.dispatch('forms/setFormFieldErrors', err?.response?.data?.fails)
            return 'createUser error'
        })
}
