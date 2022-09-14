export const SET_USERS_DATA = (state, data) => {
    state.usersData = data
    console.log('usersData', data)
}
export const SET_USERS = (state, data) => {
    if (state.users?.length) {
        state.users = state.users.concat(data)
    } else {
        state.users = data
    }
}

export const SET_ROUTE = (state, data) => {
    console.log('SET_ROUTE', data, state.route)
    state.route = data
}

export const SET_LOADING_STATUS = (state, data) => {
    console.log('SET_LOADING_STATUS', data, state.loading)
    state.loading = data
}
